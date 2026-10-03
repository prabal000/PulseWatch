import { prisma } from "./client";

// PROTOTYPE: smoke test only. Real password hashing arrives on Day 3.
async function main() {
  const org = await prisma.organization.create({
    data: { name: "Smoke Org", slug: `smoke-${Date.now()}` },
  });
  const user = await prisma.user.create({
    data: { email: `smoke-${Date.now()}@example.com`, passwordHash: "NOT_A_REAL_HASH" },
  });
  await prisma.membership.create({
    data: { userId: user.id, organizationId: org.id, role: "OWNER" },
  });

  const loaded = await prisma.organization.findUnique({
    where: { id: org.id },
    include: { memberships: { include: { user: true } } },
  });
  console.log("Loaded org with members:", loaded?.memberships.length);

  // The database itself must reject a duplicate membership.
  try {
    await prisma.membership.create({
      data: { userId: user.id, organizationId: org.id, role: "ADMIN" },
    });
    console.log("FAIL: duplicate membership was accepted");
  } catch (e) {
    console.log("OK: duplicate rejected, code =", (e as { code?: string }).code);
  }

  // Cascade: deleting the org must remove its memberships.
  await prisma.organization.delete({ where: { id: org.id } });
  const left = await prisma.membership.count({ where: { organizationId: org.id } });
  console.log("Memberships left after org delete (want 0):", left);

  await prisma.user.delete({ where: { id: user.id } });
}

main().finally(() => prisma.$disconnect());