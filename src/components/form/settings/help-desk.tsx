"use client";
import Section from "@/components/section-label";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { useHelpDesk } from "@/hooks/settings/use-settings";
import React from "react";
import FormGenerator from "../form-genrator";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import Accordion from "@/components/accordian";

type Props = {
  id: string;
};

const HelpDesk = ({ id }: Props) => {
  const { register, loading, onSubmitQuestion, isQuestions, errors } =
    useHelpDesk(id);
  return (
    <Card className="w-full grid grid-cols-1 lg:grid-cols-2 mt-3">
      <CardContent className="p-6 border-r-[1px]">
        <CardTitle>Help Desk</CardTitle>
        <form onSubmit={onSubmitQuestion} className="flex flex-col gap-6 mt-10">
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you believe is frequently asked."
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              name="question"
              form="help-desk-form"
              placeholder="Type your question here"
              type="text"
              lines={5}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Section
              label="Answer"
              message="Add a Answer of that question."
            />
            <FormGenerator
              inputType="textarea"
              register={register}
              errors={errors}
              name="answer"
              form="help-desk-form"
              placeholder="Type your Answer here"
              type="text"
              lines={5}
            />
          </div>
          <Button
            type="submit"
            className="bg-orange hover:bg-orange/90 hover:opacity-70 transition duration-150 ease-in-out text-white font-semibold"
          >
            Create
          </Button>
        </form>
      </CardContent>
      <CardContent className="p-6 overflow-y-auto chat-window">
        <Loader
        loading={loading}
        >
{
    isQuestions.length ? (
        isQuestions.map((question) => (
            <Accordion
            key={question.id}
            trigger={question.question}
            content={question.answer}
        />
        ))
    ) : (
        <CardDescription>
            No questions found. Please add a question.
        </CardDescription>
    )
}
        </Loader>
      </CardContent>
    </Card>
  );
};

export default HelpDesk;
