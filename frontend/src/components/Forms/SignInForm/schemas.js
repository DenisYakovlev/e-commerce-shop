import * as yup from "yup"


export const signInSchema = yup.object().shape({
    email: yup.string()
                .required("Має бути заповненим")
                .email("Введіть існуючий email-адрес"),
    password: yup.string()
                .required("Має бути заповненим")
                .min(8, "Має бути від 8 символів")
})