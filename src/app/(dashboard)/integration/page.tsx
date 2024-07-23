import { onGetPaymentConnected } from "@/actions/settings"
import InfoBar from "@/components/infobar"
import IntegrationsList from "@/components/integrations"


type Props = {}

const IntegrationPage = async (props: Props) => {
    const payment = await onGetPaymentConnected()

    const connections = {
        stripe : payment ? true : false
    }

  return (
    <>
       <InfoBar/>
       <IntegrationsList connections={connections}/> 
    </>
  )
}

export default IntegrationPage