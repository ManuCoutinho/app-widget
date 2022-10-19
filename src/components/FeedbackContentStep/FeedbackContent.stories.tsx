import { Popover } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackContentStep} from '.'
import feedbackTypes from '../../data/feedbackTypes'
import { FeedbackContentStepProps } from '../FeedbackContentStep/types'
import {rest} from 'msw'
export default {
  title: 'Widget UI/Feedback Content',
  component: FeedbackContentStep,
  argTypes: {
    feedbackType: {
      options : Object.keys(feedbackTypes)
    },
    onFeedbackRestartRequested:{
      table: {
        disable: true
      }
    }, 
    onFeedbackSent:{
      table: {
        disable: true
      }
    }
  },
  parameters:{
    msw:{
      handlers: [
        rest.post('/feedbacks', (req, res) => {
          return res()
        })
      ]
    }
  },
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
} as Meta<FeedbackContentStepProps>

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'BUG'
  }
}
export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'IDEA'
  }
}
export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'OTHER'
  }
}
