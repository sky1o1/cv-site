import * as Yup from 'yup';

const validationSchemaEdu = Yup.object({
    university: Yup.string().required('University is required'),
    degree: Yup.string().required('Degree info is required'),
    description: Yup.string().required('Description info is required'),

})

export default validationSchemaEdu;