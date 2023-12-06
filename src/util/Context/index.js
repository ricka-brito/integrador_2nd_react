import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const AppContext = ({ children }) => {
    const [contextState, setState] = useState({cpf: null})
    return (
        <GlobalContext.Provider value={{ contextState, setState }}>
            {children}
        </GlobalContext.Provider>
    )
}