import React from 'react'
import { Spinner } from '../spinner'
import { cn } from '@/lib/utils'

type LoaderProps = {
    loading: boolean
    children: React.ReactNode
    className?: string
    noPadding?: boolean
}

const Loader = ({ children, loading,className,noPadding }: LoaderProps) => {
    return loading ? (
        <div className={cn(className || "flex justify-center items-center h-full w-full")}>
            <Spinner noPadding={noPadding} />
        </div>
    ) : (children)
}

export default Loader