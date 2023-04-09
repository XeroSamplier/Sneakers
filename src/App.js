import React, { useEffect,useState } from 'react';
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const itemlist = [
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 62999,
    "imageUrl": "/img/sneakers/1.jpg",
    "id": 1
  },
  {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": 59999,
    "imageUrl": "/img/sneakers/2.jpg",
    "id": 2
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 33499,
    "imageUrl": "/img/sneakers/3.jpg",
    "id": 3
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 33499,
    "imageUrl": "/img/sneakers/4.jpg",
    "id": 4
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie 7",
    "price": 29999,
    "imageUrl": "/img/sneakers/5.jpg",
    "id": 5
  },
  {
    "title": "Мужские Кроссовки Nike LeBron XVIII",
    "price": 67499,
    "imageUrl": "/img/sneakers/6.jpg",
    "id": 6
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 42299,
    "imageUrl": "/img/sneakers/7.jpg",
    "id": 7
  },
  {
    "title": "Мужские Кроссовки Under Armour Curry 8",
    "price": 54999,
    "imageUrl": "/img/sneakers/8.jpg",
    "id": 8
  },
  {
    "title": "Мужские Кроссовки Jordan Air Jordan 11",
    "price": 49999,
    "imageUrl": "/img/sneakers/9.jpg",
    "id": 9
  },
  {
    "title": "Мужские Кроссовки Nike Lebron XVIII Low",
    "price": 49999,
    "imageUrl": "/img/sneakers/10.jpg",
    "id": 10
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
    "price": 37999,
    "imageUrl": "/img/sneakers/11.jpg",
    "id": 11
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 42999,
    "imageUrl": "/img/sneakers/1.jpg",
    "id": 12
  }
]

function App() {
  const [items] = useState(itemlist);
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);



  useEffect(() => {
    axios.get('https://6410173be1212d9cc9291c00.mockapi.io/Cart')
        .then((res)=> {
        setCartItems(res.data);
    });
    
  }, []);

  const onChangeSearchInput = (event) => setSearchValue(event.target.value);

  const onAddToCart = (obj) => {
    axios.post('https://6410173be1212d9cc9291c00.mockapi.io/Cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const deleteCartItem = (id) => {
    axios.delete(`https://6410173be1212d9cc9291c00.mockapi.io/Cart/${id}`);
    setCartItems(cartItems.filter((val) => val.id !== id))
  };

  const onClickLike = (obj) => {
    axios.post('https://6410173be1212d9cc9291c00.mockapi.io/favourites', obj);
    setLikedItems((prev) => [...prev, obj])
  };

  const unliked = (id) => {
    axios.delete(`https://6410173be1212d9cc9291c00.mockapi.io/favourites/${id}`);
    setLikedItems(likedItems.filter((val) => val.id !== id ))
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer 
          items={cartItems} 
          onClose={() => setCartOpened(false)} 
          onDelete={deleteCartItem}
          sum={cartItems.reduce((acc,item) => acc +=item.price, 0)}
         />
      )}
      <Header onClickCart={() => setCartOpened(true)} sum={cartItems.reduce((acc,item) => acc +=item.price, 0)}/>
      <div className="content p-40">
        <div>
        <img className='banner' width={900} height={300} src="/img/banner.png" alt = "Banner"></img>
        </div>
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу : "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/Loop.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="Clear"
              ></img>
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              key={item.id}
              cardInfo={item}
              unliked={unliked}
              onFavourite={onClickLike}
              onPlus={onAddToCart}
              onDelete={deleteCartItem}
              isAdd={cartItems.some((val) => val.id === item.id)}
              liked={likedItems.some((obj) => obj.id === item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
