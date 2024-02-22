import Container from "react-bootstrap/Container"
import { useApi } from "../../../hooks"
import { useContext, useEffect, useState } from "react"
import { AlertContext } from "../../../context"
import ItemMiniCard from "../ItemMiniCard"


export default function ItemsTab(){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [items, setItems] = useState()

    useEffect(() => {
        authFetch('items?per_page=100', {
            method: "GET"
        })
        .then(data => setItems(data.items))
        .catch(error => showAlert(error.toString()))
    }, )

    return (
        <Container className="p-0 d-flex flex-column">
            {items && items.map(item =>
                <ItemMiniCard key={item.id} item={item}/>
            )}
        </Container>
    )
}