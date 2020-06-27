import React from 'react'

const ProductList = ({brand, description, price, image}) =>  {

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="col-md-4">
      <div className="card animated fadeInUp">
        
        <img src={require('./../assets/no-image.png')}  alt={brand} className="card-img-top" width="100"/>
        <div className="card-body">
          <h1>{brand}</h1><h3>{description}</h3>
          <h4>{formatter.format(price).replace(/\D00$/, '')} <span className="badge badge-danger">50%</span></h4>
          <del>{formatter.format(price*2).replace(/\D00$/, '')}</del>
        </div>
      </div>
    </div>
  )
}

export default ProductList