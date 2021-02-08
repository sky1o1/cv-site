import * as Yup from 'yup';

const validationSchema = Yup.object({
    language:Yup.string().required('Language is required'),
    listening:Yup.number().required('Listening is required'),
    writing:Yup.number().required('Writing is required'),
    speaking:Yup.number().required('Speaking is required'),
    reading:Yup.number().required('Reading is required'),
})

export default validationSchema;