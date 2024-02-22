import Card from "react-bootstrap/Card"
import { useApi } from "../../hooks"
import { useContext, useEffect, useState } from "react"
import { AlertContext, UserContext } from "../../context"
import Button from "react-bootstrap/Button"
import ProfileImg from "../../assets/images/default-product-image.png"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import ProfileModal from "../Modals/ProfileModal/ProfileModal"
import { useNavigate } from "react-router-dom"


export default function UserCard({profile}){
    const {logout} = useContext(UserContext)
    const navigate = useNavigate()
    const {authFetch} = useApi()
    const [showModal, setShowModal] = useState(false)

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <Card
            bg="primary"
            text="dark"
            className="p-0 rounded border-0 shadow"
        >
            <ProfileModal 
                show={showModal}
                setShow={setShowModal}
                profile={profile}
            />

            <Card.Body className="d-flex flex-column gap-3">
                <Container className="p-0 pb-3 d-flex flex-column justify-content-center border-bottom">
                    <Card.Img style={{maxWidth: "250px"}} src={ProfileImg} className="align-self-center"/>
                    <Button 
                        variant="outline-dark" size="lg" className="fw-semibold"
                        onClick={() => setShowModal(true)}
                    >
                        Редактувати профіль
                    </Button>
                </Container>

                <Stack gap={1} className="border-bottom pb-3">
                    <Card.Text className="m-0 fs-3 fw-bold text-break">
                        Контактні дані
                    </Card.Text>

                    <Container className="p-0 m-0">
                        <Card.Text className="m-0 fs-5 fw-semibold text-break">
                            Email
                        </Card.Text>

                        <Card.Text className="m-0 fs-6 fw-semibold text-muted">
                            {profile?.email}
                        </Card.Text>
                    </Container>

                    <Container className="p-0 m-0">
                        <Card.Text className="m-0 fs-5 fw-semibold text-break">
                            Ім'я
                        </Card.Text>

                        <Card.Text className="m-0 fs-6 fw-semibold text-muted">
                            {profile?.first_name}
                        </Card.Text>
                    </Container>

                    <Container className="p-0 m-0">
                        <Card.Text className="m-0 fs-5 fw-semibold text-break">
                            Прізвище
                        </Card.Text>

                        <Card.Text className="m-0 fs-6 fw-semibold text-muted">
                            {profile?.last_name}
                        </Card.Text>
                    </Container>

                    <Container className="p-0 m-0">
                        <Card.Text className="m-0 fs-5 fw-semibold text-break">
                            Роль
                        </Card.Text>

                        <Card.Text className="m-0 fs-6 fw-semibold text-muted">
                            {profile?.role}
                        </Card.Text>
                    </Container>
                </Stack>

                <Container className="d-flex flex-row justify-content-center gap-3">
                    <Button 
                        variant="outline-dark" size="md" className="fw-semibold"
                        onClick={handleLogout}
                    >
                        Вийти з акаунту
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    )
}