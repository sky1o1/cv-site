import * as Yup from 'yup';

const validationSchema = Yup.object({
    information:Yup.string().required('Information is required'),
    phoneNumber:Yup.number().required('Phone Number is required'),
    email:Yup.string().email('Invalid email format').required('Email is required'),
    location:Yup.string().required('Location is required'),
})

export default validationSchema;