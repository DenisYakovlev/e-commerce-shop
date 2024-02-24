import Modal from "react-bootstrap/Modal"
import ItemUpdateForm from "../../Forms/ItemForm/ItemForm"
import ItemForm from "../../Forms/ItemForm/ItemForm"
import { useApi } from "../../../hooks"
import { useContext } from "react"
import { AlertContext } from "../../../context"


export default function ItemCreateModal({show, setShow}){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)

    const handleCreate = (values) => {
        const body = {
            item: {
                name: values.name,
                price: values.price,
                description: values.description
            }
        }

        authFetch('items/', {
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(() => setShow(false))
        .catch(error => showAlert(error.toString()))
    }

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)} size="sm"
            centered keyboard animation backdrop="static"
        >
            <Modal.Body className="d-flex flex-column gap-3">
                <Modal.Header closeButton />

                <h1 className="text-center text-break">Створення товару</h1>

                <ItemForm
                    onSubmit={handleCreate}
                />
            </Modal.Body>
        </Modal>
    )
}