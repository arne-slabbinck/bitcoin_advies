import React from 'react'

const Table = () => {
  return (
    <div className="flex flex-col">
        <h1 
            className="text-[24px] font-rethinksans"
        >Bitcoin Markten</h1>
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 font-rethinksans">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">#</th>
                <th scope="col" className="px-6 py-4">Exchange</th>
                <th scope="col" className="px-6 py-4">Pair</th>
                <th scope="col" className="px-6 py-4">Prijs</th>
                <th scope="col" className="px-6 py-4">Volume</th>
                <th scope="col" className="px-6 py-4">Vertrouwen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Binance</td>
                <td className="whitespace-nowrap px-6 py-4">BTC/EUR</td>
                <td className="whitespace-nowrap px-6 py-4">€ 39,096.28</td>
                <td className="whitespace-nowrap px-6 py-4">€ 420</td>
                <td className="whitespace-nowrap px-6 py-4">Hoog</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4">Coinbase</td>
                <td className="whitespace-nowrap px-6 py-4">BTC/EUR</td>
                <td className="whitespace-nowrap px-6 py-4">€ 39,096.28</td>
                <td className="whitespace-nowrap px-6 py-4">€ 420</td>
                <td className="whitespace-nowrap px-6 py-4">Hoog</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td className="whitespace-nowrap px-6 py-4">Kraken</td>
                <td className="whitespace-nowrap px-6 py-4">BTC/EUR</td>
                <td className="whitespace-nowrap px-6 py-4">€ 39,096.28</td>
                <td className="whitespace-nowrap px-6 py-4">€ 420</td>
                <td className="whitespace-nowrap px-6 py-4">Hoog</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Table