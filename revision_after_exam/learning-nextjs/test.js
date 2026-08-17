import { readFile } from "fs/promises";

async function run() {
  try {
    const data = await readFile("data.txt", "utf-8");
    console.log(data); // Logs perfectly after the file is read
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

run()