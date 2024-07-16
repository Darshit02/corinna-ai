import ButtonHandler from '@/components/form/sign-up/button-handler'
import SignUpFormProvider from '@/components/form/sign-up/form-provider'
import HighLightBar from '@/components/form/sign-up/high-light-bar'
import RagistrationFormStep from '@/components/form/sign-up/registration-step'
import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
    <div className="flex flex-col h-full gap-3">
      <SignUpFormProvider>
        <div className="flex flex-col gap-3">
          <RagistrationFormStep />
          <ButtonHandler />
          <HighLightBar/>
        </div>

      </SignUpFormProvider>
    </div>
  </div>
  )
}

export default SignUp