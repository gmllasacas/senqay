import { useState } from 'react';
export default function Section1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section background-grey background-bottom opt100 spdb overflow-hidden" style={{ backgroundImage: 'url(/assets/images/frontend/wave-01.svg)' }}>
                <div className="container">
                    <div className="heading align-center mb32">
                        <h2 className="heading-title size-xl">Software a <span>medida</span></h2>
                        <div className="heading-desc size-l">Desarrollamos una solución personalizada</div>
                    </div>
                    <div className="button-wrap align-center">
                        <a href="#contacto" className="button fullfield" title="Start 14 days Free">Contáctate para una cotización</a>
                    </div>
                    <p className="note align-center">Sin compromisos</p>
                    <div className="row flex-align-c mt20 align-center">
                        <div className="col-xs-12 d-sm-none">
                            <img className="img56 wow animate__animated animate__fadeInRight" src="/assets/images/frontend/section_1_mini.png" alt="Image" />
                        </div>
                    </div>
                    <div className="images layout-16 mt20 d-none d-sm-block">
                        <img className="img01 wow animate__animated animate__fadeInUp" src="/assets/images/frontend/section_1_full.png" alt="Image" />
                    </div>
                    <div className="clients align-center mt60">
                        <span className="title">Utilizamos tecnologías populares</span>
                        <ul className="content">
                            <li><img src="/assets/images/tech/PHP.svg" alt="PHP" /></li>
                            <li><img src="/assets/images/tech/CodeIgniter.svg" alt="CodeIgniter" /></li>
                            <li><img src="/assets/images/tech/Laravel.svg" alt="Laravel" /></li>
                            <li><img src="/assets/images/tech/MySQL.svg" alt="MySQL" /></li>
                            <li><img src="/assets/images/tech/JavaScript.svg" alt="JavaScript" /></li>
                            <li><img src="/assets/images/tech/React.svg" alt="React" /></li>
                            <li><img src="/assets/images/tech/HTML5.svg" alt="HTML5" /></li>
                            <li><img src="/assets/images/tech/CSS3.svg" alt="CSS3" /></li>
                            <li><img src="/assets/images/tech/Node.js.svg" alt="Node.js" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}