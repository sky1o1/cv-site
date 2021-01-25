import React, { useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setFacebook, setInstagram, setLinkedin, setGithub, setTwitter} from '../../store/reducer/links';
import '../../new.css'
import {
    makeStyles,
    TextField,
    Button,
    DialogTitle,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    IconButton,
    Grid,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'space-around'
    },
    dialogBox: {
        width: '200px'
    }
}))

function SocialMedia(){
    const classes = useStyles()
    const dispatch = useDispatch()
    const links = useSelector(state => state.links)
    const profile = useSelector(state => state.profile)
    const [open, setOpen] = useState(false);
     
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log('links',profile)

    return(
        <>
        <div>
             <Button
             onClick={handleClickOpen}
                variant="contained"
                color="secondary"
                startIcon={<PersonIcon />}
                >
                Social Media
            </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.dialogBox}
        >
            <DialogTitle id="alert-dialog-title">Link Social Media Accounts</DialogTitle>
            <div >
                <img  />
            </div>

            <DialogContent>
                <DialogContentText>
                    <Grid container className={classes.gridContainer}>
                        <Grid list >
                        <FacebookIcon id='icon'
                          className={`${links.facebook ? "socialMediaActiveLink" : ""}`}
                           onClick={() =>  dispatch(setFacebook(!(links.facebook)))} 
                            fontSize='large'/>
                        </Grid>

                        <Grid list >
                        <InstagramIcon 
                         className={`${links.instagram ? "socialMediaActiveLink" : ""}`}
                          onClick={() => dispatch(setInstagram(!(links.instagram)))} 
                         fontSize='large'/>
                        </Grid>

                        <Grid list >
                        <LinkedInIcon
                        className={`${links.linkedin ? "socialMediaActiveLink" : ""}`}
                         onClick={() =>  dispatch(setLinkedin(!(links.linkedin)))} 
                         fontSize='large'/>
                        </Grid>

                        <Grid list >
                        <GitHubIcon 
                        className={`${links.github ? "socialMediaActiveLink" : ""}`}
                         onClick={() =>  dispatch(setGithub(!(links.github)))}
                         fontSize='large'
                         />
                        </Grid>
                      </Grid>

                      <Grid container className={classes.gridContainer}>
                      <Grid list >
                        <TwitterIcon 
                        className={`${links.twitter ? "socialMediaActiveLink" : ""}`}
                         onClick={() =>  dispatch(setTwitter(!(links.twitter)))}
                         fontSize='large'
                         />
                        </Grid>
                        <Grid list >
                        <TwitterIcon 
                        className={`${links.twitter ? "socialMediaActiveLink" : ""}`}
                         onClick={() =>  dispatch(setTwitter(!(links.twitter)))}
                         fontSize='large'
                         />
                        </Grid>
                        <Grid list >
                        <TwitterIcon 
                        className={`${links.twitter ? "socialMediaActiveLink" : ""}`}
                         onClick={() =>  dispatch(setTwitter(!(links.twitter)))}
                         fontSize='large'
                         />
                        </Grid>
                        <Grid list >
                        <TwitterIcon 
                        className={`${links.twitter ? "socialMediaActiveLink" : ""}`}
                         onClick={() =>  dispatch(setTwitter(!(links.twitter)))}
                         fontSize='large'
                         />
                        </Grid>
                      </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    </>
    )
}

export default SocialMedia;