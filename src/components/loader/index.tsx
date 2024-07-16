import React from 'react'
import { Spinner } from '../spinner'

type LoaderProps = {
    loading: boolean
    children: React.ReactNode
}

const Loader = ({ children, loading }: LoaderProps) => {
    return loading ? (
        <div className="flex justify-center items-center h-full">
            <Spinner />
        </div>
    ) : (children)
}

export default Loader