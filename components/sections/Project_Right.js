import Link from "next/link";
export default function Project_Right({subTitle, title, description, features, images}) {

    return (
        <>
            <div className="row flex-align-c mt60">
                <div className="col-lg-6 lg-order-2">
                    <div className="pdr100 pdl80 lg-mt32">
                        <div className="heading mb32">
                            <div className="heading-sub color-navy">{subTitle}</div>
                            <h2 className="heading-title">{title}</h2>
                            <div className="heading-desc">{description}</div>
                        </div>
                        <div className="block-list layout-01 block-list-flex mb24">
                            <ul>
                                <li>
                                    <i className="las la-check" />
                                    <span>{features.feature1}</span>
                                </li>
                                <li>
                                    <i className="las la-check" />
                                    <span>{features.feature2}</span>
                                </li>
                                <li>
                                    <i className="las la-check" />
                                    <span>{features.feature3}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="button-wrap">
                            <Link href="/contact-01" className="button text color-navy" title="Ver más">Ver más <i className="las la-long-arrow-alt-right" /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 lg-order-1">
                    <div className="images layout-03">
                        <div className="inner">
                            <svg xmlns="http://www.w3.org/2000/svg" width={570} height={570} viewBox="0 0 570 570">
                                <g fill="none" fillRule="evenodd">
                                    <g fill="var(--sala-shade-background, $shade_background)">
                                        <g>
                                            <g>
                                                <g transform="translate(-134.000000, -2219.000000) translate(-1.000000, 1277.000000) translate(135.000000, 776.000000) translate(0.000000, 166.000000)">
                                                    <rect width={570} height={570} rx={285} />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <img className="img17 wow animate__animated animate__fadeInRight" src={images.image1} alt="Banner" />
                            {images.image2 && (<img className="img18 wow animate__animated animate__fadeInLeft" src={images.image2} alt="Banner" />)}
                            <img className="img19 wow animate__animated animate__fadeInLeft" src={images.image3} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}