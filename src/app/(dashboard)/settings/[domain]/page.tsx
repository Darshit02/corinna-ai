import { onGetCurrentDomainInfo } from '@/actions/settings'
import BotTrainingForm from '@/components/form/settings/bot-training-form'
import SettingsForm from '@/components/form/settings/form'
import InfoBar from '@/components/infobar'
import { redirect } from 'next/navigation'
import React from 'react'
import { any } from 'zod'

type Props = {
    params : {
        domain : string
    }
}

const DomainSettingspage = async ({
    params
}: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain)
  if(!domain) redirect('/dashboard')
  return (
    <>
    <InfoBar/>
    <div className="overflow-y-auto w-full chat-window flex-1 h-0">
      <SettingsForm
      plan={domain.subscription?.plan 
      || "STANDARD"
      }
      chatBot={domain.domains[0].chatBot || any}
      id={domain.domains[0].id}
      name={domain.domains[0].name}
      />
      <BotTrainingForm
      id={domain.domains[0].id}
      />
    </div>
    </>
  )
}

export default DomainSettingspage