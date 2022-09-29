import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Link from 'next/link'
import classes from './Footer.module.css';

const textColor = '#f2f2f2';

const Footer = () => {
  return <footer>
    <Box px={{ xs: 3, sm: 6}} py={{ xs: 3, sm: 3}} bgcolor="#958a99" color={textColor}>
      <Container maxWidth='md'>
        <Grid container spacing={7}>
            {/* first */}
            <Grid item xs={12} sm={4}>
            <Box borderBottom={1} py={{ xs: 1, sm: 1}}>
            <PhoneIcon fontSize='0' sx={{textColor}}/>
                <div className={classes.footerHeader}>
                Help
                </div>
                </Box>
                
            <Box px={{ xs: 1, sm: 1}} py={{ xs: 0.5, sm: 0.5}}>
              <Link href="/" >
                <div className={classes.footerText}>
                Contact
                </div>
              </Link>
            </Box>
            <Box px={{ xs: 1, sm: 1}} py={{ xs: 0.5, sm: 0.5}}>
              <Link href="/">
                <div className={classes.footerText}>
                Address
                </div>
              </Link>
            </Box>
            </Grid>
            {/* second */}
            <Grid item xs={12} sm={4}>
            <Box borderBottom={1} py={{ xs: 1, sm: 1}}>
              <CoPresentIcon fontSize='0' sx={{textColor}}/> 
                <div className={classes.footerHeader}>
                Join Us
                </div>
                </Box>

            <Box px={{ xs: 1, sm: 1}} py={{ xs: 0.5, sm: 0.5}}>
              <Link href="/">
                <div className={classes.footerText}>
                Join our membership
                </div>
              </Link>
            </Box>
            <Box px={{ xs: 1, sm: 1}} py={{ xs: 0.5, sm: 0.5}}>
              <Link href="/">
                <div className={classes.footerText}>
                Join our team
                </div>
              </Link>
            </Box>
            </Grid>
            {/* third */}
            <Grid item xs={12} sm={4}>
            <Box borderBottom={1} py={{ xs: 1, sm: 1}}>
            <ConnectWithoutContactIcon fontSize='0' sx={{textColor}}/> 
              <div className={classes.footerHeader}>
              Support
              </div>
              </Box>
            <Box px={{ xs: 1, sm: 1}} py={{ xs: 0.5, sm: 0.5}}>
              <Link href="/">
                <div className={classes.footerText}>
                Feedback
                </div>
              </Link>
            </Box>
            <Box px={{ xs: 1, sm: 1}} py={{ xs: 0.5, sm: 0.5}}>
              <Link href="/">
                <div className={classes.footerText}>
                Report
                </div>
              </Link>
            </Box>
            </Grid>
  
          </Grid>
          <Box textAlign="center" pt={{ xs: 2, sm: 4}} pb={{ xs: 5, sm: 0}}>
          <div className={classes.footerCopyRight}>Hotel.com &reg; {new Date().getFullYear()}</div>
          </Box>
      </Container>
    </Box>
  </footer>
}

export default Footer;