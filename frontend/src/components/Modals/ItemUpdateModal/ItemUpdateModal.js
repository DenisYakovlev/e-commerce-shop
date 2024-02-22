import { useContext, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { useApi } from "../../../hooks"
import { AlertContext } from "../../../context"


export default function ItemUpdateModal({show, setShow, item}){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [name, setName] = useState(item.name)
    const [price, setPrice] = useState(item.price)
    const [error, setError] = useState() 

    const handleSave = () => {
        const body = {
            item: {
                name: name,
                price: price,
            }
        }

        authFetch(`items/${item.id}`, {
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

                <h1 className="text-center text-break">Редактування Товару</h1>

                <Form className="p-3 d-flex flex-column gap-2">
                    <Form.Group controlId="formItemName">
                        <Form.Label className="fw-semibold">
                            Ім'я
                        </Form.Label>
                        
                        <Form.Control 
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formItemPrice">
                        <Form.Label className="fw-semibold">
                            Ціна
                        </Form.Label>
                        
                        <Form.Control 
                            type="number"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
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