import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import DarkButton from "../../common/DarkButton"
import { useContext, useState } from "react"
import { useApi } from "../../../hooks"
import { UserContext } from "../../../context"


export default function SignInForm({onSubmit}){
    const { setUser } = useContext(UserContext)
    const { publicFetch } = useApi()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignIn = () => {
        const body = {
            user: {
                email: email,
                password: password
            }
        }

        publicFetch('auth/sign_in', {
            method: "POST",
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password
                }
            })
        }).then(data => {
            localStorage.setItem("user", data.token)
            setUser(data.token)
            onSubmit()
        })
        .catch(error => setError("Неправильний логін/пароль"))
    }

    return (
        <Container className="p-0 d-flex flex-column gap-3">
            <h1 className="text-center">Авторизація</h1>

            <Form className="px-3 d-flex flex-column gap-3">
                <Form.Group controlId="formAuthEmail">
                    <Form.Label>
                        Email
                    </Form.Label>
                    
                    <Form.Control 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
            </Form>

            {error && 
                <p className="fs-5 text-danger text-center">{error}</p>
            }

            <DarkButton className="mx-3 fs-5" onClick={handleSignIn}>
                Увійти
            </DarkButton>
        </Container>
    )
}