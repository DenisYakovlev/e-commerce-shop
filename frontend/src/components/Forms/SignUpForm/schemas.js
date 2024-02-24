import * as yup from "yup"


export const signUpSchema = yup.object().shape({
    email: yup.string()
                .required("Має бути заповненим")
                .email("Введіть існуючий email-адрес"),
    first_name: yup.string()
                .required("Ім'я не може бути пустим")
                .min(2, "Від 2 символів"),
    last_name: yup.string()
                .required("Прізвище не може бути пустим")
                .min(2, "Від 2 символів"),
    password: yup.string()
                .required("Має бути заповненим")
                .min(8, "Має бути від 8 символів"),
    password_confirm: yup.string()
                .required("Має бути заповненим")
                .oneOf([yup.ref("password")], "Паролі не однакові")
})