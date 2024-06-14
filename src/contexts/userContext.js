import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [premium, setPremium] = useState(false)
    const [active, setActive] = useState(false)

    return (

        <UserContext.Provider value={{login, setLogin, premium, setPremium, active, setActive}}>
            {children}
        </UserContext.Provider>
    )
}

