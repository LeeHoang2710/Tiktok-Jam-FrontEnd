import React from 'react'


interface Props {
   onClick: () => void
}

const TellMore: React.FC<Props> = ({ onClick }) => {
   return (
      <div className='flex items-center justify-between px-2'>
         <div className='text-sm text-sky-400 font-bold'>
            Still not found your needs?
         </div>
         <button className='rounded-lg bg-sky-400 text-white px-2 py-1' onClick={onClick}>
            Tell us more!
         </button>
      </div>
   )
}

export default TellMore