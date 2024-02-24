import Container from "react-bootstrap/Container"
import { useApi } from "../../../hooks"
import { useContext, useEffect, useState } from "react"
import { AlertContext } from "../../../context"
import ItemMiniCard from "../ItemMiniCard"
import Icon from "../../Common/Icon"
import Button from "react-bootstrap/Button"
import ItemCreateModal from "../../Modals/ItemCreateModal/ItemCreateModal"


export default function ItemsTab(){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [items, setItems] = useState()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        authFetch('items?per_page=100', {
            method: "GET"
        })
        .then(data => setItems(data.items))
        .catch(error => showAlert(error.toString()))
    }, [])

    return (
        <Container className="p-0 d-flex flex-column">
            <ItemCreateModal 
                show={showModal}
                setShow={setShowModal}
            />

            <Button 
                variant="outline-dark" 
                size="sm" 
                className="me-auto ms-3 rounded-pill px-3 border"
                onClick={() => setShowModal(true)}
            >
                <Icon icon="plus"/>
            </Button>

            {items && items.map(item =>
                <ItemMiniCard key={item.id} item={item}/>
            )}
        </Container>
    )
}