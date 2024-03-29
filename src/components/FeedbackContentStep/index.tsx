import { FormEvent, Fragment, useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import Loading from '../Loading'
import { CloseButton } from '../CloseButton'
import { ScreenshotButton } from '../ScreenshotButton'
import feedbackTypes from '../../data/feedbackTypes'
import { FeedbackContentStepProps } from './types'
import { api } from '../../lib/api'


export const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [comment, setComment] = useState<string>('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)


  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true)
    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })
    setIsSendingFeedback(false)
    onFeedbackSent()
  }
  return (
    <Fragment>
      <header>
        <button
          type='button'
          className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <picture>
            <img
              src={feedbackTypeInfo.image.source}
              alt={feedbackTypeInfo.image.alt}
              className='w-6 h-6'
            />
            <source srcSet={feedbackTypeInfo.image.fallback} type='image/png' />
          </picture>
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className='my-4 w-full' onSubmit={handleSubmitFeedback}>
        <textarea
          placeholder='Conte com detalhes o que está acontecendo...'
          onChange={(event) => setComment(event.target.value)}
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
        />
        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type='submit'
            disabled={comment.length === 0 || isSendingFeedback}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed'
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </Fragment>
  )
}
