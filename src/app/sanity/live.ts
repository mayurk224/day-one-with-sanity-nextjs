import { defineLive } from "next-sanity";
import { client } from "./client";

// Get the token from environment variables
const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "2024-11-01" }),
  // Add tokens for live preview functionality
  serverToken: process.env.SANITY_SERVER_TOKEN,
  browserToken: process.env.SANITY_BROWSER_TOKEN
});