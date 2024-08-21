import { Routes,Route,Navigate,useLocation } from "react-router-dom";
import { Padron, CuentaCorriente, Deudores, SideMenu } from "../components"
import { Fade } from "react-awesome-reveal";

export const AppRoutes = () => {
    
    const location = useLocation()
    
    return (
        <>
        <div className="h-100 d-flex">
            <SideMenu />
            <div className="overflow-hidden" style={{width:'Calc( 100vw - 8rem )'}}>
            <Fade cascade triggerOnce direction={'right'} duration={200}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/cuenta-corriente" element={<CuentaCorriente />}/>
                    <Route path="/padron" element={<Padron />}/>
                    <Route path="/deudores" element={<Deudores />}/>
                    <Route path="/*" element={ <Navigate to={"cuenta-corriente"}/>} />
                </Routes>
            </Fade>
            </div>
        </div>
        </>
    )
}