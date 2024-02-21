import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import DarkButton from "../../common/DarkButton"
import { useContext, useState } from "react"
import { useApi } from "../../../hooks"
import { UserContext } from "../../../context"


export default function SignUpForm({onSubmit}){
    const { setUser } = useContext(UserContext)
    const { publicFetch } = useApi()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState("")
    

    const formBody = () => {
        return {
            user: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                password_confirmation: passwordConfirm
            }
        }
    }

    const handleRegistration = () => {
        const body = formBody()

        publicFetch('auth/', {
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(data => {
            localStorage.setItem("user", data.token)
            setUser(data.token)
            onSubmit()
        })
        .catch(error => setError("Перевірте введені дані"))
    }

    return (
        <Container className="p-0 d-flex flex-column gap-4">
            <h1 className="text-center">Реєстрація</h1>

            <Form className="px-3 d-flex flex-column gap-3">
                <Form.Group controlId="formRegEmail">
                    <Form.Label>
                        Email
                    </Form.Label>
                    
                    <Form.Control 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formRegFirstName">
                    <Form.Label>
                        Ваше ім'я
                    </Form.Label>
                    
                    <Form.Control 
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formRegLastName">
                    <Form.Label>
                        Ваше прізвище
                    </Form.Label>
                    
                    <Form.Control 
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formAuthPassword">
                    <Form.Label>
                        Пароль
                    </Form.Label>
                    
                    <Form.Control 
                        type="password"
                        placeholder="Від 8 символів"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formAuthPasswordConfirm">
                    <Form.Label>
                        Підтвердіть пароль
                    </Form.Label>
                    
                    <Form.Control 
                        type="password"
                        placeholder="Від 8 символів"
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)}
                    />
                </Form.Group>
            </Form>

            {error && 
                <p className="fs-5 text-danger text-center">{error}</p>
            }

            <DarkButton className="mx-3 fs-5" onClick={handleRegistration}>
                Зареєструватись
            </DarkButton>
        </Container>
    )
}