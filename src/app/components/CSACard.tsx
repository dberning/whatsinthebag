import { CSAItem, CSAVideo } from "@/src/types/csa-video";
import CSAItemDescription from "./CSAItemDescription";

type CSAVideoPlayerProps = {
  record: CSAVideo, 
  isFeatured: boolean
}

export default function CSACard( { record, isFeatured }: CSAVideoPlayerProps){
  return (
    <div className="flex flex-col md:flex-row w-3/4 md:w-full justify-center">
        <div className="rounded-l-lg shadow-lg bg-white max-w-sm">
            
                <video width="320" height="240" controls className="w-full rounded-t-lg">
                    <source src={record.url} />                    
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="p-12 bg-white rounded-r-lg md:w-96">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{record.date}</h5>
                <div className="flex flex-col gap-3 text-gray-700 text-base mb-4">
                    {record.items.length ?  
                      record.items.map( (item: CSAItem, idx: number) => {
                        return < CSAItemDescription key={idx} item={item} />
                      })
                      : <></>
                    }
                </div>
                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
            </div>
        </div>
    
  )
}