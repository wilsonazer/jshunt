import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import { api } from '../../services/api'

 export default class Main extends Component{
    state = {
             products:[],
             productInfo: {},
             page: 1
            }      
     
    componentWillMount(){
       this.load_products()
    } 

    load_products = async (page= 1)=>{
        const products = await api.get(`/products?page=${page}`)

        const { docs, ...productInfo } = products.data

        this.setState( { products: docs, productInfo, page } )
    }

    nextPage = () => {
        const { page , productInfo } = this.state
        
        if( page === productInfo.pages ) return

        const pageNext = page + 1

        this.load_products(pageNext)

    }

    prevPage = () => {
        const { page, productInfo } = this.state

        if(page === 1) return

        const pagePrev = page - 1

        this.load_products( pagePrev )

    }

    render(){
        const products =  this.state.products 
        return(
            <div className='product_list'>
                <h1>Produtos: { this.state.products.length }</h1>

            {  products.map( prod => (
                <article key={ prod._id }>
                    <h2> { prod.title } </h2>
                    <p> { prod.description } </p>
                    <Link to={`/products/${prod._id}` }>Detalhes</Link>
                </article>        
                    ))
            }
            <div className='paginator'>
              <button  onClick={ this.prevPage } >Anterior</button>
              <button  onClick={ this.nextPage } >Próxima</button>
            </div>
            </div>
                
        )
    }
 }
