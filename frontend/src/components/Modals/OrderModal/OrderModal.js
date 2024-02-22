import Modal from "react-bootstrap/Modal"
import SuccessBody from "./SuccessBody"
import ErrorBody from "./ErrorBody"

const bodyTypes = {
    "success": <SuccessBody />,
    "error": <ErrorBody />
}

export default function OrderModal({show, setShow, type}){
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)} size="sm"
            centered keyboard animation  backdrop
        >
            <Modal.Header closeButton />

            <Modal.Body>
                {bodyTypes[type]}
            </Modal.Body>
        </Modal>
    )
}