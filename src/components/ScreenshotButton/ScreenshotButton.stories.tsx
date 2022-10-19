import { Meta, StoryObj } from '@storybook/react'
import { ScreenshotButton } from '.'
import { ScreenshotButtonProps } from './types'

export default {
  title: 'Component/Screenshot Button',
  component: ScreenshotButton,
  argTypes: {
    onScreenshotTook: {
      table: {
        disable: true
      }
    },
    screenshot: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ScreenshotButtonProps>

export const Default: StoryObj<ScreenshotButtonProps> = {}