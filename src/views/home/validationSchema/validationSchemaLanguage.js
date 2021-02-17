import * as Yup from 'yup';

const validationSchema = Yup.object({
    language:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Language is required'),
    listening:Yup.string().required('Listening is required'),
    writing:Yup.string().required('Writing is required'),
    speaking:Yup.string().required('Speaking is required'),
    reading:Yup.string().required('Reading is required'),
})

export default validationSchema;