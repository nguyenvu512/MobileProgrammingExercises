import { db } from "./db";
import { CartItem } from "../models/types";

export async function getCartItems(): Promise<CartItem[]> {
  return await db.getAllAsync<CartItem>(`
    SELECT c.id, c.product_id, c.qty, p.name, p.price, p.stock
    FROM cart_items c
    JOIN products p ON p.product_id = c.product_id
  `);
}

export async function addToCart(productId: string) {
  const item = await db.getFirstAsync<CartItem>(
    "SELECT * FROM cart_items WHERE product_id = ?",
    [productId]
  );

  if (item) {
    await db.runAsync(
      "UPDATE cart_items SET qty = qty + 1 WHERE product_id = ?",
      [productId]
    );
  } else {
    await db.runAsync(
      "INSERT INTO cart_items(product_id, qty) VALUES (?, 1)",
      [productId]
    );
  }
}

export async function updateQty(id: number, qty: number) {
  await db.runAsync("UPDATE cart_items SET qty = ? WHERE id = ?", [qty, id]);
}

export async function removeCartItem(id: number) {
  await db.runAsync("DELETE FROM cart_items WHERE id = ?", [id]);
}

export async function clearCart() {
  await db.runAsync("DELETE FROM cart_items");
}
