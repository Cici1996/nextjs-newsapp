import Header from './Header'
import HomePage from './HomePage'

export default function Home() {
  return (
    <>
      <Header />
      <div className='max-w-6xl mx-auto'>
        <HomePage />
      </div>
    </>
  )
}
