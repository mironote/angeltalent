'use client'

import Link from 'next/link'
import classes from './page.module.css'
import { useState, useCallback } from 'react'
import { useEventListener } from '@/hooks/useEventListener'

const images = [
    '/images/gallery-1.webp',
    '/images/gallery-2.webp',
    '/images/gallery-3.webp',
    '/images/gallery-4.webp',
    '/images/gallery-5.webp',
    '/images/gallery-6.webp',
]

const getSize = () => {
    // 1080x1920 is a common iPhone resolution
    return {
        innerHeight: globalThis.innerHeight || 1920,
        innerWidth: globalThis.innerWidth || 1080,
        outerHeight: globalThis.outerHeight || 1920,
        outerWidth: globalThis.outerWidth || 1080,
    }
}

export default function Home() {
    const [windowSize, setWindowSize] = useState(getSize())
    const element = globalThis.document ? window : null

    const handleResize = useCallback(() => {
        setWindowSize(getSize())
    }, [setWindowSize])

    useEventListener(element, 'resize', handleResize)

    console.log(windowSize.innerWidth)

    return (
        <main className={classes.root}>
            <div className={classes.banner}>
                <img src="/images/home-banner.webp" />
            </div>
            <div className={classes.oneCompany}>
                <p>One World, One Market, One Company</p>
                <div className={classes.buttonContainer}>
                    <Link
                        className={classes.contactButton}
                        href={'/contact-us'}
                    >
                        Contact us
                    </Link>
                </div>
            </div>
            <div className={classes.about}>
                <h2>ABOUT ISC</h2>
                <div className={classes.container}>
                    <div>
                        <h2>Our Experience</h2>
                        <p>
                            Started in 2005, International Sourcing Company uses
                            the owner's and employee's vast knowledge to create
                            personal relationships in the business world.
                        </p>
                    </div>

                    <div>
                        <h2>Why Us?</h2>
                        <p>
                            International Sourcing Company is based in St.
                            Louis, Missouri and thrives to provide businesses
                            across the world with the products and services
                            needed for success
                        </p>
                        <div className={classes.buttonContainer}>
                            <Link
                                className={classes.servicesButton}
                                href={'/contact-us'}
                            >
                                Find out more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={classes.images}
                style={{
                    width: `${windowSize.innerWidth}px`,
                    height: `${(windowSize.innerWidth / 684) * 260}px`,
                    backgroundColor: 'red',
                }}
            >
                {images.map((item, index) => (
                    <div key={index}></div>
                ))}
            </div>
            <section className={classes.subscribe}>
                <h2 className={classes.subscribeTitle}>Subscribe</h2>
                <p className={classes.subscribeText}>
                    Want to hear more? Enter your email below to hear from us!
                </p>
            </section>
        </main>
    )
}
