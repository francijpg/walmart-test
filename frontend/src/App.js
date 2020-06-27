import React, { Fragment, useState, useEffect } from 'react';
import ProductList from './components/ProductList';

function App() {

  const API_LOCAL = `http://localhost:5000/api/products`;
  let API = '';

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('saas');
  
  useEffect(() => {
    getProducts();
  }, [query]);

  const getProducts = async () => {
    
    try {

      Number.isInteger(parseInt(query)) 
      ? API = `${API_LOCAL}/${query}`
      : API = `${API_LOCAL}?search=${query}`

      const response = await fetch(API);
      const data = await response.json();
      setProducts(data);

    } catch (error) { 
      console.log (error.response) 
    }
    
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <Fragment>
      <nav className="navbar bg-primary text-white text-center">
        {/* <a className="navbar-brand text-white col-md-1" href="/">
          Walmart | palindrome finder
        </a> */}
        <div className="col-md-4 offset-md-4 p-2">
          <div className="row">
      
            <form onSubmit={getSearch}>
              <input
                type="text"
                className="form-control"
                size="100"
                placeholder="¿Qué estás buscando?"
                value={search}
                onChange={updateSearch}
                autoFocus
                required
              />
            </form>
          </div>
        </div>
        
      </nav>
      <div className="container">
      <label className="mt-2">Resultados para: <label className="font-weight-bold">{query}</label></label>
        <div className="row pt-2">
        {/* {Object.keys(products).length <= 1 ? (
          <h2>sin datos</h2>)
          : (
            products.map(product => (
            <ProductList
              key={product.id}
              brand={product.brand}
              description={product.description}
              image={product.image.data}
              price={product.price}
            />
          ))
          )
        }  */}        
          {
          products.map(product => (
            <ProductList
              key={product.id}
              brand={product.brand}
              description={product.description}
              image={product.image.data}
              price={product.price}
            />
          ))
          }
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;