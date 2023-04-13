import Navbar from "./components/Navbar";
import Data from './Data.json'
import ProductList from "./containers/ProductList";
import AppContext from "./context/AppContext";
import useInitialState from "./hook/useInitialState";


export default function App() {

        const initialState = useInitialState()
        return (
            <>
                <AppContext.Provider value={initialState}>
                    <Navbar data={Data}/>
                    <ProductList data={Data}/>
                </AppContext.Provider>
            </>
        );
}