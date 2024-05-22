/* eslint-disable react/no-unescaped-entities */
'use client'

import Link from 'next/link'
import classes from './index.module.css'
import { useState, useCallback, useEffect, ReactElement } from 'react'
import { useEventListener } from '@/hooks/useEventListener'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Box, Modal, TextField } from '@mui/material'
import Layout from '@/components/layout'

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

const Page = () => {
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
        <Layout>
            <div className={classes.root}>
                <div className={classes.banner}>
                    <img src="/images/home-banner.jpg" />
                </div>
                <div className={classes.oneCompany}>
                    <p>Your vision, our mission</p>
                    <p>Your Success</p>
                    <div className={classes.buttonContainer}>
                        <div className={classes.contactButton}>
                            <Link href={'/contact-us'}>Contact us</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.about}>
                    <h2>ABOUT ANGELTALENT</h2>
                    <div className={classes.container}>
                        <div>
                            <h2>Our Stories</h2>
                            <p>
                                ANGELTALENT, headquartered in Hong Kong,
                                possesses an unmatched insight into both the
                                Chinese and global markets. The company was
                                founded by Angelina, a mainland China native
                                with a diverse background spanning China, Dubai,
                                Switzerland, France, and Réunion Island. She
                                majored in international trade and brings
                                extensive experience from the high-end
                                hospitality industry. This diverse experience
                                equips Angelina and ANGELTALENT to deliver
                                exceptional customer service, combining superior
                                communication skills, personalized service, and
                                business acumen to meet and exceed client
                                expectations in the sourcing industry.
                            </p>
                        </div>

                        <div>
                            <h2>Why Us?</h2>
                            <p>
                                At ANGELTALENT, we stand out by offering a
                                seamless bridge between Chinese manufacturers
                                and global markets. Our deep understanding of
                                both local and international landscapes allows
                                us to provide customized solutions tailored to
                                your needs. We are committed to excellence,
                                ensuring top-quality products and exceptional
                                customer service. With ANGELTALENT, you benefit
                                from our extensive network, reliable sourcing,
                                and a dedicated team focused on driving your
                                business success. Choose us for a partnership
                                that prioritizes your growth and satisfaction.
                            </p>
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
            </div>
        </Layout>
    )
}

export default Page
