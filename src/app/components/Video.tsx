import { CSAVideo } from "@/src/types/csa-video";

export default function Video(record: CSAVideo){
  return (
  <video className="p-6 bg-white rounded-16 w-3/4 h-3/4  md:w-1/4 md:h-1/4 rounded-lg" controls>
    <source src={record.url} />
  </video>
  )
}