import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Icon, CartOffcanvas } from "../../components"
import { useContext, useState } from "react"
import { AuthorizationContext, UserContext } from "../../context"


export default function NavBar(){
    const { showAuthModal } = useContext(AuthorizationContext)
    const [ showCart, setShowCart ] = useState(false)
    const { user, setUser } = useContext(UserContext)

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <Navbar 
            expand
            className="bg-secondary justify-content-center align-items-center"
        >
            <CartOffcanvas 
                showCart={showCart}
                setShowCart={setShowCart}
            />

            <Container 
                fluid="xl" 
                className="px-3 justify-content-between align-items-center"
            >
                <Navbar.Brand className="ps-2 fs-4 fw-semibold text-justify">
                    Shop
                </Navbar.Brand>

                <Nav justify className="gap-4 align-items-center">
                    <Icon 
                        icon="cart-shopping" 
                        className="nav-icon fs-4"
                        onClick={() => setShowCart(true)}
                    />

                    {user ? (
                        <Icon icon="user" className="nav-icon fs-4" onClick={logout}/>
                    ) : (
                        <p 
                            className="m-0 fs-6 fw-normal text-highlight"
                            onClick={showAuthModal}
                        >
                            Увійти
                        </p>
                    )}
                </Nav>  
            </Container>
        </Navbar>
    )
}