import { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from '.'
import { Popover } from '@headlessui/react'

export default {
  title: 'Component/CloseButton',
  component: CloseButton,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Popover>
          {Story()}
        </Popover>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}