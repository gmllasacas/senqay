import Link from "next/link";

export default function Menu() {
    return (
        <>
            <div className="main-menu">
                <div className="menu-action">
                    <span className="item menu-back">
                        <i className="las la-arrow-left" />
                    </span>
                    <span className="item menu-close">
                        <i className="las la-times" />
                    </span>
                </div>

                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#servicios">Servicios</a>
                    </li>
                    <li>
                        <a href="#trabajo">Trabajo</a>
                    </li>
                    <li className="is-normal-menu">
                        <a href="#proyectos">Proyectos <span className="toggle-sub-menu"></span></a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/shop/shop-fullwidth">Software de Inventario</Link>
                            </li>
                            <li>
                                <Link href="/shop/shop-fullwidth">Inventario de Gimnasio</Link>
                            </li>
                            <li>
                                <Link href="/shop/shop-fullwidth">Almacén de minerales</Link>
                            </li>
                            <li>
                                <Link href="/shop/shop-fullwidth">Gestión de leads inmobiliarios</Link>
                            </li>
                            <li>
                                <Link href="/shop/shop-fullwidth">Administrador de una OSE</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}