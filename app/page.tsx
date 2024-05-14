'use client'

import Link from 'next/link'
import classes from './page.module.css'
import { useState, useCallback, useEffect } from 'react'
import { useEventListener } from '@/hooks/useEventListener'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Box, Modal, TextField } from '@mui/material'

const galleryImages = [
    {
        original: '/images/gallery/gallery-1-original.webp',
        thumbnail: '/images/gallery/gallery-1.webp',
    },
    {
        original: '/images/gallery/gallery-2-original.webp',
        thumbnail: '/images/gallery/gallery-2.webp',
    },
    {
        original: '/images/gallery/gallery-3-original.webp',
        thumbnail: '/images/gallery/gallery-3.webp',
    },
    {
        original: '/images/gallery/gallery-4-original.webp',
        thumbnail: '/images/gallery/gallery-4.webp',
    },
    {
        original: '/images/gallery/gallery-5-original.webp',
        thumbnail: '/images/gallery/gallery-5.webp',
    },
    {
        original: '/images/gallery/gallery-6-original.webp',
        thumbnail: '/images/gallery/gallery-6.webp',
    },
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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function Home() {
    const [windowSize, setWindowSize] = useState(getSize())
    const element = globalThis.document ? window : null

    const handleResize = useCallback(() => {
        setWindowSize(getSize())
    }, [setWindowSize])

    useEventListener(element, 'resize', handleResize)

    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    const handleOpen = () => setOpen(true)

    const [activeIndex, setActiveIndex] = useState(0)

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setShowContent(true)
    }, [])

    if (!showContent) {
        return null
    }

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
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                }}
            >
                {galleryImages.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setActiveIndex(index)
                            handleOpen()
                        }}
                    >
                        <img src={item.thumbnail} />
                    </div>
                ))}
            </div>
            <section className={classes.subscribe}>
                <h2 className={classes.subscribeTitle}>Subscribe</h2>
                <p className={classes.subscribeText}>
                    Want to hear more? Enter your email below to hear from us!
                </p>
                <div className={classes.inputContainer}>
                    <div className={classes.fieldContainer}>
                        <TextField
                            sx={{
                                border: '1px solid rgb(191, 191, 191)',
                            }}
                            id="email-input"
                            fullWidth
                            hiddenLabel
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className={classes.buttonContainer}>
                        <div
                            className={classes.contactButton}
                            style={{ cursor: 'pointer' }}
                        >
                            Sign up
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ImageGallery
                        items={galleryImages}
                        startIndex={activeIndex}
                    />
                </Box>
            </Modal>
        </main>
    )
}
