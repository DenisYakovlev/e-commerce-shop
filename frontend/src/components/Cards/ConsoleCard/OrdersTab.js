import Container from "react-bootstrap/Container"
import Accordion from "react-bootstrap/Accordion"
import OrderDescriptionCard from "../OrderDescriptionCard"
import { useContext, useEffect, useState } from "react"
import { useApi } from "../../../hooks"
import { AlertContext } from "../../../context"
import { truncPrice } from "../../utils"


export default function OrdersTab(){
    const {authFetch} = useApi()
    const {showAlert} = useContext(AlertContext)
    const [selectedItem, setSelectedItem] = useState()
    const [orders, setOrders] = useState()
    const [orderDescriptions, setOrderDescriptions] = useState()

    useEffect(() => {
        authFetch('profile/orders', {
            method: "GET"
        })
        .then(data => setOrders(data.orders))
        .catch(error => showAlert(error.toString()))
    }, [])


    useEffect(() => {
        if(selectedItem == null){
            return
        }

        const order_id = orders[selectedItem].id
        authFetch(`profile/orders/${order_id}`, {
            method: "GET"
        })
        .then(data => setOrderDescriptions(data.description))
        .catch(error => showAlert(error.toString()))
    }, [selectedItem])


    const handleSelect = idx => {
        setSelectedItem(idx)
    }

    return (
        <Container className="p-0 d-flex flex-column">
            <Accordion onSelect={handleSelect}>
                {orders && orders.map((order, idx) => 
                    <Accordion.Item key={idx} eventKey={idx}>
                        <Accordion.Header>
                            <Container className="d-flex flex-column">
                                <p className="m-0 fs-5">
                                    {`Замовлення #${order.id}`}
                                </p>
                                <p className="m-0 fs-5">
                                    {`Вартість: ${truncPrice(order.amount)}`}
                                </p>
                                <p className="m-0 fs-5">
                                    {`Дата: ${order.created_at.substring(0, 10)}`}
                                </p>
                            </Container>
                        </Accordion.Header>
                            {orderDescriptions && orderDescriptions.map(description =>
                                <Accordion.Body className="p-0">
                                    <OrderDescriptionCard key={description.id} description={description}/>
                                </Accordion.Body>
                            )}
                    </Accordion.Item>
                )}
            </Accordion>
        </Container>
    )
}