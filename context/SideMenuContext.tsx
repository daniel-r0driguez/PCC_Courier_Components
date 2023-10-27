import React, {useContext, useState} from 'react';
import SideMenu from "../components/SideMenu";

// Type declarations
type ToggleSideMenu = () => void;

type SideMenuProviderProps = {
    children: React.ReactNode;
}

// Creating the contexts.
const SideMenuContext = React.createContext<boolean>(false);
const SideMenuUpdateContext = React.createContext<ToggleSideMenu | undefined>(undefined);

// Allowing children to access these contexts.
export const useSideMenu = () => {
    return useContext(SideMenuContext);
}

export const useSideMenuUpdate = () => {
    return useContext(SideMenuUpdateContext);
}

export const SideMenuProvider = ({children}: SideMenuProviderProps) => {
    const [show, setShow] = useState<boolean>(false);

    const toggleShow = () => {
        console.log("SideMenuUpdate used!")
        setShow((prevShow) => !prevShow);
    }

    return (
        <SideMenuContext.Provider value={show}>
            <SideMenuUpdateContext.Provider value={toggleShow}>
                {children}
            </SideMenuUpdateContext.Provider>
        </SideMenuContext.Provider>
    )
}