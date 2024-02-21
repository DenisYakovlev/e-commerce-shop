import { UserContextProvider } from "./UserContext"
import { AlertContextProvider } from "./AlertContext"
import { AuthorizationContextProvider } from "./AuthorizationContext"
import { CartContextProvider } from "./CartContext"


export default function ContextManager({children}){
    return (
        <AlertContextProvider>
            <UserContextProvider>
                <AuthorizationContextProvider>
                    <CartContextProvider>
                        {children}
                    </CartContextProvider>
                </AuthorizationContextProvider>
            </UserContextProvider>
        </AlertContextProvider>
    )
}