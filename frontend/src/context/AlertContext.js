import { createContext, useState } from "react"
import Alert from "react-bootstrap/Alert"


const AlertContext = createContext()

const AlertContextProvider = ({children}) => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const showTime = 5000

    const showAlert = (error) => {
        setError(error)
        setShow(true)

        setTimeout(() => setShow(false), showTime)
    }

    return (
        <AlertContext.Provider
            value={{showAlert}}
        > 
                {children}

            {show &&
                <Alert
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible
                    style={{
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        maxWidth: "calc(100% - 2rem)",
                        width: "800px"
                    }}
                    className="position-fixed"
                >
                    <Alert.Heading>
                        Помилка
                    </Alert.Heading>

                    <p className="text-justify">
                        {error}
                    </p>
                </Alert>
            }
        </AlertContext.Provider>
    )
}

export { AlertContext, AlertContextProvider }