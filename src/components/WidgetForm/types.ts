import feedbackTypes from './feedbackTypes'

export type FeedbackType = keyof typeof feedbackTypes

export interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}
