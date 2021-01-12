import * as Yup from 'yup';

const validationSchema = Yup.object({
    skill:Yup.string().required('Skill is required'),
    rating:Yup.number().required('Rating is required'),
    abilities:Yup.string().required('Abilities is required'),
})

export default validationSchema;