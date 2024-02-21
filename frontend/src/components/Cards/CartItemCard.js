import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Icon from "../common/Icon"
import ItemImg from "../../assets/images/default-product-image.png"
import QuantitySwitch from "../common/QuantitySwitch"
import { useContext, useState } from "react"
import { CartContext } from "../../context"
import { truncPrice } from "../utils"


export default function CartItemCard({obj}){
    const {item, quantity} = obj
    const { cartRemoveItem, cartUpdateQuantity } = useContext(CartContext)
    const [count, setCount] = useState(quantity)

    const updateQuantity = value => {
        setCount(value)
        cartUpdateQuantity(item.id, value)
    }

    return (
        <Card 
            bg="primary" 
            text="dark"
            className="p-0 rounded-0 border-0 border-bottom"
        >
            <Card.Body className="p-1 d-flex flex-row">
                <Card.Img src={ItemImg} style={{width: "100px", height: "100px"}}/>
                
                <Container className="p-3 d-flex flex-column gap-1" fluid>
                    <Container className="p-0 d-flex flex-row justify-content-between" fluid>
                        <Card.Text 
                            title={item.name} 
                            className="m-0 fs-6 fw-bold text-break lh-1"
                        >
                            {item.name}
                        </Card.Text>
                        
                        <Icon 
                            icon="trash-can" 
                            className="text-muted"
                            style={{cursor: "pointer"}}
                            onClick={() => cartRemoveItem(item.id)}
                        />
                    </Container>

                    <Card.Text className="fs-6 fw-normal text-muted">
                        {truncPrice(item.price)} за шт.
                    </Card.Text>

                    <Container className="p-0 d-flex justify-content-between align-items-center">
                        <QuantitySwitch
                            value={count}
                            onChange={updateQuantity} 
                        />

                        <Card.Text className="fs-6 fw-bold text-dark text-nowrap">
                            {truncPrice(item.price * count)}
                        </Card.Text>
                    </Container>
                </Container>
            </Card.Body>
        </Card>
    )
}