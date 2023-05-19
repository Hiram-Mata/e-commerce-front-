import React from 'react'

const PrivateRoute = ({children}) => {
  return (
    <div className='p-0 m-0'>
        {children}
    </div>
  )
}

export default PrivateRoute