import React from 'react'

const Home = () => {
  return (
    <div className='HOME px-3 pb-24'>
      <div className='HERO max-w-[600px] my-20 mx-auto flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'> Largest <br /> Crypto Marketplace</h1>
        <p className=' text-lg font-medium w-3/4'> Welcome to the one of the largest Cryptocurrency Marketplace. Sign up to explore more about cryptos</p>
        <form className='p-2 w-4/5 bg-white rounded-2xl b '> {/* Search bar */}
            <input className='' type='text' placeholder='Search Crypto..' />
            <button className='' type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home
