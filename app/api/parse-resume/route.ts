import { NextRequest, NextResponse } from "next/server";
import * as PdfParse from "pdf-parse-new";

const parser = new PdfParse.SmartPDFParser({
  oversaturationFactor: 2.0,
  enableFastPath: true,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file || file.type !== "application/pdf") {
      return NextResponse.json(
        { msg: "Please upload a valid PDF file" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const data = await parser.parse(buffer);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { msg: "Failed to parse PDF", details: (error as Error).message },
      { status: 500 },
    );
  }
}
