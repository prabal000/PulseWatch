import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

// The shared .env lives at the repo root, two levels up from this package.
config({ path: "../../.env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: env("DATABASE_URL") },
});