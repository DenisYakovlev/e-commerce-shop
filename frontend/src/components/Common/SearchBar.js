import InputGroup from 'react-bootstrap/InputGroup'
import Form from "react-bootstrap/Form"
import Icon from './Icon'


export default function SearchBar({value, onChange, placeholder, ...props}){
    return (
        <InputGroup {...props}>
            <Form.Control
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                aria-label="search-bark"
                aria-describedby="search-bar"
                type="search"
                className='fs-5'
            />
            <InputGroup.Text id="search-bar">
                <Icon icon="magnifying-glass" className="fs-5 p-1"/>    
            </InputGroup.Text>
        </InputGroup>
    )
}