import React from 'react'
import { Card } from '../ui/card'
import { CloudIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import Modal from '../modal'
import { IntegrationModalBody } from './integration-modal-body'

type Props = {
    name : 'stripe'
    logo : string
    title : string
    description : string
    connections : {
        [key in 'stripe'] : boolean
    }
}

const IntegrationTrigger = ({
    name,
    logo,
    title,
    description,
    connections
}: Props) => {
  return (
    <Modal
    title={title}
    type="Integration"
    logo={logo}
    description={description}
    trigger={
      <Card className="px-3 py-2 cursor-pointer flex gap-2 text-gray-500 items-center">
        <CloudIcon size={20} />
        {connections[name] ? 'connected' : 'connect'}
      </Card>
    }
  >
    <Separator orientation="horizontal" />
    <IntegrationModalBody
      connections={connections}
      type={name}
    />
  </Modal>
  )
}

export default IntegrationTrigger