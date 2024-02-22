import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import UserImg from "../../assets/images/default-product-image.png"
import UserUpdateModal from "../Modals/UserUpdateModal/UserUpdateModal"
import Button from "react-bootstrap/Button"
import { useState } from "react"


export default function UserMiniCard({user}){
    const [showModal, setShowModal] = useState(false)

    return (
        <Card
            bg="primary"
            text="dark"
            className="p-0 rounded-0 border-0 border-bottom"
        >
            <UserUpdateModal 
                show={showModal}
                setShow={setShowModal}
                user={user}
            />

            <Card.Body className="d-flex flex-row">
                <Card.Img
                    src={UserImg} 
                    style={{width: "100px", height: "100px", cursor: "pointer"}}
                />

                <Container className="d-flex flex-column">
                    <Card.Text className="m-0 fs-6 text-muted text-break">
                        {`email: ${user?.email}`}
                    </Card.Text>
                    <Card.Text className="m-0 fs-6 text-muted text-break">
                        {`Ім'я: ${user?.first_name}`}
                    </Card.Text>
                    <Card.Text className="m-0 fs-6 text-muted text-break">
                        {`Прізвище: ${user?.last_name}`}
                    </Card.Text>
                    <Card.Text className="m-0 fs-6 text-muted text-break">
                        {`Роль: ${user?.role}`}
                    </Card.Text>

                    <Button 
                        variant="outline-dark" 
                        size="sm" 
                        style={{width: "150px"}} 
                        onClick={() => setShowModal(true)}
                    >
                        Редактувати
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    )
}