import fsPromises from 'fs/promises';
import path from "path";
import { CSAVideo } from '../types/csa-video';
import CSACard from './components/CSACard';

async function getLocalData() {
  const filePath = path.join(process.cwd(), 'src/data/data.json');  
  const jsonData = await fsPromises.readFile(filePath);
  // @ts-ignore
  const objectData = JSON.parse(jsonData);

  return objectData
}

export default async function Home() {
  const data = await getLocalData()
  const featuredVideo = data.splice(0, 1)[0]

  console.log(data.length, featuredVideo)

  return (        
    <main className="min-w-full flex min-h-screen flex-col">    
    <div className='flex flex-col gap-6 justify-center items-center  mb-20'>
      <h1 className='text-center font-headline text-4xl md:text-7xl px-16'>WHATS IN THE BAG??</h1>                       
      <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center'>
        {data.length ? data.map( (record: CSAVideo, idx: number) => {
          return <CSACard key={idx} record={record} isFeatured={false}/>
        })
        : <></>
        }
      </div> 
      </div>      
    
    </main>    
  )
}
