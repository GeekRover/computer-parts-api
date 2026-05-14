import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "./src/db/db.json");

export const readProduct = () => {
  const products = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(products);
};
