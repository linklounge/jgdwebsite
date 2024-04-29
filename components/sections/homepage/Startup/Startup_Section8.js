import EcommerceTestimonialSlider from "@/components/slider/EcommerceTestimonialSlider";

import { translations } from "@/components/translate/i18n";

export default function Startup_Section8() {
    return (
        <>
            <section className="section background-grey spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <div className="heading-sub color-navy">{translations.t('section_08.testimonial.testimonial')}</div>
                        <h2 className="heading-title size-l">{translations.t('section_08.testimonial.title')}</h2>
                    </div>
                    <div className="block-testimonial layout-01">
                        <div className="swiper uxp-swiper-slider testimonial-slider">
                            <EcommerceTestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}