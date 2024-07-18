import Section from "@/components/section-label";
import UploadButton from "@/components/upload-button";
import { BotIcon } from "@/icons/bot-icon";
import Image from "next/image";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  chatBot: {
    id: string;
    icon: string;
    welcomeMessage: string;
  } | null;
};

const EditChatBotIcon = ({
    register,
    errors,
    chatBot,
}: Props) => {
  return (
    <div className="py-5 flex flex-col gap-5 items-start">
        <Section
        label="Chatbot Icon"
        message="Change the icon for your chatbot"
        />
        <UploadButton
        label="Edit Icon"
        register={register}
        errors={errors}
        />
        {
            chatBot?.icon ? (
                <div className="rounded-full overflow-hidden">
                    <Image 
                    src={`https://ucarecdn.com/${chatBot.icon}/`}
                    alt="Chatbot Icon"
                    width={80}
                    height={80}
                    />
                </div>
            ) : (
                <div className="rounded-full cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-grandis">
                    <BotIcon/>
                </div>
            )
        }
    </div>
  )
};

export default EditChatBotIcon;
