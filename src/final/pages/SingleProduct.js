import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { imgURL, name , desc} = product;
  return (
    <section className='section product'>
      <img src={imgURL} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
