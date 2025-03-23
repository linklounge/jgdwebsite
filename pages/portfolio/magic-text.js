import CounterUp from '@/components/elements/CounterUp'
import LandingText from '@/components/LandingText/LandingText'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'
import ImgLogo from '../../assets/logo.png'
import ContactOne from './../contact-01'

export default function MagicTextLanding() {
  return (
    <>
      <Layout siteContentClass='pt0 pb0'>
        <section className='section'>
          <div className='container h100'>
            <div className='row flex-align-c h100 mt0'>
              <div className='col-lg-6'>
                <div className='heading mg0 pdr80'>
                  <div className='heading-sub'>Enhance Your Writing</div>
                  <h2 className='heading-title size-xl'>Magic Text</h2>
                  <LandingText />
                  <div className='button-wrap mt32'>
                    <Link
                      href='https://chromewebstore.google.com/detail/magic-text/fcfdelloaponllgomphhpbjhiockjipk'
                      className='button fullfield'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span>Add to Chrome</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='align-center'>
                  <Image
                    src={ImgLogo}
                    alt='Magic Text Logo'
                    style={{
                      maxHeight: '400px',
                      maxWidth: '400px',
                      marginLeft: '10px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section spdt'>
          <div className='container'>
            <div className='heading align-center'>
              <h2 className='heading-title size-l'>Why Choose Magic Text?</h2>
            </div>
            <div className='block-icon-box layout-03'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='icon-box p48'>
                    <div className='inner'>
                      <div className='icon'>
                        <img src='/assets/images/services-01.svg' alt='Icon' />
                      </div>
                      <div className='content'>
                        <h3 className='title'>Instant Fixes</h3>
                        <div className='desc'>
                          Corrects grammar, spelling, and clarity in real-time.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='icon-box p48'>
                    <div className='inner'>
                      <div className='icon'>
                        <img src='/assets/images/services-02.svg' alt='Icon' />
                      </div>
                      <div className='content'>
                        <h3 className='title'>Professional Tone</h3>
                        <div className='desc'>
                          Ensures your messages always sound polished and
                          confident.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='icon-box p48'>
                    <div className='inner'>
                      <div className='icon'>
                        <img src='/assets/images/services-03.svg' alt='Icon' />
                      </div>
                      <div className='content'>
                        <h3 className='title'>Seamless Integration</h3>
                        <div className='desc'>
                          Works with emails, reports, and social media posts
                          instantly.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='icon-box p48'>
                    <div className='inner'>
                      <div className='icon'>
                        <img src='/assets/images/services-04.svg' alt='Icon' />
                      </div>
                      <div className='content'>
                        <h3 className='title'>Save Time</h3>
                        <div className='desc'>
                          No more proofreading—Magic Text does it for you
                          instantly!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </Layout>
    </>
  )
}
