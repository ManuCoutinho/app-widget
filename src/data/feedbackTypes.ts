import BugImgSvg from '/assets/bug.svg'
import BugImgPng from '/assets/bug.png'
import IdeaImgSvg from '/assets/idea.svg'
import IdeaImgPng from '/assets/idea.png'
import ThoughtImgSvg from '/assets/thought.svg'
import ThoughtImgPng from '/assets/thought.png'

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImgSvg,
      fallback: BugImgPng,
      alt: 'Imagem de um inseto roxo'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeaImgSvg,
      fallback: IdeaImgPng,
      alt: 'Imagem de uma lampada acesa'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: ThoughtImgSvg,
      fallback: ThoughtImgPng,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}
export default feedbackTypes
