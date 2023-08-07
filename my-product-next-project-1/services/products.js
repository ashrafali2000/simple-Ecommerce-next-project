import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "database","products.json" );

export function getAllProducs() {
   const data = fs.readFileSync(filePath);
   return JSON.parse(data);
}