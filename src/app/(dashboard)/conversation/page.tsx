import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messanger from '@/components/conversations/messanger'
import InfoBar from '@/components/infobar'
import NavBar from '@/components/navbar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

const ConversationPage = async (props: Props) => {
    const domains = await onGetAllAccountDomains()
  return (
    <div className='w-full h-full flex'>
      <ConversationMenu domains={domains?.domains}/>
      <Separator orientation='vertical'/>
      <div className="w-full flex flex-col">
        <div className="px-5">
          <InfoBar/>
        </div>
        <Messanger/>
      </div>
    </div>
  )
}

export default ConversationPage