import { SignUp } from "@clerk/nextjs";

const signUpPage = () => {
  return <SignUp fallbackRedirectUrl="/new-user" forceRedirectUrl="/new-user" />;
};

export default signUpPage;
