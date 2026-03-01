import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();
  const isMatch = await prisma.user.findUnique({
    where: {
      clerkId: user?.id,
    },
  });

  if (!isMatch) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    });
  }

  redirect("/journal");
};

const newUser = async () => {
  await createNewUser();
  return (
    <div>
      <h1>New User</h1>
    </div>
  );
};

export default newUser;
