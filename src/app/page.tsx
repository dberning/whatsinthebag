import fsPromises from 'fs/promises';
import path from "path";
import Video from './components/Video';
import { CSAVideo } from '../types/csa-video';

async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'src/data/data.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData
}

export default async function Home() {
  const data = await getLocalData()
  console.log(data)

  return (        
    <main className="min-w-full flex min-h-screen flex-col">    
    <div className='flex flex-col gap-6 justify-center items-center  mb-20'>
      <h1 className='text-center font-headline text-4xl md:text-7xl px-16'>WHATS IN THE BAG??</h1>            
      {data && data.map( (record: CSAVideo) => {
        return Video(record)
      })
      }          
    </div>
    </main>    
  )
}
