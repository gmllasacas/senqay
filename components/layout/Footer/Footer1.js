import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="footer-item footer-about">
                                        <div className="logo">
                                            <Link href="/">
                                                <img src="/assets/images/frontend/logo_footer.png" alt="Image" className="img57 wow animate__animated animate__fadeInRight" />
                                            </Link>
                                        </div>
                                        <p>
                                            Starp up de servicios digitales para empresas de diversos rubros.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer-item footer-menu">
                                        <h6>Enlaces</h6>
                                        <ul>
                                            <li>
                                                <Link href="/" title="Inicio">
                                                    Inicio
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="#servicios" title="Servicios">
                                                    Servicios
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#trabajo" title="Trabajo">
                                                    Trabajo
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#proyectos" title="Proyectos">
                                                    Proyectos
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer-item footer-menu">
                                        <h6>Redes sociales</h6>
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com" title="Facebook">
                                                    Facebook
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.twitter.com" title="Twitter">
                                                    Twitter
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com" title="Instagram">
                                                    Instagram
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com" title="Linkedin">
                                                    Linkedin
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer-item footer-menu">
                                        <h6>Contacto</h6>
                                        <ul>
                                            <li>
                                                <i className="las la-phone" /> +051 999 999 999
                                            </li>
                                            <li>
                                                <i className="las la-envelope" /> email@dominio.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner flex flex-content-sb flex-align-c">
                            <div className="copyright">© 2024 Senqay Source. Todos los derechos reservados.</div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link href="/politica-privacidad" title="Política de Privacidad">
                                            Política de Privacidad
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}