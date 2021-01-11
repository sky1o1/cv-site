import * as Yup from 'yup';

const validationSchema = Yup.object({
    service: Yup.string().required('Please enter the service'),
    description: Yup.string().required('Description info is required'),

})

export default validationSchema;