import { useState } from 'react'
import { CloseButton } from './CloseButton'

import BugImgSvg from '../assets/bug.svg'
import BugImgPng from '../assets/bug.png'
import IdeaImgSvg from '../assets/idea.svg'
import IdeaImgPng from '../assets/idea.png'
import ThoughtImgSvg from '../assets/thought.svg'
import ThoughtImgPng from '../assets/thought.png'

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImgSvg,
      fallback: BugImgPng,
      alt: 'Imagem de um inseto roxo'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeaImgSvg,
      fallback: IdeaImgPng,
      alt: 'Imagem de uma lampada acesa'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: ThoughtImgSvg,
      fallback: ThoughtImgPng,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

type FeedbackType = keyof typeof feedbackTypes

const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <section className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-column items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className='flex py-8 gap-2 w-full'>
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                className='bg-zinc-800 rounded-lg flex-1 py-5 w-24 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                type='button'
                key={key}
                onClick={() => setFeedbackType(key as FeedbackType)}
              >
                <picture>
                  <img src={value.image.source} alt={value.image.alt} />
                  <source srcSet={value.image.fallback} type='image/png' />
                </picture>
                <span>{value.title}</span>
              </button>
            )
          })}
        </div>
      ) : (
        <p>OUTRA COISA</p>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ❤ por{' '}
        <a
          href='https://manucoutinho.vercel.app'
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-2'
        >
          Manu Coutinho
        </a>
      </footer>
    </section>
  )
}

export default WidgetForm
