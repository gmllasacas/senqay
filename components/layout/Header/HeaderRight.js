import Link from 'next/link'

export default function HeaderRight() {
    return (
        <>
            <div className="header-right flex flex-align-c flex-content-e">
                <div className="buttons">
                    <a href="#contacto" className="button fullfield">
                        <i className="las la-sms" />
                        <span>Contacto</span>
                    </a>
                </div>
            </div>
        </>
    )
}