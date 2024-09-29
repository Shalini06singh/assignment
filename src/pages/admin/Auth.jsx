import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryStart } from '../../redux/action/category.action'

export default function Auth() {
  let categories = useSelector(state => state.category.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryStart());    
  }, [categories.length])
  
  return (
    <div className='container mb-4'>
      <div className='row'>
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9">
          <Outlet />
        </div>
      </div>

    </div>
  )
}
