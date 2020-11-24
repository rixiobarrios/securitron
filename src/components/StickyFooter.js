import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://rixiobarrios.com/">
                Built by Rixio Barrios
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Image
                    color="#fafafa"
                    cover="false"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        padding: '0',
                        width: '200px',
                        height: '150px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    src="./securitron.png"
                />
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Securitron
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {
                        'This application was build using the Auth0 authentication platform.'
                    }
                </Typography>
                <Typography variant="body1">
                    Please Login or Logout to test the application.
                </Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}
