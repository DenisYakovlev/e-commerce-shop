import Icon from "../../Common/Icon";
import CardText from "react-bootstrap/esm/CardText"


export default function TabTitle({icon, text}){
    return (
        <CardText className="fs-6 text-dark fw-semibold">
            <Icon icon={icon} className="fs-5"/> {text}
        </CardText>
    )
}