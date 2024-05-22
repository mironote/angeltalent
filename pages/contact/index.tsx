'use client'

import classes from './index.module.css'
import Layout from '@/components/layout'

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp'
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp'
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp'

export default function Contact() {
    return (
        <Layout>
            <div className={classes.root}>
                <h2>ANGEL TALENT TRADING LIMITED</h2>
                <div className={classes.block}>
                    <LocationOnSharpIcon />
                    <p>
                        Address: RM.1801, EASEY COMM. BLDG., 253 HENNESSY ROAD,
                        HONG KONG
                    </p>
                </div>
                <div className={classes.block}>
                    <PhoneAndroidSharpIcon />
                    <p>Phone number: +86 152 0133 8681</p>
                </div>
                <div className={classes.block}>
                    <MailOutlineSharpIcon />
                    <p>
                        Email address:{' '}
                        <a href="mailto:Angeltalent@yeah.net">
                            Angeltalent@yeah.net
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    )
}
