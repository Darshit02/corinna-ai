import { onDomainCustomerResponses, onGetAllDomainBookings } from '@/actions/appointment'
import { onGetDomainProductsAndConnectedAccountId } from '@/actions/payment'
import PortalForm from '@/components/form/portal/portal-form'
import React from 'react'

type Props = {
    params : {
        domainid : string,
        customerid : string
    }
}

const CustomerSignUpForm = async (
    {
        params
    }: Props) => {
        const questions = await onDomainCustomerResponses(params.customerid)
        const products = await onGetDomainProductsAndConnectedAccountId(params.domainid)
        
        if(!questions) return null
        return (
            <PortalForm
            email={questions.email!}
            products={products?.products}
            amount={products?.amount}
            domainid={params.domainid}
            customerId={params.customerid}
            questions={questions.questions}
            stripeId={products?.stripeId!}
            type="Payment"
          />
  )
}

export default CustomerSignUpForm