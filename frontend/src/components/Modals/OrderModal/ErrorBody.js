import Container from "react-bootstrap/Container";
import Icon from "../../Common/Icon"


export default function ErrorBody(){
    return (
        <Container className="px-3 pt-3 pb-5 d-flex flex-column gap-3 justify-content-center" fluid>
            <Icon icon="circle-xmark" style={{fontSize: "64px"}} className="text-danger"/>


            <p className="m-0 fs-1 fw-bold text-dark text-center">
                Спробуйте пізніше...
            </p>
        </Container>
    )
}