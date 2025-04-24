import { defineLive } from "next-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "2024-11-01" }),
  // Add tokens for live preview functionality
  serverToken: process.env.SANITY_SERVER_TOKEN,
  browserToken: process.env.SANITY_BROWSER_TOKEN
});