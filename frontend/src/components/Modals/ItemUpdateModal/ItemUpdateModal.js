import { useContext, useState } from "react"
import Modal from "react-bootstrap/Modal"
import { useApi } from "../../../hooks"
import { AlertContext } from "../../../context"
import ItemForm from "../../Forms/ItemForm/ItemForm"


export default function ItemUpdateModal({show, setShow, item}){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)


    const handleSave = (values) => {
        const body = {
            item: {
                name: values.name,
                price: values.price,
                description: values.description
            }
        }

        authFetch(`items/${item.id}`, {
            method: "PATCH",
            body: JSON.stringify(body)
        })
        .then(() => {
            setShow(false)
        })
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

                <h1 className="text-center text-break">Редактування Товару</h1>

                <ItemForm 
                    item={item}
                    onSubmit={handleSave}
                />
            </Modal.Body>
        </Modal>
    )
}