import CounterUp from "@/components/elements/CounterUp";
import { translations } from "@/components/translate/i18n";
import Link from "next/link";
export default function Startup_Section5() {
    return (
        <>
            <section className="section spdtb">
                <div className="block-banner">
                    <div className="container">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img className="wow animate__animated animate__fadeInRight" src="/assets/images/hst-05.svg" alt="Banner" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content lg-mt32 pdl60">
                                    <div className="heading mb32">
                                        <div className="heading-sub color-navy">{translations.t('section_05.insight')}</div>
                                        <h2 className="heading-title size-l">{translations.t('section_05.insight_title')}</h2>
                                        <div className="heading-desc">{translations.t('section_05.insight_description')}</div>
                                    </div>
                                    <div className="block-counter layout-03">
                                        <div className="row">
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={5} time={1} /></span><span className="suffix color-navy">%</span></div>
                                                    <div className="title">{translations.t('section_05.1.2')}</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={100} time={1} /></span><span className="suffix color-navy">%</span></div>
                                                    <div className="title">{translations.t('section_05.2.2')}</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={10} time={1} /></span><span className="suffix color-navy">+</span></div>
                                                    <div className="title">{translations.t('section_05.3.2')}</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6">
                                                <div className="counter-box">
                                                    <div className="number"><span className="counter"><CounterUp count={20} time={1} /></span><span className="suffix color-navy">%</span></div>
                                                    <div className="title">{translations.t('section_05.4.2')}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="button-wrap">
                                        <Link href="/contact-01" className="button fullfield">Get in touch</Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}