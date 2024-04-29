import Link from "next/link";

import { translations } from "../../../../components/translate/i18n";

export default function Startup_Section1() {
    return (
        <>

            <section className="section opt120 spdb overflow-hidden">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr100">
                                <div className="heading mb32">
                                    <div className="heading-sub layout-02">{translations.t('section_01.heading_landing.1')}</div>
                                    <h2 className="heading-title size-xl">{translations.t('section_01.heading_landing.2')}
                                     <span className="no-underline background-04">{translations.t('section_01.heading_landing.3')}
                                    </span> {translations.t('section_01.heading_landing.4')}
                                    </h2>
                                    <div className="heading-desc no-underline background-04 ">{translations.t('section_01.heading_landing.5')}</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Les't talk - Send a message">{translations.t('section_01.envite_button_landing')}</Link>
                                </div>
                                <p className="h3 color-dark w500 mt32">Phone +55 (11) 95470-6620</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="wow animate__animated animate__zoomIn" src="/assets/images/hst-01.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}