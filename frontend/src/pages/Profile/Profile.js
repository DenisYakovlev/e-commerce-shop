import Container from "react-bootstrap/Container"
import { UserCard, ConsoleCard } from "../../components"
import { useApi } from "../../hooks"
import { useContext, useEffect, useState } from "react"
import { AlertContext, UserContext } from "../../context"
import { useNavigate } from "react-router-dom"
import Sections from "./Sections"


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
                <Sections>
                    <Sections.UserSide>
                        {profile && <UserCard profile={profile}/>}
                    </Sections.UserSide>

                    <Sections.ConsoleSide>
                        {profile && <ConsoleCard profile={profile} />}
                    </Sections.ConsoleSide>
                </Sections>
            </Container>
        </Container>
    )
}