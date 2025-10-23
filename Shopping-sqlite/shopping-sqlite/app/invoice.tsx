import { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { getCartItems, clearCart } from "../db/cart.repo";
import { CartItem } from "../models/types";
import { useRouter } from "expo-router";

export default function InvoicePage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const list = await getCartItems();
      setItems(list);
    })();
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const vat = total * 0.1;
  const grandTotal = total + vat;
  const now = new Date().toLocaleString();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="⬅️ Quay lại" onPress={() => router.back()} />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>🧾 HÓA ĐƠN</Text>
      <Text>Ngày giờ: {now}</Text>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.name} — {item.qty} × {item.price.toLocaleString()}₫ = {(item.qty * item.price).toLocaleString()}₫
          </Text>
        )}
      />

      <View style={{ marginTop: 20 }}>
        <Text>Tổng: {total.toLocaleString()}₫</Text>
        <Text>VAT (10%): {vat.toLocaleString()}₫</Text>
        <Text style={{ fontWeight: "bold" }}>Thành tiền: {grandTotal.toLocaleString()}₫</Text>
      </View>

      <Button
        title="✅ Thanh toán"
        onPress={async () => {
          await clearCart();
          alert("Thanh toán thành công!");
          router.push("/");
        }}
      />
    </View>
  );
}
