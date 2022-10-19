import { Popover } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackTypeStep } from '.'
import { FeedbackTypeStepProps } from './types'

export default {
  title: 'Widget UI/Feedback Steps',
  component: FeedbackTypeStep,
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className='max-w-sm flex flex-col justify-center items-center p-6 bg-zinc-900 rounded'>
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      )
    }
  ]
} as Meta<FeedbackTypeStepProps>

export const Default: StoryObj<FeedbackTypeStepProps> = {}