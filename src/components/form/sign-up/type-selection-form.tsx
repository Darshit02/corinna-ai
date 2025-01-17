import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Create an account</h2>
      <p className="text-iridium md:text-sm">
        Tell About yourself so we can tailor your
        <br />
        experience so it best suits you.
      </p>
      <UserTypeCard
         register={register}
            userType={userType}
            setUserType={setUserType}
            value="owner"
            title="I own a buissness"
            text="Setting up my account for my company."
      />
        <UserTypeCard
         register={register}
            userType={userType}
            setUserType={setUserType}
            value="student"
            title="I am a student"
            text="Setting up my account for my personal use."
      />
    </>
  );
};

export default TypeSelectionForm;
