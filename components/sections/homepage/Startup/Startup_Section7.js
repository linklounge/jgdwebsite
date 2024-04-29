import { translations } from "@/components/translate/i18n";


export default function Startup_Section7() {
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">{translations.t('section_07.services.service')}</div>
                        <h2 className="heading-title size-l">{translations.t('section_07.services.title')}</h2>
                    </div>
                    <div className="block-icon-box layout-03">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="icon-box p48">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/services-01.svg" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_07.services.1.1')}</h3>
                                            <div className="desc">{translations.t('section_07.services.1.2')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box p48">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/services-02.svg" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_07.services.2.1')}</h3>
                                            <div className="desc">{translations.t('section_07.services.2.2')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box p48">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/services-03.svg" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_07.services.3.1')}</h3>
                                            <div className="desc">{translations.t('section_07.services.3.2')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box p48">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/services-04.svg" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_07.services.4.1')}</h3>
                                            <div className="desc">{translations.t('section_07.services.4.2')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box p48">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/services-05.svg" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_07.services.5.1')}</h3>
                                            <div className="desc">{translations.t('section_07.services.5.2')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box p48">
                                    <div className="inner">
                                        <div className="icon">
                                            <img src="/assets/images/services-06.svg" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_07.services.6.1')}</h3>
                                            <div className="desc">{translations.t('section_07.services.6.2')}</div>
                                        </div>
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