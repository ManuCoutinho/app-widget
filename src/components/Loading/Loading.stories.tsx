import { Meta, StoryObj } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Component/Loading',
  component: Loading,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return ( 
            <div className='w-full grid place-content-center p-6 bg-zinc-900 rounded'>
              {Story()}
            </div>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}