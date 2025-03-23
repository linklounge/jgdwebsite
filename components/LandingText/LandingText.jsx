import React, { useState, useEffect } from 'react'

const LandingText = () => {
  const badTexts = [
    'this extention fix you bad writting and make it pro. No more typos or werd words!',
    'Writindg emails hard? This tool help ffix gramr and make sound better.',
    'Make your Mmessage pro with AI! It change missdtakes and make more clear.',
    'No plus bad wrifrting! This extension rewriate stuff so it look good and smart.',
    'Texts full of errores? This tool autofix and make sound better fast.',
  ]

  const goodTexts = [
    'Our extension transforms poorly written messages into polished, professional communication. It detects errors, awkward phrasing, and unclear tone, then rewrites your text to ensure clarity, professionalism, and impact.',
    'With our smart writing assistant, you never have to worry about typos or unclear messages again. It refines your writing in real-time, making every email, report, or message sound confident and well-structured.',
    'Struggling with tone and professionalism in your emails? Our extension seamlessly enhances your writing, ensuring that every message you send is polished, articulate, and error-free.',
    'From fixing grammar mistakes to improving clarity and tone, our AI-powered tool instantly upgrades your writing. Whether it’s a business email, project update, or presentation, we make sure your words leave a lasting impression.',
    'Turn rushed, error-filled texts into articulate, impactful messages. Our extension analyzes your writing and provides instant improvements, helping you communicate with confidence and professionalism.',
  ]

  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isImproving, setIsImproving] = useState(false)
  const [isGoodText, setIsGoodText] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to highlight errors in red
  const highlightErrors = (text) => {
    const errors = [
      'extention',
      'writting',
      'werd',
      'Writindg',
      'ffix',
      'gramr',
      'Mmessage',
      'missdtakes',
      'wrifrting',
      'rewriate',
      'errores',
    ]

    const regex = new RegExp(`\\b(${errors.join('|')})\\b`, 'gi')
    return text.replace(regex, '<span style="color: red;">$1</span>')
  }

  const typeBadText = (text, index, textIndex) => {
    setIsTyping(true)

    function typeCharacter(i) {
      if (i <= text.length) {
        setDisplayText(highlightErrors(text.substring(0, i)))
        setTimeout(() => typeCharacter(i + 1), 30)
      } else {
        setIsTyping(false)

        setTimeout(() => {
          setIsImproving(true)
          setTimeout(() => {
            setIsImproving(false)
            setIsGoodText(true)
            setDisplayText(goodTexts[textIndex])

            setTimeout(() => {
              setIsGoodText(false)
              const nextIndex = (textIndex + 1) % badTexts.length
              typeBadText(badTexts[nextIndex], 0, nextIndex)
            }, 8000)
          }, 1500)
        }, 1000)
      }
    }

    typeCharacter(index)
  }

  useEffect(() => {
    typeBadText(badTexts[0], 0, 0)

    return () => {
      let id = setTimeout(null, 0)
      while (id--) {
        clearTimeout(id)
      }
    }
  }, [])

  return (
    <div className='position-relative mt-4 mb-4'>
      <div
        className='form-control bg-light p-3 fs-5'
        dangerouslySetInnerHTML={{ __html: displayText }}
        style={{
          minHeight: '250px',
          resize: 'none',
          pointerEvents: 'none',
          border: '1px solid #ccc',
          padding: '10px',
          fontSize: '16px',
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace',
          overflow: 'hidden',
        }}
      />

      {isImproving && (
        <div
          className='position-absolute'
          style={{ bottom: '20px', right: '20px' }}
        >
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Improving text...</span>
          </div>
        </div>
      )}

      {isTyping && !isImproving && (
        <div
          className='position-absolute'
          style={{ bottom: '20px', right: '20px' }}
        >
          <span className='typing-indicator'>|</span>
        </div>
      )}
    </div>
  )
}

export default LandingText
