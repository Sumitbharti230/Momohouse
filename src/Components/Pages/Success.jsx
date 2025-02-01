import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Success() {

  // console.log("Success")
  const [SearchParams]=useSearchParams()
  let data=SearchParams.get("data")
  console.log(data)


  const decodedData = atob(data);
  const newData = JSON.parse(decodedData);
  console.log(newData);


  return (
    <div className=' flex justify-center p-2 h-[100%]'>

      <div className=' text-center font-semibold shadow-xl'>
        <img src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg" alt="success_image" className='w-52' />

        <h1>Payment Successful</h1>
        <p>Thank You</p>
        <button className=' bg-red-600 hover:bg-green-800 p-4
             flex items-center gap-x-2 text-white rounded-full'>Back to menu</button>
      </div>
    </div>
  )
}

export default Success
