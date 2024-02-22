import Button from "react-bootstrap/Button"
import classNames from 'classnames'


export default function DarkButton({children, ...props}){
    const {className, ...restProps} = props

    return (
        <Button variant="outline-dark" className={className} {...restProps}
        >
            {children}
        </Button>
    )
}