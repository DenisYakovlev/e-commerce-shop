import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import { useApi } from "../../../hooks"
import { AlertContext } from "../../../context"


export default function ProfileModal({show, setShow, profile}){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [firstName, setFirstName] = useState(profile?.first_name)
    const [lastName, setLastName] = useState(profile?.last_name)
    const [role, setRole] = useState(profile?.role)
    const [error, setError] = useState()

    useEffect(() => {
        setFirstName(profile?.first_name)
        setLastName(profile?.last_name)
        setRole(profile?.role)
    }, [profile])

    const handleSave = () => {
        const body = {
            user: {
                first_name: firstName,
                last_name: lastName,
                role: role
            }
        }

        authFetch('profile/', {
            method: "PATCH",
            body: JSON.stringify(body)
        })
        .then(() => setShow(false))
        .catch(error => {
            setError(error)
        })
    }

    return(
        <Modal
            show={show}
            onHide={() => setShow(false)} size="sm"
            centered keyboard animation backdrop="static"
        >
            <Modal.Body>
                <Modal.Header closeButton/>

                <h1 className="text-center text-break">Редактування даних</h1>

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
                                defaultChecked={profile?.role == "user"}
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
                                defaultChecked={profile?.role == "admin"}
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