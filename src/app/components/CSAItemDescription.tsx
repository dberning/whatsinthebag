import { CSAItem } from "@/src/types/csa-video";

type CSAItemDescriptionProp = {
  item: CSAItem
}

export default function CSAItemDescription( { item }: CSAItemDescriptionProp ){
  return (
    <div className="flex flex-col">      
      <div className="flex flex-row gap-2 items-center">      
        <h2 className="text-md">{item.name}</h2>
        <p className="italic text-xs text-gray-300">{item.source}</p>
      </div>
      {item.recipe.name &&
        <div className="flex flex-row gap-2 text-gray-500">
        <p className="text-sm">Recipe:</p>
        <a className="text-sm" href={item.recipe.link} target="blank"><span className="underline">{item.recipe.name}</span></a>
      </div>
      }      
    </div>
  )
}