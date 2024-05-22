'use client'

import { Box, TextField } from '@mui/material'
import classes from './index.module.css'
import Layout from '@/components/layout'
import { useCallback, useState } from 'react'
import axios from 'axios'

export default function ContactUs() {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        company: '',
        country: '',
        subject: '',
    })

    const onSubmit = useCallback(
        (e: any) => {
            e?.preventDefault()

            if (!contactData.name || !contactData.email) {
                alert('Name and email are requied!')
                return
            }
            if (!contactData.subject) {
                alert('Subject is requied!')
                return
            }
            axios
                .post('/api/email', contactData)
                .then(function (response) {
                    alert('We have received your message!')
                    setContactData({
                        name: '',
                        email: '',
                        phoneNumber: '',
                        company: '',
                        country: '',
                        subject: '',
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        [contactData]
    )

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setContactData({ ...contactData, [name]: value })
    }

    return (
        <Layout>
            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.title}>CONTACT US</h1>
                    <Box
                        component={'form'}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'auto',
                            gridGap: '24px',
                            width: '100%',
                        }}
                        noValidate
                        autoComplete="off"
                        action=""
                        onSubmit={onSubmit}
                    >
                        <TextField
                            id="name-input"
                            fullWidth
                            label="Full Name"
                            name="name"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            id="email-input"
                            fullWidth
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            id="phone-number-input"
                            fullWidth
                            label="Phone Number"
                            name="phoneNumber"
                            onChange={handleChange}
                        />
                        <TextField
                            id="company-input"
                            fullWidth
                            label="Company Name"
                            name="company"
                            onChange={handleChange}
                        />
                        <TextField
                            id="country-input"
                            fullWidth
                            label="Country"
                            name="country"
                            onChange={handleChange}
                        />

                        <TextField
                            id="subject-input"
                            multiline
                            rows={4}
                            placeholder="Subject*"
                            name="subject"
                            onChange={handleChange}
                        />
                        <div className={classes.buttonContainer}>
                            <button
                                type="submit"
                                className={classes.submitButton}
                            >
                                -- Send --
                            </button>
                        </div>
                    </Box>
                </div>
            </div>
        </Layout>
    )
}
