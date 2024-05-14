import React from 'react'
import ThemeRegistry from './ThemeRegistry'

const contextProviders = [ThemeRegistry]

/**
 * web app context provider
 * @param props
 * @returns
 */
const ContextProvider = (props: any) => {
    return contextProviders.reduceRight((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>
    }, props.children)
}

export default ContextProvider
