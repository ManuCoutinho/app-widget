import { useState } from 'react'
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import Loading from '../Loading'
import { ScreenshotButtonProps } from './types'

export const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({
  onScreenshotTook,
  screenshot
}) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }
  // console.log(screenshot)
  if (screenshot) {
    return (
      <button
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight='fill' />
      </button>
    )
  }
  return (
    <button
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
      type='button'
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6 ' />}
    </button>
  )
}
