"use server";

import fs from "fs/promises";
import path from "path";
import * as PdfParse from "pdf-parse-new";

const parser = new PdfParse.SmartPDFParser({
  oversaturationFactor: 2.0,
  enableFastPath: true,
});

export async function extractResume() {
  const buffer = await fs.readFile("C:/Users/utk27/Downloads/google.pdf");
  const result = await parser.parse(buffer);

  const filePath = path.join(process.cwd(), "output.json");

  await fs.writeFile(filePath, JSON.stringify(result, null, 2));

  console.log(result);
}
