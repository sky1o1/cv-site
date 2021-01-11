import * as Yup from 'yup';

const validationSchema = Yup.object({
    service:Yup.string().required('Service is required'),
    description:Yup.string().required('Description is required'),
})

export default validationSchema;