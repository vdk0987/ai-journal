import { SignIn } from "@clerk/nextjs";

const signInPage = () => {
  return <SignIn forceRedirectUrl="/new-user" />;
};

export default signInPage;
