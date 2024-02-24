import Modal from "react-bootstrap/Modal"
import { useContext, useEffect, useState } from "react"
import { useApi } from "../../../hooks"
import { AlertContext } from "../../../context"
import ProfileUpdateForm from "../../Forms/ProfileUpdateForm/ProfileUpdateForm"


export default function ProfileModal({show, setShow, profile}){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)

    const handleSave = (values) => {
        const body = {
            user: {
                first_name: values.first_name,
                last_name: values.last_name,
                role: values.role
            }
        }

        authFetch('profile/', {
            method: "PATCH",
            body: JSON.stringify(body)
        })
        .then(() => setShow(false))
        .catch(error => {
            showAlert(error.toString())
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

                <ProfileUpdateForm 
                    profile={profile}
                    onSubmit={handleSave}
                />

            </Modal.Body>
        </Modal>
    )
}