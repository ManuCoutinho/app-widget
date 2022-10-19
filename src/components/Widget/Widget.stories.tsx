import { Meta, StoryObj } from '@storybook/react'
import { Widget } from '.'

export default {
  title: 'App/Widget',
  component: Widget,
  decorators: [
    (Story) => {
      return (
        <div className='w-full h-full p-16 bg-zinc-900 relative'>
          {Story()}
        </div>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}