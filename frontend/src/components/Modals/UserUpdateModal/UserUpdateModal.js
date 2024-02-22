import { useContext, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { useApi } from "../../../hooks"
import { AlertContext } from "../../../context"


export default function UserUpdateModal({show, setShow, user}){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [role, setRole] = useState(user.role)
    const [error, setError] = useState() 

    const handleSave = () => {
        const body = {
            user: {
                first_name: firstName,
                last_name: lastName,
                role: role
            }
        }

        authFetch(`users/${user.email}`, {
            method: "PATCH",
            body: JSON.stringify(body)
        })
        .then(() => setShow(false))
        .catch(error => {
            setError(error)
        })
    }

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)} size="sm"
            centered keyboard animation backdrop="static"
        >
            <Modal.Body>
                <Modal.Header closeButton/>

                <h1 className="text-center text-break">Редактування Юзера</h1>

                <Form className="p-3 d-flex flex-column gap-2">
                    <Form.Group controlId="formProfileFirstName">
                        <Form.Label className="fw-semibold">
                            Ім'я
                        </Form.Label>
                        
                        <Form.Control 
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formProfileLastName">
                        <Form.Label className="fw-semibold">
                            Прізвище
                        </Form.Label>
                        
                        <Form.Control 
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formProfileRole">
                        <Form.Label className="fw-semibold">
                            Роль
                        </Form.Label>
                        
                        <Form.Check className="d-flex flex-row gap-1">
                            <Form.Check.Input
                                value="user"
                                onClick={e => setRole(e.target.value)}
                                defaultChecked={user.role == "user"}
                                type="radio"
                                name="form-profile-role"
                                id="form-profile-role-user" 
                            />
                            
                            <Form.Check.Label
                                htmlFor="form-profile-role-user"
                            >
                                user
                            </Form.Check.Label>
                        </Form.Check>

                        <Form.Check className="d-flex flex-row gap-1">
                            <Form.Check.Input
                                value="admin"
                                onClick={e => setRole(e.target.value)}
                                defaultChecked={user.role == "admin"}
                                type="radio"
                                name="form-profile-role"
                                id="form-profile-role-admin" 
                            />
                            
                            <Form.Check.Label
                                htmlFor="form-profile-role-admin"
                            >
                                admin
                            </Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                </Form>

                {error && <p className="text-center text-danger fs-3 fw-semibold">Виникла помилка!</p>}

                <Container className="p-0 pb-3 d-flex justify-content-center">
                    <Button variant="outline-dark" size="lg" onClick={handleSave}>
                        Зберегти
                    </Button>
                </Container>
            </Modal.Body>
        </Modal>
    )
}