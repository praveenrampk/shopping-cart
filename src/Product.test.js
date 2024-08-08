import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Main from './component/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Cart from './component/cart';
import { BrowserRouter } from 'react-router-dom';

describe('product component', () => {
  it('landing on  product page', () => {
    render(<Main />);
    userEvent.click(screen.getByText('Product'));
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });

  it('mocking Card component', () => {
    const data = {
      id: 1,
      image:
        'https://i.pinimg.com/236x/fe/5d/dc/fe5ddc2d61c5f871cb10d39b08f293f0.jpg',
      title: 'logo',
      rate: 3.2,
      price: 99,
      category: 'png',
    };
    const card = jest.fn((data) => {
      return (
        <div id={data.id}>
          <img src={data.image} alt={data.title} />
          <section>
            <h3>{data.title}</h3>
            <div>
              <p>
                {data.rate}
                <FontAwesomeIcon icon={faStar} />
                <span>{data.category}</span>
              </p>
              <p>$ {data.price}</p>
            </div>
          </section>
        </div>
      );
    });
    render(card(data));
    expect(screen.getByText(/logo/i)).toBeInTheDocument();
  });
});

describe('cart component delete operation work correctly', () => {
  const data = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/236x/fe/5d/dc/fe5ddc2d61c5f871cb10d39b08f293f0.jpg',
      title: 'logo',
      quantity: 1,
      price: 99,
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/236x/fe/5d/dc/fe5ddc2d61c5f871cb10d39b08f293f0.jpg',
      title: 'luffy',
      quantity: 1,
      price: 50,
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/236x/fe/5d/dc/fe5ddc2d61c5f871cb10d39b08f293f0.jpg',
      title: 'zoro',
      quantity: 1,
      price: 40,
    },
  ];
  render(
    <BrowserRouter>
      <Cart data={data} disable={true} />
    </BrowserRouter>
  );
  expect(screen.getByText(/logo/i)).toBeInTheDocument();
});
