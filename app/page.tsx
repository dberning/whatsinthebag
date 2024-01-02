import Image from 'next/image'

export default function Home() {
  return (        
    <main className="min-w-full flex min-h-screen flex-col bg-farm-background bg-no-repeat bg-cover">          
    <nav className="p-6 flex top-0 left-0">
    <Image
        alt='logo'
        src={'/logo.png'}
        height={500}
        width={100}
      />
    </nav>
    <div className='flex flex-col gap-6 justify-center items-center  mb-20'>
      <h1 className='text-center font-headline text-4xl md:text-7xl px-16'>WHATS IN THE BAG??</h1>      
      <video className="p-6 bg-white rounded-16 w-3/4 h-3/4  md:w-1/4 md:h-1/4 rounded-lg" controls>
        <source className='' src="https://res.cloudinary.com/dvrnub7lx/video/upload/v1691536202/tiny_farm_video_e8f62bb6d0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>    
    </div>
    </main>    
  )
}
