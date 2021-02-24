import React, {  useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import firebase from 'firebase';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import {getRequest, postRequest} from '../../services/axios.config';
import {auth} from '../../services/firebase/config';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
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

const SocialMediaLogin = () => {
  const classes = useStyles()
  const history = useHistory()
  const authenticate = useSelector(state => state.auth)
  const [apiData, setApiData] = useState([])

  var uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [ 
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID  
    ]
  };
 
  useEffect(() => {

    if(authenticate.isAuthenticated){
      history.push('/')
      }

      async function fetchApi() {
        try{
            let response = await postRequest('');
        }catch(err){
            console.log(err)
        }
    }

    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    
    } 
    else {
      const ui = new firebaseui.auth.AuthUI(auth)
      ui.start('#firebaseui-auth-container', uiConfig)
     
    }
    fetchApi()
  }, [])

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


  return (
    <>
      <div id="firebaseui-auth-container">
        <CheckCircleIcon className={classes.verifiedIcons}/> Verified
     </div>
    </>
    
  );
};

export default SocialMediaLogin;