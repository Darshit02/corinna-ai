import Section from '@/components/section-label'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import FormGenerator from '../form-genrator'

type Props = {
  message: string
  register: UseFormRegister<FieldValues>
  errors : FieldErrors<FieldValues>
}

const GreetingMessage = ({
  message,
  register,
  errors
}: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <Section
        label='Greeting Message'
        message='Customize your welcome message'
      />
      <div className="lg:w-[500px]">
        <FormGenerator
        placeholder={message}
        register={register}
        errors={errors}
        name='welcomeMessage'
        type='text'
        lines={2}
        inputType='textarea'
        />
      </div>
    </div>
  )
}

export default GreetingMessage