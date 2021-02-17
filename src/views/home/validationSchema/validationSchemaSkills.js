import * as Yup from 'yup';

const validationSchema = Yup.object({
    skill:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Skill is required'),
    rating:Yup.number().required('Rating is required'),
})

export default validationSchema;