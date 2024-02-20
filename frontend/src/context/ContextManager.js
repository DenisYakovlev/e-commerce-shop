import { UserContextProvider } from "./UserContext"
import { AlertContextProvider } from "./AlertContext"
import { AuthorizationContextProvider } from "./AuthorizationContext"


export default function ContextManager({children}){
    return (
        <AlertContextProvider>
            <UserContextProvider>
                <AuthorizationContextProvider>
                    {children}
                </AuthorizationContextProvider>
            </UserContextProvider>
        </AlertContextProvider>
    )
}