import Link from 'next/link'

export default function Logo() {
    return (
        <>
            <div className="logo">
                <Link href="/">
                    <img src="/assets/images/frontend/logo.png" alt="Image" className="wow animate__animated animate__fadeInLeft" />
                </Link>
            </div>
        </>
    )
}