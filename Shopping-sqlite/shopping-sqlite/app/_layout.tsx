// app/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Sản phẩm" }} />
        <Stack.Screen name="cart" options={{ title: "Giỏ hàng" }} />
        <Stack.Screen name="invoice" options={{ title: "Hóa đơn" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
