import * as Yup from 'yup';

const validationSchema = Yup.object({
    information:Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Information is required'),
    phoneNumber:Yup.number().required('Phone Number is required'),
    email:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').email('Invalid email format').required('Name is required'),
    location:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Location is required'),
    skill:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Skill is required'),
    rating:Yup.number().required('Rating is required'),
    abilities:Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Abilities is required'),
    language:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Language is required'),
    listening:Yup.number().required('Listening is required'),
    writing:Yup.number().required('Writing is required'),
    speaking:Yup.number().required('Speaking is required'),
    reading:Yup.number().required('Reading is required'),
})

export default validationSchema;