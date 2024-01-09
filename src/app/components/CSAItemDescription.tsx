import { CSAItem } from "@/src/types/csa-video";

type CSAItemDescriptionProp = {
  item: CSAItem
}

export default function CSAItemDescription( { item }: CSAItemDescriptionProp ){
  return (
    <div className="flex flex-col">      
      <h2>{item.name}</h2>
      <p className="italic text-sm text-gray-300">{item.source}</p>
      {item.recipe.name &&
        <div className="flex flex-row gap-2">
        <p>Recipe</p>
        <a href={item.recipe.link}><span>{item.recipe.name}</span></a>
      </div>
      }      
    </div>
  )
}