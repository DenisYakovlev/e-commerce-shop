import Container from "react-bootstrap/Container";
import Icon from "../../Common/Icon"


export default function SuccessBody(){
    return (
        <Container className="px-3 pt-3 pb-5 d-flex flex-column gap-3 justify-content-center align-item-center" fluid>
            <Icon icon="circle-check" style={{fontSize: "64px"}} className="text-success"/>

            <p className="m-0 fs-1 fw-bold text-dark text-center">
                Ваше замовлення оформлено!
            </p>
        </Container>
    )
}