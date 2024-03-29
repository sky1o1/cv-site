import * as Yup from 'yup';

const validationSchema = Yup.object({
    information2: Yup.string().required('Information is required'),
    website: Yup.string().required('Website is required'),
    freelance: Yup.string().required('Freelance info is required'),
    facebook: Yup.string().required('Facebook info is required'),
    skype: Yup.string().required('Skype info is required'),
    twitter: Yup.string().required('Twitter info is required'),
    linkedin: Yup.string().required('Linkedin info is required'),

})

export default validationSchema;