import React from 'react'
import ProductDetail from '../Pages/ProductDetail'
import { Navigate } from 'react-router'

const PrivateRoute = ({authentication}) => {
  return authentication ==
  true?
  <ProductDetail/>
  :
  <Navigate to="/login" />
}

export default PrivateRoute