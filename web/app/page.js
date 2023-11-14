import Image from 'next/image'
import Since from './components/since';

export default function Home() {
  return (
    <main>
      <Since props={{time: new Date(), since: new Date("November 10, 2023")}} />
    </main>
  )
}
