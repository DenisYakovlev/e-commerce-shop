import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import ItemImg from "../../assets/images/default-product-image.png"
import { useState } from "react"
import ItemUpdateModal from "../Modals/ItemUpdateModal/ItemUpdateModal"
import ItemModal from "../Modals/ItemModal/ItemModal"


export default function ItemMiniCard({item}){
    const [showItemModal, setShowItemModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false) 

    return (
        <Card
            bg="primary"
            text="dark"
            className="p-0 rounded-0 border-0 border-bottom"
        >
            <ItemModal 
                show={showItemModal}
                setShow={setShowItemModal}
                item={item}
            />

            <ItemUpdateModal 
                show={showUpdateModal}
                setShow={setShowUpdateModal}
                item={item}
            />

            <Card.Body className="d-flex flex-row">
                <Card.Img
                    src={ItemImg} 
                    onClick={() => setShowItemModal(true)}
                    style={{width: "100px", height: "100px", cursor: "pointer"}}
                />

                <Container className="d-flex flex-column">
                    <Card.Text className="m-0 fs-6 text-muted text-break">
                        {`id: ${item?.id}`}
                    </Card.Text>
                    <Card.Text className="m-0 fs-6 text-muted text-break">
                        {`Назва: ${item?.name}`}
                    </Card.Text>
                    <Card.Text className="m-0 fs-6 text-muted text-break">
                        {`Ціна: ${item?.price}`}
                    </Card.Text>

                    <Button 
                        variant="outline-dark" 
                        size="sm" 
                        style={{width: "150px"}} 
                        onClick={() => setShowUpdateModal(true)}
                    >
                        Редактувати
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    )
}