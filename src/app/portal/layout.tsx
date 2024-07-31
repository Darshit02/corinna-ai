import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({
    children
}: Props) => {
  return (
    <div className='flex flex-col h-screen'>
        <div className="container flex justify-center flex-1 h-0">
            {children}
        </div>
    </div>
  )
}

export default Layout