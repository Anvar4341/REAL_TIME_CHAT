import {createContext} from "react";
import DatasApi from "./DatasApi";

export const Store = createContext();

export const Datas = ({children}) => {

    const store = {
        datas: DatasApi()
    }

    return (
        <Store.Provider value={store}>
            {children}
        </Store.Provider>
    )
}