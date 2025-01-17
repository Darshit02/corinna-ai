'use client'
import React from 'react'

import { Button } from '../ui/button'
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'
import { useEditEmail } from '@/hooks/email-marketing/use-marketing'
import Loader from '../loader'
import FormGenerator from '../form/form-genrator'

type EditEmailProps = {
  id: string
  onCreate(): void
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  setDefault: UseFormSetValue<FieldValues>
}

export const EditEmail = ({
  id,
  onCreate,
  errors,
  register,
  setDefault,
}: EditEmailProps) => {
  const { loading, template } = useEditEmail(id)
  setDefault('description', template ? JSON.parse(template) : '')
  return (
    <form
      onSubmit={onCreate}
      className="flex flex-col gap-3"
    >
      <Loader loading={loading}>
        <FormGenerator
          name="description"
          label="Message"
          register={register}
          errors={errors}
          inputType="textarea"
          lines={10}
          placeholder="your email description"
          type="text"
        />
        <Button className='bg-orange hover:bg-orange/90 text-white'>Save</Button>
      </Loader>
    </form>
  )
}