import Isotope from 'isotope-layout'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'

export default function PortfolioFilterOne({ portfolioStyle, portfolioClass }) {
  // Isotope
  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.grid', {
        itemSelector: '.portfolio-item',
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.portfolio-item',
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      })
    }, 0)
  }, [])
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` })
    }
  }, [filterKey])
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key)
    },
    [],
  )

  const activeBtn = (value) => (value === filterKey ? 'is-active' : '')

  return (
    <>
      {/**
       * Renders a filter button group for portfolio items with category-based filtering.
       * Provides buttons to filter portfolio items by category (All, Ui/Ux Design, Mockup, Illustrator, Branding).
       * Uses dynamic class and click handlers to manage active state and filtering.
       */}
      {/* <div className='portfolio-action'>
        <div className='button-group filter-button-group'>
          <button
            className={activeBtn('*')}
            onClick={handleFilterKeyChange('*')}
          >
            All <span>(12)</span>
          </button>
          <button
            className={activeBtn('design')}
            onClick={handleFilterKeyChange('design')}
          >
            Ui/Ux Design <span>(2)</span>
          </button>
          <button
            className={activeBtn('mockup')}
            onClick={handleFilterKeyChange('mockup')}
          >
            Mockup <span>(4)</span>
          </button>
          <button
            className={activeBtn('illustrator')}
            onClick={handleFilterKeyChange('illustrator')}
          >
            Illustrator <span>(2)</span>
          </button>
          <button
            className={activeBtn('branding')}
            onClick={handleFilterKeyChange('branding')}
          >
            Branding <span>(4)</span>
          </button>
        </div>
      </div> */}

      <div className={`grid ${portfolioStyle ? portfolioStyle : ''}`}>
        <div className='grid-sizer' />
        <div
          className={`portfolio-item grid-item--width2 ${
            portfolioClass ? portfolioClass : ''
          } branding`}
        >
          <article className='portfolio '>
            <div className='entry-thumbnail'>
              <Link href='/portfolio/magic-text' title='MAGIC TEXT'>
              <img src='/assets/images/magic-text.png' alt='MAGIC TEXT' />
              </Link>
            </div>
            <div className='entry-content'>
              <div className='entry-category'>
                <Link href='/' title='Branding'>
                  AI
                </Link>
              </div>
              <div className='entry-title'>
                <h3>
                  <Link href='/' title='MAGIC TEXT'>
                    MAGIC TEXT
                  </Link>
                </h3>
              </div>
            </div>
          </article>
        </div>
        <div
          className={`portfolio-item grid-item--width3 ${
            portfolioClass ? portfolioClass : ''
          } mockup`}
        >
          <article className='portfolio'>
            <div className='entry-thumbnail'>
              <Link href='https://www.linklounge.com.br' title='LINKLOUNGE' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/images/link-lounge.png' alt='LINKLOUNGE' />
              </Link>
            </div>
            <div className='entry-content'>
              <div className='entry-category'>
                <Link href='/' title='Mockup'>
                  SERVICES
                </Link>
              </div>
              <div className='entry-title'>
                <h3>
                  <Link href='/' title='LINKLOUNGE'>
                    LINKLOUNGE
                  </Link>
                </h3>
              </div>
            </div>
          </article>
        </div>

      </div>
    </>
  )
}
