import * as Yup from 'yup';

const validationSchemaEdu = Yup.object({
    university: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('University is required'),
    degree: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Degree info is required'),
    description: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Description info is required'),

})

export default validationSchemaEdu;