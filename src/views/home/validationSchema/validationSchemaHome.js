import * as Yup from 'yup';

const validationSchema = Yup.object({
    information:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Information is required'),
    phoneNumber:Yup.number().min(2, 'Too Short!').max(50, 'Too Long!').required('Phone Number is required'),
    email:Yup.string().email('Invalid email format').required('Email is required'),
    location:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Location is required')
})

export default validationSchema;