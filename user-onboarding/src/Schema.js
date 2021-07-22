import * as yup from '../node_modules/yup'

const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Please input a name')
    .min(2,'Name must be at least 2 characters'),
    email: yup
    .string()
    .required('Please input a valid email address')
    .email('Please input a valid email address'),
    pw: yup
    .string()
    .required('Please input a password')
    .min(6,'Password must be at least 6 characters'),
    tos: yup
    .boolean()
    .oneOf([true],'You must accept the TOS')
})

export default schema