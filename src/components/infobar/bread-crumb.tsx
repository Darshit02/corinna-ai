"use client"
import React from 'react'

type Props = {}

const Breadcrumb = (props: Props) => {
    //WIP : set up the breadcrumb and breadcrumb items
    //WIP : set up description for each page
  return (
    <div className='flex flex-col'>
        <div className="flex gap-5 items-center">
            <h2 className="text-3xl font-bold capitalize">
                Title
            </h2>
        </div>
        <p className="text-gray-500 text-sm">
            {/* Breadcrumb items */}
            {/* {page == 'settings'
            ? 'Manage your account settings, preferences and integrations'
            : page == 'dashboard'
            ? 'A detailed overview of your metrics,usage,customer and more'
            : page == 'appointment'
            ? 'view and edit all your customer appointments'
            : page == 'email-marketing'
            ? 'send bulk emails to your customers'
            : page == 'integration'
            ? 'Connect third-party application into Corinna-AI' : */}
             "Modify domain settings, change chatbot options, enter sales quations and train your bot to do what you want it to."
        {/* } */}
        </p>
    </div>
  )
}

export default Breadcrumb