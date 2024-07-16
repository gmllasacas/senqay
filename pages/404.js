import Link from "next/link";
export default function Page404() {
    return (
        <>
            <div className="spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="maintainance-left pdr80">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/assets/images/frontend/logo_footer.png" alt="Image" className="img57 wow animate__animated   animate__fadeInRight" />
                                    </Link>
                                </div>
                                <div className="heading">
                                    <h2 className="heading-title size-xl">404 <br /> Página no encontrada</h2>
                                    <div className="heading-desc">Esta página no ha sido encontrada. <br /> Regresar al <Link href="/" title="Inicio">Inicio</Link></div>
                                </div>
                                <div className="socials">
                                    <Link href="/" title="facebook"><i className="lab la-facebook-f" /></Link>
                                    <Link href="/" title="twitter"><i className="lab la-twitter" /></Link>
                                    <Link href="/" title="instagram"><i className="lab la-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="maintainance-right lg-mt32">
                                <img src="/assets/images/frontend/not-found.webp" alt="404" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
