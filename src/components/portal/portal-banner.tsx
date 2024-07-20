import Image from 'next/image'
import React from 'react'

type Props = {}

const PortalBanner = (props: Props) => {
  return (
    <div className='w-full bg-muted flex justify-center py-5'
    >
        <Image
        src="/image/logo.png"
        alt="logo"
        sizes='100vw'
        style={{
            width: '100%',
            height: 'auto'
        }}
        width={0}
        height={0}
        />
    </div>
  )
}

export default PortalBanner