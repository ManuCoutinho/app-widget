import { CloseButton } from 'components/CloseButton'
import successImg from '/assets/success.svg'
import { FeedbackSuccessStepProps } from './types'

export const FeedbackSuccessStep: React.FC<FeedbackSuccessStepProps> = ({
  onFeedbackRestartRequested
}) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='flex flex-col items-center py-10 w-[304px]'>
        <img src={successImg} alt='icone verde indicando sucesso' />
        <span className='text-xl mt-2'>Agradecemos o feedback!</span>
      </div>
      <button
        type='button'
        onClick={onFeedbackRestartRequested}
        className='py-2 px-6 my-6 bg-zinc-800 rounded-md border-transparent text-sm transition-colors leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500'
      >
        Quero enviar outro feedback
      </button>
    </>
  )
}
