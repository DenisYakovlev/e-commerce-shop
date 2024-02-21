import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Icon from "../common/Icon"
import ItemModal from "../Modals/ItemModal/ItemModal"
import ItemImg from "../../assets/images/default-product-image.png"
import { truncPrice } from "../utils"
import { useContext, useState } from "react"
import { CartContext } from "../../context"


export default function ItemCard({item}){
    const {cartAddItem, cartIncludes} = useContext(CartContext)
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    }
    
    return (
        <Card bg="secondary" text="dark">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center gap-3">
                <Card.Img
                    variant="top" 
                    src={ItemImg} 
                    onClick={showModal}
                    style={{cursor: "pointer"}}
                />
                
                <Container className="p-0 d-flex flex-column" fluid>
                    <Card.Text 
                        title={item.name}
                        className="m-0 fs-6 fw-semibold text-truncate"
                        onClick={showModal}
                        style={{cursor: "pointer"}}
                    >
                        {item.name}
                    </Card.Text>

                    <Container className="p-0 d-flex flex-row justify-content-between align-items-center">
                        <Card.Text title={item.price} className="m-0 fs-5">
                            {truncPrice(item.price)}
                        </Card.Text>

                        {cartIncludes(item) ? (
                            <Icon 
                                icon="circle-check"
                                className="nav-icon text-success fs-4"
                            />
                        ) : (
                            <Icon 
                                icon="plus" 
                                className="nav-icon text-success fs-4"
                                onClick={() => cartAddItem({item: item, quantity: 1})}
                            />
                        )}
                    </Container>
                </Container>
            </Card.Body> 

            <ItemModal
                show={show}
                setShow={setShow}
                item={item} 
            />   
        </Card>
    )
}