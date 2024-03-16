import React from 'react'
import { TailSpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#7E22CE"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loader
