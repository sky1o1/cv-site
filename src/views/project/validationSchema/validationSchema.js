import * as Yup from 'yup';

const validationSchema = Yup.object({
    projectName:Yup.string().required('Project name is required'),
    description:Yup.string().required('Description is required'),
    // startDate:Yup.string().required('Start date is required'),
    // endDate:Yup.string().required('End date is required'),
})

export default validationSchema;