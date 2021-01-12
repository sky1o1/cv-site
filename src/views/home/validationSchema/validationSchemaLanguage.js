import * as Yup from 'yup';

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

export default validationSchema;