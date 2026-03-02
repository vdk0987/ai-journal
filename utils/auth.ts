import { prisma } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";

export const getClerkId = async () => {
  const { userId } = await auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
  });
  return user;
};
