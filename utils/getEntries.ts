import { getUserByClerkId } from "./auth";
import { prisma } from "@/utils/db";

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return entries;
};

export default getEntries;
