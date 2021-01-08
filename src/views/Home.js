import React,{useState} from 'react'
import { 
    makeStyles,
    TextField,
    InputAdornment,
    Slider,
    Button
 } from '@material-ui/core';
 import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
 import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
 import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
 import FacebookIcon from '@material-ui/icons/Facebook';
import Footer from './Footer';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      resize:{
        fontSize:50
      },
      margin: {
        margin: theme.spacing(1),
      },
  }));

const initValues ={
    information: '',
    phoneNumber: '',
    email: '',
    location: '',
    skill: '',
    rating: '',
    abilities: '',
    language:'',
    level:'',
    listening: '',
    writing: '',
    speaking: '',
    reading: '',
    avg:'',
}  

const validationSchema = Yup.object({
    information:Yup.string().required('Information is required'),
    phoneNumber:Yup.number().required('Phone Number is required'),
    email:Yup.string().email('Invalid email format').required('Name is required'),
    location:Yup.string().required('Location is required'),
    skill:Yup.string().required('Skill is required'),
    rating:Yup.number().required('Rating is required'),
    abilities:Yup.string().required('Abilities is required'),
    language:Yup.string().required('Language is required'),
    level:Yup.string().required('Level is required'),
    listening:Yup.number().required('Listening is required'),
    writing:Yup.number().required('Writing is required'),
    speaking:Yup.number().required('Speaking is required'),
    reading:Yup.number().required('Reading is required'),
})

function Home() {
    const classes = useStyles();
    const [SkillsValue, setSkillsValue] = useState('')
    const [fields, setFields] = useState([{ value: null, skval:null }]);
        
        function valuetext(value,skva) {
            return (
                setSkillsValue(value)
                )
            }

        function handleChange(i, event) {
            const values = [...fields];
            values[i].value = event.target.value;
            values[i].skval = event.target.skval;
            
            setFields(values);
            console.log(fields)
          }
        
          function handleAdd() {
            const values = [...fields];
            values.push({ value: null });
            setFields(values);
          }
        
          function handleRemove(i) {
            const values = [...fields];
            values.splice(i, 1);
            setFields(values);
          }

          const formik = useFormik({
            initValues,
            validationSchema,
            onSubmit: (values, onSubmitProps) => {
            onSubmitProps.setSubmitting(false)

            }
          })
    return (
        <div id="lonon-main">
        <form onSubmit={formik.handleSubmit}>
        <div class="lonon-about">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7"> 
                    <img src="/static/images/avatar.png" class="img-fluid mb-15 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft" alt=""/> 
                    </div>
                    <div class="col-md-5 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"> <span class="heading-meta style-1">Informations</span>
                        <h3 class="lonon-about-heading">I'm Lonon F. Smith</h3>
                        
                        <form  >
                        <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            label="Information"
                            multiline
                            rows={15}
                            name='information'
                            variant="outlined"
                            />
                            
                        </form>

                        <div className="cardvisit" style={{
                             opacity: 0.7
                        }}>
                            <h3>Lonon F. Smith</h3>
                           <div className={classes.margin}>
                         <TextField
                            label="Phone Number"
                            name='phoneNumber'
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <PhoneIphoneOutlinedIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        
                            <TextField
                            label="Email"
                            name='email'
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <EmailOutlinedIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                         <TextField
                            label="Facebook"
                            name='facebook'
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <FacebookIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                         <TextField  
                         
                            label="Location"
                            name='location'
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <LocationOnOutlinedIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider1"></div>
   
        <div class="lonon-skills">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Abilities</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">My Skills</h2> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 animate-box" data-animate-effect="fadeInLeft">
                    <form className={classes.root} >
                 
                    <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            label="Abilities"
                            multiline
                            rows={15}
                            name='abilities'
                            variant="outlined"
                            />
               
             </form>
                     </div>
                  
                    <div class="col-md-7 animate-box" data-animate-effect="fadeInLeft">
                        
   
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
           
           <TextField 
           id="outlined-basic" 
           label="Skills" 
           name='skills'
           variant="outlined" />
             {/* <Slider
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        onChange={e => handleChange(idx, e)}
                        step={5}
                        min={10}
                        max={100}
            /> */}
             <Slider
                    defaultValue={50}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={100}
                />
            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemove(idx)}>
              X
            </Button>
          </div>
        );
      })}
         <Button variant="contained" type="button" color="primary" onClick={() => handleAdd()}>
        +
      </Button>
                    </div>
                </div>
            </div>
        </div>

        <div class="lonon-testiominal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Recommend Me</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">References</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5><strong>Samuel Tomei</strong></h5>
                            <p class="occupation">Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lonon-testiominal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Expertise</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Language</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5><strong>Samuel Tomei</strong></h5>
                            <p class="occupation">Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        {/* <div class="lonon-testiominal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Say About Us</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Testimonials</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5><strong>Samuel Tomei</strong></h5>
                            <p class="occupation">Project Manager</p>
                        </div>
                    </div>
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="quote" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5>Cobie Batalon</h5>
                            <p class="occupation">RTI International</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div class="divider1"></div>

     
        </form>
       <Footer/>
    </div>

    )
}

export default Home
