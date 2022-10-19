import { Popover } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackSuccessStep } from '.'

export default {
  title: 'Widget UI/Feedback Success',
  component: FeedbackSuccessStep,
  args: {},
  argTypes: {},
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
} as Meta

export const Default: StoryObj = {}
