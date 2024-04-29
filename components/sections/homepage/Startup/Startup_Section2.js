import { translations } from "@/components/translate/i18n"



export default function Startup_Section2() {

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="block-icon-box layout-13">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="inner">
                                        <div className="icon background-navy">
                                            <i className="las la-shield-alt"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_02.1.1')}</h3>
                                            <div className="desc">{translations.t('section_02.1.2')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="inner">
                                        <div className="icon background-yellow">
                                            <i className="las la-puzzle-piece"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_02.2.1')}</h3>
                                            <div className="desc">{translations.t('section_02.2.2')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="inner">
                                        <div className="icon background-red">
                                            <i className="las la-umbrella"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{translations.t('section_02.3.1')}</h3>
                                            <div className="desc">{translations.t('section_02.3.2')}</div>
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