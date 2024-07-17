"use client"
import { useChangePassword } from '@/hooks/settings/use-settings'
import React from 'react'
import Section from '../section-label'
import FormGenerator from '../form/form-genrator'
import Loader from '../loader'
import { Button } from '../ui/button'

type Props = {}

const ChangePassword = (props: Props) => {
  const {
    register,
    errors,
    onChangePassword,
    loading
  } = useChangePassword()
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
      <div className="lg:col-span-1">
        <Section
        label='Change Password'
        message='Reset your account password'
        />
      </div>
      <form className="lg:col-span-4" onSubmit={onChangePassword}>
        <div className="lg:w-[500px] flex flex-col gap-3">
          <FormGenerator
          register={register}
          errors={errors}
          name='password'
          placeholder='Enter your new password'
          type='text'
          inputType='input'
          />
          <FormGenerator
          register={register}
          errors={errors}
          name='ConfirmPassword'
          placeholder='Confirm your new password'
          type='text'
          inputType='input'
          />
          <Button className='bg-orange hover:bg-orange/90 text-white font-semibold'>
            <Loader loading={loading}>
              Change Password
            </Loader>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword