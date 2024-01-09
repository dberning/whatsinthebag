type CSAItem = {
  name: string,
  source: string,
  recipe: {
    name: string
    link: string
  }
}

type CSAVideo = {
  date: string,
  url: string, 
  items: CSAItem[]
}

export type { CSAVideo, CSAItem }