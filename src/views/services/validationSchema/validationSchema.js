import * as Yup from 'yup';

const validationSchema = Yup.object({
    service:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Service is required'),
    description:Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Description is required'),
})

export default validationSchema;