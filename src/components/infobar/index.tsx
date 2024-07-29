import React from "react";
import Breadcrumb from "./bread-crumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-center py-1 mb-8">
      <Breadcrumb />
      <div className="flex gap-3 items-center">
        <Avatar className="h-auto w-fit">
        <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Avatar>
      </div>
    </div>
  );
};

export default InfoBar;
