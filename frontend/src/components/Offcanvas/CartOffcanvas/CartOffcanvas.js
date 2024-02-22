import { useContext, useState } from "react"
import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import CartItemCard from "../../Cards/CartItemCard"
import OrderModal from "../../Modals/OrderModal/OrderModal"
import { AuthorizationContext, CartContext, UserContext } from "../../../context"
import { truncPrice } from "../../utils"
import { useApi } from "../../../hooks"


export default function CartOffcanvas({showCart, setShowCart}){
    const {authFetch} = useApi()
    const {user} = useContext(UserContext)
    const [resultType, setResultType] = useState('')
    const [showResult, setShowResult] = useState(false)
    const {showAuthModal} = useContext(AuthorizationContext)
    const { cart, cartTotalCost, cartToOrder, cartClear } = useContext(CartContext)

    const handleOrderCreate = () => {
        if(!user){
            showAuthModal()
            return
        }

        const body = cartToOrder()

        authFetch('orders/', {
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(() => {
            setResultType("success")
            setShowResult(true)
            cartClear()
        })
        .catch(() => {
            setResultType("error")
            setShowResult(true)
        })
    }

    return (
        <Offcanvas
            keyboard backdrop
            placement="end"
            show={showCart}
            onHide={() => setShowCart(false)}
        >
            <OrderModal
                show={showResult}
                setShow={setShowResult} 
                type={resultType}
            />

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Кошик
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="p-0">
                {cart.length ? (
                <Container className="p-0 d-flex flex-column">
                    {Object.values(cart).map(obj => 
                        <CartItemCard
                            key={obj.item.id}
                            obj={obj}
                        />
                    )}

                    <Container className="p-3 d-flex flex-row justify-content-between">
                        <p className="m-0 fs-5 fw-bold text-dark">
                            До сплати:
                        </p>

                        <p className="m-0 fs-5 fw-bold text-dark">
                            {truncPrice(cartTotalCost())}
                        </p>
                    </Container>

                    <Button 
                        onClick={handleOrderCreate}
                        variant="outline-dark" 
                        size="lg" 
                        className="m-3"
                    >
                        Оформити замовлення
                    </Button>
                </Container>
                ): (
                    <h1 className="p-5 text-center text-break">Ваша корзина пуста...</h1>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    )
}