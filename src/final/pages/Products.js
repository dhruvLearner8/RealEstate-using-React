
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import products from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';



const Products = () => {
  return (
    
        <section className='section'>
          
      <div className='products '>
      
        {products.map((product) => {
          return (
            <article key={product.id}>
              {/* <div class="card container"> */}
              <img src={product.imgURL} alt={product.name} />
              
              <h5>{product.name}</h5>
              
              <p>{product.desc}</p>
              <Link to={`/products/${product.id}`}>more info</Link>
              {/* </div> */}
            </article>
          );
        })}
        
      </div>
      
      </section>
      
      
    
  );
};

export default Products;
