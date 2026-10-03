-- Rename, not drop/add: a rename keeps existing data.
ALTER TABLE "organizations" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "users"         RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "memberships"   RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "services"      RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "monitors"      RENAME COLUMN "createdAt" TO "created_at";