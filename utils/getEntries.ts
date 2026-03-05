import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/utils/db";

const getEntries = async () => {
  const user = await currentUser();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return entries
};

export default getEntries;