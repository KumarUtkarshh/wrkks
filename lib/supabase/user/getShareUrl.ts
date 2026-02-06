"use server";

import { getUserData } from "@/lib/supabase/user/getUserData";

export async function getShareUrl() {
  const data = await getUserData(["username"]);
  const baseUrl = process.env.SITE_URL || "https://wrkks.vercel.app";

  return data?.username ? `${baseUrl}/${data.username}` : baseUrl;
}
