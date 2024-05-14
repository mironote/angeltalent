import classes from './page.module.css'

export default function Home() {
    return (
        <main className={classes.root}>
            <section className={classes.subscribe}>
                <h2 className={classes.subscribeTitle}>Subscribe</h2>
                <p className={classes.subscribeText}>
                    Want to hear more? Enter your email below to hear from us!
                </p>
            </section>
        </main>
    )
}
