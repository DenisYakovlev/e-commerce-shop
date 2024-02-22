import Card from "react-bootstrap/Card"
import ItemImg from "../../assets/images/default-product-image.png"
import { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import { useApi } from "../../hooks"
import { AlertContext } from "../../context"


export default function OrderDescriptionCard({description}){
    const {publicFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [item, setItem] = useState()


    useEffect(() => {
        publicFetch(`items/${description.item_id}`, {
            method: "GET"
        })
        .then(data => setItem(data))
        .catch(error => showAlert(error.toString()))
    }, [])

    return (
        <Card
            bg="primary"
            text="dark"
            className="p-0 rounded-0 border-0 border-bottom"
        >
            <Card.Body className="d-flex flex-row">
                <Card.Img
                    src={ItemImg} 
                    style={{width: "100px", height: "100px", cursor: "pointer"}}
                />

                <Container className="d-flex flex-column">
                    <Card.Text className="m-0 fs-5 text-muted text-break">
                        {`Назва: ${item?.name}`}
                    </Card.Text>
                    <Card.Text className="m-0 fs-5 text-muted text-break">
                        {`Ціна: ${item?.price}`}
                    </Card.Text>
                    <Card.Text className="m-0 fs-5 text-muted text-break">
                        {`Кількість: ${description?.quantity}`}
                    </Card.Text>
                </Container>
            </Card.Body>
        </Card>
    )
}