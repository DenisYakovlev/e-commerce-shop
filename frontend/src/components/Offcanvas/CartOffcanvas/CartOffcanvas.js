import { useContext } from "react"
import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import CartItemCard from "../../Cards/CartItemCard"
import { CartContext } from "../../../context"
import { truncPrice } from "../../utils"


export default function CartOffcanvas({showCart, setShowCart}){
    const { cart, cartTotalCost } = useContext(CartContext)

    return (
        <Offcanvas
            keyboard backdrop
            placement="end"
            show={showCart}
            onHide={() => setShowCart(false)}
        >
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

                    <Button variant="outline-dark" size="lg" className="mx-3">
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