import React from 'react'
import { Product,ProductContainer } from '../js/styleds'

const Products = () => {

    const products = [
        {name:"Chocolate Cake",category:"Cakes",date:"09.04.2018",color:"purple",state:"processed",img:"https://static.toiimg.com/thumb/53096885.cms?width=1200&height=900"},
        {name:"Cheesecake",category:"Cupcakes",date:"09.04.2018",color:"blue",state:"on hold",img:"https://www.cookingclassy.com/wp-content/uploads/2019/11/cheesecake-8.jpg"},
    ]

    return (
        <ProductContainer>
            {products.map((item,key) =>
              <Product stateColor={item.color}>
                    <div className="image">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="name">
                        <span>{item.name}</span>
                    </div>
                    <div className="category">
                        <span>{item.category}</span>
                    </div>
                    <div className="date">
                        <span>{item.date}</span>
                    </div>
                    <div className="state">
                        <span>
                            {item.state}
                        </span>
                    </div>
                    <input type="checkbox" name="checked" /> 
                     </Product>
            
              
            )}
        </ProductContainer>
    )
}

export default Products
