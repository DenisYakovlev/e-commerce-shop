import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Icon from "./Icon"


export default function QuantitySwitch({value, onChange}){
    return (
        <Container className="p-0 d-flex flex-row gap-2">
            <Button 
                variant="outline-dark" 
                size="sm"
                className="rounded-pill"
                disabled={value <=1}
                onClick={() => onChange(value - 1)}
            >
                <Icon icon="minus"/>
            </Button>

            <Form.Control
                type="number"
                readOnly
                className="text-center rounded-pill"
                style={{width: "50px"}}
                value={value}
                onChange={e => onChange(e.target.value)} 
            />

            <Button 
                variant="outline-dark" 
                size="sm"
                className="rounded-pill"
                onClick={() => onChange(value + 1)}
            >
                <Icon icon="plus"/>
            </Button>
        </Container>
    )
}