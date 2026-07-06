import { getUserByClerkId } from "./auth";
import { prisma } from "@/utils/db";

const getEntry = async (id) => {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user?.id,
        id: id,
      },
    },
    include: {
      analysis: true,
    },
  });
  return entry;
};

export default getEntry;
