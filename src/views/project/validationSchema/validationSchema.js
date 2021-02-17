import * as Yup from 'yup';

const validationSchema = Yup.object({
    projectName:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Project name is required'),
    description:Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Description is required')
})

export default validationSchema;