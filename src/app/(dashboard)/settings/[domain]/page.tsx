import { onGetCurrentDomainInfo } from "@/actions/settings";
import BotTrainingForm from "@/components/form/settings/bot-training-form";
import SettingsForm from "@/components/form/settings/form";
import InfoBar from "@/components/infobar";
import ProductTable from "@/components/products";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    domain: string;
  };
};

const DomainSettingspage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) redirect("/dashboard");
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0">
        <SettingsForm
          plan={domain.subscription?.plan!}
          chatBot={domain.domains[0]?.chatBot}
          id={domain.domains[0]?.id}
          name={domain.domains[0]?.name}
        />
        <BotTrainingForm id={domain.domains[0]?.id} />
        {domain ? (
          <ProductTable
            id={domain.domains[0]?.id}
            products={domain.domains[0]?.products || []}
          />
        ) : null}
      </div>
    </>
  );
};

export default DomainSettingspage;
