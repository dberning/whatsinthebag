type Recipe = {
  name: string
  link: string
}

type CSAItem = {
  name: string,
  source: string,
  recipe: Recipe
}

type CSAVideo = {
  date: string,
  url: string, 
  featured_recipe: Recipe, 
  items: CSAItem[]
}

export type { CSAVideo, CSAItem }