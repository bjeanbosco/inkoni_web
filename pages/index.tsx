import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from './screens/Sidebar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-black w-full mx-10 ${inter.className}`}
    >
      <Sidebar/>
    </main>
  )
}
