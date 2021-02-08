import * as Yup from 'yup';

const validationSchemaExp = Yup.object({
    startDate: Yup.date().required(),
    endDate: Yup.date().required(),
    company: Yup.string().required('Company is required'),
    post: Yup.string().required('Post is required'),
    description: Yup.string().required('Description is required'),
})

export default validationSchemaExp;