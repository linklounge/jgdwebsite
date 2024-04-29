import { translations } from "@/components/translate/i18n";
import Link from "next/link";

export default function Startup_Section3() {

    return (
        <>

            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr80 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub color-navy">{translations.t('section_03.who_we_are.title')}</div>
                                    <h2 className="heading-title size-l">{translations.t('section_03.who_we_are.description')}</h2>
                                    <div className="heading-desc">{translations.t('section_03.who_we_are.sub_description')}</div>
                                </div>
                                <div className="block-list layout-01 block-list-flex">
                                    <ul>
                                        <li>
                                            <i className="las la-check" />
                                            <span>{translations.t('section_03.list.1')}</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>{translations.t('section_03.list.2')}</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>{translations.t('section_03.list.3')}</span>
                                        </li>
                                        <li>
                                            <i className="las la-check" />
                                            <span>{translations.t('section_03.list.4')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-wrap mt32"><Link href="/contact-01" className="button fullfield" title="Get in touch">{translations.t('section_03.button')}</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <div className="pdl80">
                                <div className="images layout-02">
                                    <div className="inner">
                                        <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/hst-03.svg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}