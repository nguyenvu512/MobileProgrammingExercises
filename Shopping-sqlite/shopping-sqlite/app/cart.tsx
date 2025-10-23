// app/cart.tsx
import { useCallback, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { getCartItems, updateQty, removeCartItem } from "../db/cart.repo";
import { CartItem } from "../models/types";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const router = useRouter();

  // Hàm load dữ liệu giỏ hàng
  const load = useCallback(async () => {
    const list = await getCartItems();
    setItems(list);
  }, []);

  // Dùng useFocusEffect để reload khi màn hình được focus
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  // Tính tạm tính
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  // Tăng/giảm/xóa sản phẩm
  async function increase(item: CartItem) {
    await updateQty(item.id, item.qty + 1);
    await load();
  }

  async function decrease(item: CartItem) {
    if (item.qty > 1) {
      await updateQty(item.id, item.qty - 1);
      await load();
    }
  }

  async function removeItem(id: number) {
    await removeCartItem(id);
    await load();
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="⬅️ Quay lại" onPress={() => router.back()} />

      <FlatList
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#eee",
              paddingVertical: 8,
              marginBottom: 4,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>
              {item.qty} × {item.price.toLocaleString()}₫
            </Text>

            <View style={{ flexDirection: "row", gap: 10, marginTop: 6 }}>
              <Button title="+" onPress={() => increase(item)} />
              <Button title="-" onPress={() => decrease(item)} />
              <Button title="🗑️ Xóa" onPress={() => removeItem(item.id)} />
            </View>
          </View>
        )}
      />

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        Tạm tính: {subtotal.toLocaleString()}₫
      </Text>

      <Button title="Xem Hóa đơn" onPress={() => router.push("/invoice")} />
    </View>
  );
}
