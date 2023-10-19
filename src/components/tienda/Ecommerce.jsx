import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import fototaza from './imgecommerce/producto1.jpg';
import './ecommerce.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const formatPrice = (price) => {
    return `$${Math.round(price)}`;
  };

  const products = [
    { id: 1, name: 'Taza', price: 5000 },
    { id: 2, name: 'Taza2', price: 5000 },
    { id: 3, name: 'Taza3', price: 5000 },
    { id: 4, name: 'Taza4', price: 5000 },
    { id: 5, name: 'Taza5', price: 5000 },
    { id: 6, name: 'Taza6', price: 5000 },
    { id: 7, name: 'Taza7', price: 5000 },
    { id: 8, name: 'Taza8', price: 5000 },
    { id: 9, name: 'Taza9', price: 5000 },
    { id: 10, name: 'Taza10', price: 5000 },
    { id: 11, name: 'Taza11', price: 5000 },
    { id: 12, name: 'Taza12', price: 5000 },
  ];

  return (
    <>
      <Header />

      <Container>
        <div className='d-flex flex-wrap justify-content-between'>
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: '18rem', marginBottom: '20px' }}
            >
              <Card.Img variant='top' src={fototaza} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{formatPrice(product.price)}</Card.Text>
                <Button
                  variant='primary'
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ProductList;
