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
                    <h1 className={classes.title}>ABOUT ISC</h1>
                    <div className={classes.content}>
                        <div className={classes.contentLeft}>
                            <h2 className={classes.subTitle}>
                                Here to help you succeed
                            </h2>
                            <div className={classes.contentText}>
                                <p>
                                    <span>
                                        <span>
                                            Management Services Division
                                        </span>{' '}
                                        - International Sourcing Company's
                                        Management Services Division will
                                        provide management and consulting
                                        services for our client's product and/or
                                        service offerings within the Central and
                                        Southern Illinois, Indiana, Kansas,
                                        Missouri, Northern Arkansas, and
                                        Northern Western Kentucky markets.
                                        Additionally, we will assist small to
                                        medium size business organizations
                                        market and sell their product offerings
                                        through a variety of channels. The
                                        market entry channels could be the
                                        Internet, big box retailers, and/or food
                                        industry retailers such as grocery
                                        stores, food processors, and convenient
                                        stores operations. This business unit
                                        will focus its efforts on providing
                                        exceptional brand management, marketing
                                        analysis, and selling services to meet
                                        our client's needs. This business unit
                                        could join forces with our E-Business
                                        partners and/or our Strategic Sourcing
                                        Division to offer a complete one-stop
                                        resource service package to enable a new
                                        startup or a longstanding entity to gain
                                        valuable assistance. More importantly,
                                        International Sourcing Company will be
                                        able to tailor a service package that
                                        specifically meets our client's needs to
                                        expand and maximize their potential.
                                        This segment will utilize the most
                                        up-to-date market intelligence to assist
                                        our clients in making informed strategic
                                        business decision. The fee schedule for
                                        these services can be addressed through
                                        a variety of creative solutions to meet
                                        your company's unique business needs.
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <br />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <span>Strategic Sourcing</span> -
                                        International Sourcing Company Strategic
                                        Sourcing Division provides strategic
                                        sourcing solutions that can achieve
                                        quality standards and logistical
                                        requirements of even the toughest of
                                        conditions. Our team can handle the
                                        business development and procurement
                                        activities from start to finish. Our
                                        team has cultivated relationships with
                                        over 200+ manufacturers worldwide and
                                        can utilize these relationships to
                                        mitigate challenges to yield successful
                                        procurement strategies to implement for
                                        your organization. These long-standing
                                        relationships forged by our team will
                                        yield quality control standards that
                                        will meet or exceed your organization's
                                        quality assurance initiatives.
                                        Furthermore, our team will visit any
                                        plant around the globe unannounced to
                                        ensure our client's quality standards
                                        are consistently and accurately being
                                        achieved. Our team's international
                                        sourcing experience is comprehensive and
                                        grounded in sound financial metrics that
                                        enhance the financial performance of our
                                        clients.
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        Our team can assist your organization in
                                        the following ways:
                                    </span>
                                </p>
                                <p></p>
                                <ul>
                                    <li>
                                        We can find low cost providers in any
                                        area of the world to produce your
                                        product offerings per your
                                        specifications;
                                    </li>
                                    <li>
                                        We can perform blind quality audits at
                                        any location around the globe at
                                        intervals per your specifications;
                                    </li>
                                    <li>
                                        We can assist in creating and
                                        articulating your project specifications
                                        and characteristics in local languages
                                        to ensure nothing is lost in
                                        translation;
                                    </li>
                                    <li>
                                        We can manage the cultural differences
                                        that result in international business
                                        transactions due to the lack of
                                        knowledge about local business
                                        practices;
                                    </li>
                                    <li>
                                        We can assist in mitigating cost
                                        overruns associated with international
                                        business transactions;
                                    </li>
                                    <li>
                                        We can leverage our team's international
                                        business knowledge and company resources
                                        to yield positive financial results for
                                        your organization.
                                    </li>
                                </ul>
                                <p></p>
                                <p>
                                    <span>
                                        <br />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <span>
                                            International Business Services
                                        </span>{' '}
                                        - International Sourcing Company's
                                        International Business Services Division
                                        is focused on assisting our client's
                                        with their interests abroad. This could
                                        be the creation of a expansion strategy
                                        to gain foreign market entry, analysis
                                        of foreign modes of expansion,
                                        determining economic viability of target
                                        countries, and providing unbiased
                                        opinions on political stability of
                                        target countries for the client's
                                        proposed activities. If you are in
                                        search of unique product offerings from
                                        around the globe, our team of
                                        professionals can assist you in
                                        identifying product offerings that meet
                                        your organization's core competencies to
                                        import and offer to your client base.
                                        Conversely, if you seek to export your
                                        product offerings to clients around the
                                        globe, our team of professionals can
                                        assist your efforts of navigating the
                                        complicated process associated with
                                        international business transactions. Our
                                        team is ready to provide world-class
                                        service and sound business strategies
                                        focused on achieving your organizational
                                        objectives while providing positive
                                        returns on investment from start to
                                        finish.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.contentRight}>
                            <h2 className={classes.subTitle}>Learn More</h2>
                            <div className={classes.contentText}>
                                Our ramp up process is designed to empower your
                                team and outfit them with the tools they need to
                                succeed. Talk to us today about how we can
                                support your growth, limit your turnover, and
                                put you on a solid track to success and profit.
                            </div>
                            <div className={classes.buttonContainer}>
                                <div className={classes.contactButton}>
                                    <Link href={'/contact-us'}>Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
