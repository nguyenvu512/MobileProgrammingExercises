import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("shopping.db");

export async function initDB() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS products(
      product_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price REAL NOT NULL CHECK(price>=0),
      stock INTEGER NOT NULL CHECK(stock>=0)
    );

    CREATE TABLE IF NOT EXISTS cart_items(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL,
      qty INTEGER NOT NULL CHECK(qty>0),
      UNIQUE(product_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );
  `);

  // Seed sample data nếu chưa có
  const count = await db.getFirstAsync<{count: number}>(
    "SELECT COUNT(*) as count FROM products"
  );
  if (count?.count === 0) {
    const products = [
      { id: "p1", name: "iPhone 15", price: 25000, stock: 10 },
      { id: "p2", name: "Galaxy S24", price: 22000, stock: 8 },
      { id: "p3", name: "Xiaomi 14", price: 15000, stock: 12 },
    ];
    for (const p of products) {
      await db.runAsync(
        "INSERT INTO products(product_id, name, price, stock) VALUES (?, ?, ?, ?)",
        [p.id, p.name, p.price, p.stock]
      );
    }
  }
}

export { db };
