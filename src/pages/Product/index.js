import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'
import './style.css'

const Product = ({ match }) =>{
    const id = match.params.id
    const [prod, setProduct] = useState({})

   useEffect(()=>{
      api.get(`/products/${id}`).then( res =>{
           const product =  res.data
           setProduct( product )

       }).catch( err=>{
           alert(err )
       })

        
   }, [id])
    return(
        <div className='productInfo'>
            <h1> { prod.title }</h1>
            <p> { prod.description }</p>
            <a href={ prod.url } >{ prod.url }</a>
        </div>
       
    )

}


export default Product
