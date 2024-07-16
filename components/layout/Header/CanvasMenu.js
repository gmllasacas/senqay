import Link from 'next/link';
import { useState } from "react";

export default function CanvasMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* <button onClick={toggleMenu}>Menu</button> */}
            <div className="canvas-menu" onClick={toggleMenu}>
                <div className="icon cursor-pointer">
                    <svg
                        width="30px"
                        height="14px"
                        viewBox="0 0 30 14"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g transform="translate(-50.000000, -33.000000)" fill="#111111">
                                <g id="off-menu" transform="translate(50.000000, 28.000000)">
                                    <g id="icon-menu" transform="translate(0.000000, 5.000000)">
                                        <rect
                                            id="Rectangle-1"
                                            x={0}
                                            y={0}
                                            width={30}
                                            height={3}
                                            rx="1.5"
                                        />
                                        <rect
                                            id="Rectangle-2"
                                            x={0}
                                            y={11}
                                            width={20}
                                            height={3}
                                            rx="1.5"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

                <div className="icon cursor-pointer d-none">
                    <svg
                        width="30px"
                        height="14px"
                        viewBox="0 0 30 14"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g transform="translate(-50.000000, -33.000000)" fill="#9f9f9f">
                                <g id="off-menu" transform="translate(50.000000, 28.000000)">
                                    <g id="icon-menu" transform="translate(0.000000, 5.000000)">
                                        <rect
                                            id="Rectangle-1"
                                            x={0}
                                            y={0}
                                            width={30}
                                            height={3}
                                            rx="1.5"
                                        />
                                        <rect
                                            id="Rectangle-2"
                                            x={0}
                                            y={11}
                                            width={20}
                                            height={3}
                                            rx="1.5"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>

            {isOpen && (
                <nav className="mobile-menu">
                    <ul>
                        <li className="wow animate__animated animate__fadeInLeft " data-wow animate__animated-delay="0s">
                            <a href="#" onClick={toggleMenu}>Inicio</a>
                        </li>
                        <li className="wow animate__animated animate__fadeInLeft " data-wow animate__animated-delay="0.5s">
                            <a href="#servicios" onClick={toggleMenu}>Servicios</a>
                        </li>
                        <li className="wow animate__animated animate__fadeInLeft " data-wow animate__animated-delay="1s">
                            <a href="#trabajo" onClick={toggleMenu}>Trabajo</a>
                        </li>
                        <li className="wow animate__animated animate__fadeInLeft " data-wow animate__animated-delay="1.5s">
                            <a href="#proyectos" onClick={toggleMenu}>Proyectos</a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );

}