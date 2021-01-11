import * as Yup from 'yup';

const validationSchema = Yup.object({
    degree: Yup.string().required('Degree is required'),
    website: Yup.string().email('Invalid email format').required('Website is required'),
    freelance: Yup.string().required('Freelancing info is required'),
    facebook: Yup.string().required('Facebook id is required'),
    linkedin: Yup.string().required('Linkedin id is required'),
    skype: Yup.string().required('Skype id is required'),
    twitter: Yup.string().required('Twitter id is required'),

})

export default validationSchema;