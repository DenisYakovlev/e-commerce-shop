import { createContext, useState } from "react"

const UserContext = createContext({})

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem('user'))

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, setUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider}

