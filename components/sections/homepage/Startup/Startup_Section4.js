import { translations } from "@/components/translate/i18n";
import Link from "next/link";
export default function Startup_Section4() {
    return (
        <>
            <section className="section background-yellow">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="pdr60 lg-pdt30 lg-pdb30">
                                <div className="heading heading-alway-dark mb32">
                                    <div className="heading-sub">{translations.t('section_04.company_mission')}</div>
                                    <h2 className="heading-title size-l">{translations.t('section_04.company_mission_title')}</h2>
                                    <div className="heading-desc">{translations.t('section_04.company_mission_description')}</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button borderline-dark" title="Read more story">{translations.t('section_04.read_more')}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100">
                                <img className="wow animate__animated animate__fadeInRight" src="/assets/images/hst-04.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}