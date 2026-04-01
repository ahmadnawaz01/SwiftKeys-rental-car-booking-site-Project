import React from 'react'

const Loader = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-b-blue-500"></div>
    </div>
  )
}

export default Loader