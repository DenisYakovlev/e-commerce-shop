import Modal from "react-bootstrap/Modal"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import OptionSwitch from "./OptionSwitch"
import { useState } from "react"


export default function AuthorizationModal({show, setShow}){
    const [type, setType] = useState("signIn")

    const authTypes = {
        "signIn": <SignInForm onSubmit={() => setShow(false)}/>,
        "signUp": <SignUpForm onSubmit={() => setShow(false)}/>
    }

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            centered keyboard animation backdrop="static"
        >
            <Modal.Header closeButton />
            <Modal.Body className="d-flex flex-column gap-3">
                {authTypes[type]}

                <OptionSwitch 
                    type={type}
                    setType={setType}
                />                
            </Modal.Body>
        </Modal>
    )
}