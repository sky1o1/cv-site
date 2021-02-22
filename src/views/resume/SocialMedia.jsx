import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {auth} from '../../services/firebase/config';
import {getRequest, postRequest} from '../../services/axios.config';
import SocialMediaLogin from '../auth/SocialMediaLogin';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import {setFacebook, setInstagram, setLinkedin, setGithub, setTwitter} from '../../store/reducer/links';
import '../../new.css';
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
        width: '1000px'
    },
    socialGrid:{
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    verifiedIcons: {
        color: green[500],
        fontSize: 20
    }
}))

function SocialMedia(){
    const classes = useStyles()
    const dispatch = useDispatch()
    const links = useSelector(state => state.links)
    const profile = useSelector(state => state.profile)
    const [open, setOpen] = useState(false);
    const [apiData, setApiData] = useState([])
     
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

      useEffect(() => {
        async function fetchApi() {
            try{
                let response = await getRequest('');
                console.log(response.data.results)
                setApiData(response.data.results[0].email)
            }catch(err){
                console.log(err)
            }
        }
         fetchApi()
    },[])
    console.log(apiData)
    
    useEffect(() => {
        auth.onAuthStateChanged(async user => {
          if (user) {
              console.log(user)
            // dispatch(setAuthenticate(true))
          } else {
            // dispatch(setAuthenticate(false))
          }
        })
      })

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
            // className={classes.dialogBox}
            fullWidth='true'
            maxWidth='sm'
        >
            <DialogTitle id="alert-dialog-title">Link Social Media Accounts</DialogTitle>
            <div >
                <img  />
            </div>

            <DialogContent>
                <DialogContentText>
                    <Grid container className={classes.gridContainer}>
                    <SocialMediaLogin/>
                   
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