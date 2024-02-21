import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Icon from "../../common/Icon"
import Button from "react-bootstrap/Button"
import { truncPrice } from "../../utils"
import ItemImg from "../../../assets/images/default-product-image.png"
import { useContext } from "react"
import { CartContext } from "../../../context"


export default function ItemModal({show, setShow, item}){
    const {cartAddItem, cartIncludes} = useContext(CartContext)

    return (
        <Modal
            centered backdrop keyboard animation size="xl"
            show={show} onHide={() => setShow(false)}
        >
            <Modal.Header closeButton/>

            <Modal.Body>
                <Row
                    className="m-0 p-0"
                    lg={2} sm={1} xs={1}
                >
                    <Col 
                        lg={6} sm={12} xs={12}
                        className="p-1"
                    >
                        <Image src={ItemImg} fluid/>
                    </Col>

                    <Col 
                        lg={6} sm={12} xs={12}
                        className="p-3 d-flex flex-column justify-content-between"
                    >
                        <Container className="p-0 d-flex flex-column">
                            <p className="fs-2 fw-bold lh-1">
                                {item.name}
                            </p>

                            <p 
                                className="fs-5 text-muted lh-sm overflow-auto" 
                                style={{minHeight: "100px", maxHeight: "300px"}}
                            >
                                {item.description}
                            </p>
                        </Container>

                        <Container className="p-0 d-flex flex-row justify-content-between align-items-center" fluid>
                            <p className="m-0 fs-2 fw-semibold lh-sm">
                                {truncPrice(item.price)}
                            </p>
                            
                            {cartIncludes(item) ? (
                                <Icon 
                                    icon="circle-check"
                                    className="text-success fs-2"
                                />
                            ) : (
                                <Button 
                                    onClick={() => cartAddItem({item: item, quantity: 1})} 
                                    variant="success" 
                                    size="lg" 
                                    className="px-3"
                                >
                                    <Icon icon="cart-shopping"/> Придбати
                                </Button>
                            )}
                        </Container>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}