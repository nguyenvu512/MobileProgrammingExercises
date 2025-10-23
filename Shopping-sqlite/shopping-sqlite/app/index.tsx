import { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { initDB } from "../db/db";
import { getAllProducts } from "../db/product.repo";
import { addToCart } from "../db/cart.repo";
import { Product } from "../models/types";
import { useRouter } from "expo-router";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await initDB();
      const list = await getAllProducts();
      setProducts(list);
    })();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="🛒 Xem Giỏ hàng" onPress={() => router.push("/cart")} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.product_id}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              padding: 12,
              marginVertical: 6,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
            <Text>Giá: {item.price.toLocaleString()}₫</Text>
            <Text>Tồn: {item.stock}</Text>
            <Button title="Thêm vào giỏ" onPress={() => addToCart(item.product_id)} />
          </View>
        )}
      />
    </View>
  );
}
