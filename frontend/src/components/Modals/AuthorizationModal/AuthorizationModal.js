import Modal from "react-bootstrap/Modal"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import OptionSwitch from "./OptionSwitch"
import { useState } from "react"


export default function AuthorizationModal({show, setShow}){
    const [type, setType] = useState("signIn")

    const authTypes = {
        "signIn": <SignIn onSubmit={() => setShow(false)}/>,
        "signUp": <SignUp onSubmit={() => setShow(false)}/>
    }

    return (
        <Modal
            show={show}
            onHide={() => setShow(false)} size="sm"
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