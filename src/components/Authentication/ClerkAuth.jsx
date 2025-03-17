import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const ClerkAuth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default ClerkAuth;
