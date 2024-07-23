'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useStripe } from '@/hooks/billing/use-billing'
import Loader from '../loader'

type StripeConnectProps = {
  connected: boolean
}

export const StripeConnect = ({ connected }: StripeConnectProps) => {
  const { onStripeConnect, onStripeAccountPending } = useStripe()
  return (
    <Button
      disabled={connected}
      onClick={onStripeConnect}
      className='bg-orange hover:bg-orange/90 text-white'
    >
      <Loader loading={onStripeAccountPending}>
        {connected ? 'Connected' : 'Connect to stripe'}
      </Loader>
    </Button>
  )
}