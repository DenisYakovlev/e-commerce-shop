import { useContext, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { useApi } from "../../../hooks"
import { AlertContext } from "../../../context"
import ProfileUpdateForm from "../../Forms/ProfileUpdateForm/ProfileUpdateForm"


export default function UserUpdateModal({show, setShow, user}){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [role, setRole] = useState(user.role)
    const [error, setError] = useState() 

    const handleSave = (values) => {
        const body = {
            user: {
                first_name: values.first_name,
                last_name: values.last_name,
                role: values.role
            }
        }

        authFetch(`users/${user.email}`, {
            method: "PATCH",
            body: JSON.stringify(body)
        })
        .then(() => setShow(false))
        .catch(error => {
            showAlert(error.toString())
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

                <ProfileUpdateForm 
                    profile={user}
                    onSubmit={handleSave}
                />
            </Modal.Body>
        </Modal>
    )
}