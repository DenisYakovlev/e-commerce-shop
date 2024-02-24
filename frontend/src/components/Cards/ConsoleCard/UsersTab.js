import Container from "react-bootstrap/Container"
import UserMiniCard from "../UserMiniCard"
import { useApi } from "../../../hooks"
import { useContext, useEffect, useState } from "react"
import { AlertContext } from "../../../context"


export default function UsersTab(){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [users, setUsers] = useState()

    useEffect(() => {
        authFetch('users/', {
            method: "GET"
        })
        .then(data => setUsers(data))
        .catch(error => showAlert(error.toString()))
    }, [])

    return (
        <Container className="p-0 d-flex flex-column">
            {users && users.map(user =>
                <UserMiniCard key={user.id} user={user}/>
            )}
        </Container>
    )
}