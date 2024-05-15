import { Box, Button, TextField } from '@mui/material'
import classes from './index.module.css'
import Layout from '@/components/layout'

export default function ContactUs() {
    return (
        <Layout>
            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.title}>CONTACT US</h1>

                    <Box
                        component="form"
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'auto',
                            gridGap: '24px',
                            width: '100%',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="name-input"
                            fullWidth
                            label="Name"
                            required
                        />
                        <TextField
                            id="email-input"
                            fullWidth
                            label="Email"
                            required
                        />
                        <TextField
                            id="business-name-input"
                            fullWidth
                            label="Business name"
                        />
                        <TextField
                            id="business-url-input"
                            fullWidth
                            label="Business URL"
                        />
                        <TextField id="city-input" fullWidth label="City" />
                        <TextField id="state-input" fullWidth label="State" />
                        <TextField
                            id="zip-code-input"
                            fullWidth
                            label="Zip Code"
                        />
                        <TextField
                            id="content-input"
                            multiline
                            rows={4}
                            placeholder="Tell us a bit about your goals or questions so we can get started."
                        />
                        <div className={classes.buttonContainer}>
                            <div className={classes.submitButton}>
                                -- Send --
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </Layout>
    )
}
