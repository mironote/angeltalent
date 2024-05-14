import Link from 'next/link'
import classes from './index.module.css'

export default function Services() {
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h1 className={classes.title}>Services</h1>
                <div className={classes.blockContainer}>
                    <div className={classes.block}>
                        <h2 className={classes.blockTitle}>Distribution</h2>
                        <img
                            className={classes.blockImage}
                            src="/images/services-1.webp"
                        />
                        <div className={classes.blockContent}>
                            We distribute goods all across the world to assist
                            companies with receiving the products they need to
                            succeed in today's market.
                        </div>
                        <div className={classes.buttonContainer}>
                            <Link
                                className={classes.contactButton}
                                href={'/about'}
                            >
                                -- Find out more --
                            </Link>
                        </div>
                    </div>
                    <div className={classes.block}>
                        <h2 className={classes.blockTitle}>Consulting</h2>
                        <img
                            className={classes.blockImage}
                            src="/images/services-2.webp"
                        />
                        <div className={classes.blockContent}>
                            ISC uses their vast qualifications to assist our
                            clients with management services, strategic sourcing
                            and international business interests
                        </div>
                        <div className={classes.buttonContainer}>
                            <Link
                                className={classes.contactButton}
                                href={'/about'}
                            >
                                -- Find out more --
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
