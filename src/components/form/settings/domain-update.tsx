import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import FormGenerator from '../form-genrator'

type Props = {
    name : string
    register : UseFormRegister<FieldValues>
    errors : FieldErrors<FieldValues>
}

const DomainUpdate = ({
    name,
    register,
    errors
}: Props) => {
  return (
    <div className='flex gap-2 pt-5 items-end w-[400px]'>
        <FormGenerator
        label='Domain Name'
        name="domain"
        register={register}
        errors={errors}
        type='text'
        inputType='input'
        placeholder={name}
        />
    </div>
  )
}

export default DomainUpdate