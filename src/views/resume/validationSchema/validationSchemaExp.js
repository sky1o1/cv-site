import * as Yup from 'yup';

const validationSchemaExp = Yup.object({
    company: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Company is required'),
    post: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Post is required'),
    description: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Description is required'),
})

export default validationSchemaExp;