import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const Sections = ({children}) => {
    return (
        <Row
            xs={1} sm={1} md={2}
            className="m-0 p-0"
        >
            {children}
        </Row>
    )
}

Sections.UserSide = ({children}) => {
    return (
        <Col
            xs={12} sm={12} md={4}
            className="p-3"
        >
            {children}
        </Col>
    )
}

Sections.ConsoleSide = ({children}) => {
    return (
        <Col
            xs={12} sm={12} md={8}
            className="p-3"
        >
            {children}
        </Col>
    )
}

export default Sections