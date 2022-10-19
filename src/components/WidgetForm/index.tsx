import { useState } from 'react'
import { FeedbackTypeStep } from '../FeedbackTypeStep'
import { FeedbackContentStep } from '../FeedbackContentStep'
import { FeedbackSuccessStep } from '../FeedbackSuccessStep/FeedbackSuccessStep'
import { FeedbackType } from './types'

const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <section className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ por{' '}
        <a
          href='https://manucoutinho.vercel.app'
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-2 hover:text-neutral-200'
        >
          Manu Coutinho
        </a>
      </footer>
    </section>
  )
}

export default WidgetForm
