import Image from 'next/image'

import FrontPage from '@/components/frontpage/FrontPage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FrontPage />
    </main>
  )
}
