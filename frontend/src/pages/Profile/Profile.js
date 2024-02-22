import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { UserCard, OrderListCard } from "../../components"
import { useApi } from "../../hooks"
import { useContext, useEffect, useState } from "react"
import { AlertContext, UserContext } from "../../context"
import { useNavigate } from "react-router-dom"


export default function Profile(){
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [profile, setProfile] = useState()

    useEffect(() => {
        if(!user){
            navigate('/')
        }

        authFetch('profile/', {
            method: "GET"
        })
        .then(data => setProfile(data))
        .catch(error => showAlert(error.toString()))
    }, [])

    return (
        <Container style={{height: "fit-content"}} className="px-0 py-md-5 py-3 bg-secondary" fluid>
            <Container className="p-0 d-flex flex-column" fluid="xl">
                <Row
                    xs={1} sm={1} md={2}
                    className="m-0 p-0"
                >
                    <Col
                        xs={12} sm={12} md={4}
                        className="p-3"
                    >
                        {profile && <UserCard profile={profile}/>}
                    </Col>

                    <Col
                        xs={12} sm={12} md={8}
                        className="p-3"
                    >
                        {profile && <OrderListCard profile={profile} />}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}