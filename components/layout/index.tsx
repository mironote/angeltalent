import { ReactElement } from 'react'
import Footer from '../footer'
import Header from '../header'
import ContextProvider from '@/context/contextProvider'

export default function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <ContextProvider>
                <Header />
                {children}
                <Footer />
            </ContextProvider>
        </>
    )
}
