import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

// Load the repo-root .env regardless of where the process was started.
config({ path: fileURLToPath(new URL("../../../.env", import.meta.url)) });

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Copy .env.example to .env first.");
}

export const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});