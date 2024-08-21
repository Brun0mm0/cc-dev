import { Link, Route, Routes, useLocation } from "react-router-dom"
import { SideCuentaCorriente } from "./SideCuentaCorriente"
import { Fade } from "react-awesome-reveal"
import { SideDeudores } from "./SideDeudores"
import { SidePadron } from "./SidePadron"
export const SideMenu = () => {

    const location = useLocation()

    return (
        <>
        <div className="d-flex" style={{width:'8rem'}}>
        <div className="z-1 d-flex flex-column flex-shrink-0 bg-body shadow" style={{width:'5rem'}}>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center ">
                <li className="nav-item">
                    <Link to={'cuenta-corriente'}>
                    <a href="#" className="nav-link py-3 border-bottom rounded-0 p-1"
                        aria-current="page"
                        data-bs-toggle="tooltip"
                        aria-label="Home"
                        data-bs-original-title="home"
                        data-bs-placement="right">
                            <i className="fa-solid fa-building-columns fa-xl"></i>
                            <p className="m-0"><small>cuenta corriente</small></p>
                        </a>
                    </Link>
                </li>
                <li className="nav-item w-100">
                    <Link to={'padron'}>
                <a className="nav-link py-3 border-bottom rounded-0 p-1"
                    aria-current="page"
                    data-bs-toggle="tooltip"
                    aria-label="Home"
                    data-bs-original-title="home"
                    data-bs-placement="right">
                            <i className="fa-regular fa-address-book fa-xl"></i>
                            <p className="m-0"><small>padrón</small></p>
                        </a>
                    </Link>
                </li>
                <li className="nav-item w-100">
                    <Link to={'deudores'}>
                <a href="#" className="nav-link py-3 border-bottom rounded-0 p-1"
                        aria-current="page"
                        data-bs-toggle="tooltip"
                        aria-label="Home"
                        data-bs-original-title="home"
                        data-bs-placement="right">
                            <i className="fa-solid fa-box-archive fa-xl"></i>
                            <p className="m-0"><small>deudores</small></p>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        <Fade cascade direction={'left'} duration={500}>
            <Routes location={location} key={location.pathname}>
                <Route path="/cuenta-corriente" element={<SideCuentaCorriente />}/>
                <Route path="/deudores" element={<SideDeudores />}/>
                <Route path="/padron" element={<SidePadron />}/>
            </Routes>
        </Fade>
        </div>
        </>
    )
}