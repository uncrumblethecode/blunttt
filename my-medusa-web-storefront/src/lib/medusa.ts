// src/lib/medusa.ts
import Medusa from "@medusajs/js-sdk"

export const sdk = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_URL || "http://localhost:9000",
  debug: process.env.NODE_ENV === "development",
  auth: { type: "session" }, // fine for web storefronts
})
