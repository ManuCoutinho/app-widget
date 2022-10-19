import { CloseButton } from '../CloseButton'
import { FeedbackType } from '../WidgetForm/types'
import feedbackTypes from '../../data/feedbackTypes'
import { FeedbackTypeStepProps } from './types'

export const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({
  onFeedbackTypeChanged
}) => {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback </span>
        <CloseButton />
      </header>
      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className='bg-zinc-800 rounded-lg flex-1 py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
              type='button'
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
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
    </>
  )
}
