import Container from "react-bootstrap/Container"
import { useContext, useState } from "react"
import { useApi } from "../../../hooks"
import { UserContext } from "../../../context"
import SignUpForm from "../../Forms/SignUpForm/SignUpForm"


export default function SignUp({onSubmit}){
    const { setUser } = useContext(UserContext)
    const { publicFetch } = useApi()


    const handleRegistration = (values, {setErrors}) => {
        const body = {
            user: {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                password: values.password,
                password_confirmation: values.password_confirmation
            }
        }

        publicFetch('auth/', {
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(data => {
            localStorage.setItem("user", data.token)
            setUser(data.token)
            onSubmit()
        })
        .catch(error => setErrors({submit: "Перевірте введені дані"}))
    }

    return (
        <Container className="p-0 d-flex flex-column gap-4">
            <h1 className="text-center">Реєстрація</h1>

            <SignUpForm
                onSubmit={handleRegistration} 
            />
        </Container>
    )
}