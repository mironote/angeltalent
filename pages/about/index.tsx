/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import classes from './index.module.css'
import Layout from '@/components/layout'
import { useEffect, useState } from 'react'

export default function About() {
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
                <div className={classes.container}>
                    <img
                        className={classes.banner}
                        src="/images/about-banner.webp"
                    />
                    <h1 className={classes.title}>ABOUT US </h1>
                    <div className={classes.content}>
                        <div className={classes.contentLeft}>
                            <h2 className={classes.subTitle}>
                                Here to help you succeed
                            </h2>
                            <div className={classes.contentText}>
                                <p>
                                    At ANGELTALENT We offer a one-stop shop for
                                    all commercial products sourcing. While most
                                    supply companies use the services of a
                                    retailer, distributor, stock product
                                    supplier, overseas trading firms and
                                    factories, we combine all of that into one.
                                </p>
                                <p>
                                    The result is a more simplified and
                                    cost-effective 'factory-direct' service –
                                    with more value to you.
                                </p>
                                <p>
                                    we specialize in sourcing high-quality
                                    products from around the globe to meet your
                                    specific needs. Whether you're a small
                                    business looking to expand your product line
                                    or a large corporation seeking
                                    cost-effective sourcing solutions, we are
                                    here to help.
                                </p>

                                <p className={classes.boldTitle}>
                                    Our Services:
                                </p>

                                <ul>
                                    <li>
                                        <span className={classes.bold}>
                                            Product Sourcing:{' '}
                                        </span>
                                        With our extensive network of suppliers
                                        and manufacturers, we can find the
                                        perfect products for your business, no
                                        matter how niche or specialized. We
                                        research and identify potential
                                        suppliers based on our client's
                                        requirements, industry expertise and
                                        market knowledge. We have a database of
                                        reliable suppliers and maintain
                                        relationships with them. In evaluating
                                        these suppliers, we often conduct site
                                        visits, interviews, and background
                                        checks to ensure the suppliers meet the
                                        client's standards.{' '}
                                    </li>
                                    <li>
                                        <span className={classes.bold}>
                                            Quality Assurance:
                                        </span>{' '}
                                        We understand the importance of quality
                                        control. That's why we meticulously vet
                                        each supplier to ensure that the
                                        products you receive meet the highest
                                        standards. We inspect the manufacturing
                                        facilities, perform sample testing and
                                        implement quality assurance processes to
                                        ensure consistency and reliability.{' '}
                                    </li>
                                    <li>
                                        <span className={classes.bold}>
                                            Negotiation and contracting:
                                        </span>{' '}
                                         We negotiate with suppliers on behalf
                                        of our clients to secure favorable
                                        terms, prices and contracts.{' '}
                                    </li>
                                    <li>
                                        We utilize our industry knowledge and
                                        bargaining power to achieve the best
                                        possible agreements.{' '}
                                    </li>
                                    <li>
                                        <span className={classes.bold}>
                                            Logistics and Shipping:
                                        </span>{' '}
                                        From arranging transportation to
                                        managing customs clearance, our
                                        logistics partner ensures that your
                                        products are delivered to your doorstep
                                        on time and in pristine condition.
                                    </li>
                                    <li>
                                        <span className={classes.bold}>
                                            Custom Solutions:
                                        </span>{' '}
                                        Every business is unique, which is why
                                        we offer customized sourcing solutions
                                        tailored to your specific requirements
                                        and budget. monitor and manage the
                                        overall supply chain to optimise
                                        efficiency, minimise risks and enhance
                                        cost-effectiveness.
                                    </li>
                                </ul>

                                <p className={classes.boldTitle}>
                                    Why Choose Us:
                                </p>

                                <ul>
                                    <li>
                                        <span className={classes.bold}>
                                            Experience:
                                        </span>{' '}
                                        With years of experience in the sourcing
                                        industry, we have the expertise and
                                        knowledge to navigate the complexities
                                        of global supply chains.
                                    </li>
                                    <li>
                                        <span className={classes.bold}>
                                            Reliability:
                                        </span>{' '}
                                        You can count on us to deliver results.
                                        We pride ourselves on our reliability
                                        and commitment to customer satisfaction.
                                    </li>
                                    <li>
                                        <span className={classes.bold}>
                                            Transparency:
                                        </span>{' '}
                                        We believe in transparent communication
                                        every step of the way. You'll always
                                        know where your products are and when to
                                        expect them.
                                    </li>
                                    <li>
                                        <span className={classes.bold}>
                                            Cost-Effectiveness:
                                        </span>{' '}
                                        Our efficient sourcing processes and
                                        strong supplier relationships enable us
                                        to offer competitive pricing without
                                        compromising on quality.
                                    </li>
                                </ul>

                                <p className={classes.boldTitle}>
                                    Get Started Today:
                                </p>
                                <p>
                                    Ready to streamline your sourcing process
                                    and take your business to the next level?
                                    Contact us today to discuss your needs and
                                    discover how [Company Name] can help you
                                    achieve your goals. Let us be your trusted
                                    sourcing partner.
                                </p>
                                <p>Your Success Starts Here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
