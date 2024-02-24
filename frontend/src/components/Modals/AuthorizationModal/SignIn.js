import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import DarkButton from "../../Common/DarkButton"
import { useContext, useState } from "react"
import { useApi } from "../../../hooks"
import { AlertContext, UserContext } from "../../../context"
import SignInForm from "../../Forms/SignInForm/SignInForm"


export default function SignIn({onSubmit}){
    const { setUser } = useContext(UserContext)
    const { publicFetch } = useApi()
    

    const handleSignIn = (values, {setErrors, setSubmitting}) => {
        const body = {
            user: {
                email: values.email,
                password: values.password
            }
        }

        publicFetch('auth/sign_in', {
            method: "POST",
            body: JSON.stringify(body)
        }).then(data => {
            localStorage.setItem("user", data.token)
            setUser(data.token)
            onSubmit()
            setSubmitting(false)
        })
        .catch(error => {
            setErrors({submit: "Невірний Email або пароль"})
            setSubmitting(false)
        })
    }

    return (
        <Container className="p-0 d-flex flex-column gap-3">
            <h1 className="text-center">Авторизація</h1>

            <SignInForm 
                onSubmit={handleSignIn}
            />
        </Container>
    )
}