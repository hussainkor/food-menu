import logo from './logo.svg';
import { useState } from 'react';
import { specialMenu } from './data';
import Category from './Category';

function App() {
  const [menus, setMenus] = useState(specialMenu);
  const [categ, setCateg] = useState('');
  const [isActive, setIsActive] = useState(false)

  const handleCategory = (name) => {
    setCateg(name);
    setIsActive(true)
    setMenus(specialMenu.filter((menu) => menu.category === name))
  }
  const allCategory = () => {
    setMenus(specialMenu);
    setIsActive(false);
  }

  // const handleActiveClass = (menu) => {
  //   setCateg(menu)
  // }

  return (
    <div className='main-page'>
      <div className='header'></div>
      <h1>Our Menu</h1>
      <Category
        handleCategory={handleCategory}
        allCategory={allCategory}
        categ={categ}
        isActive={isActive}
      />
      <div className='menu-list'>
        {menus.map((menu) => <div className='menu-box' key={menu.id}>
          <img src={menu.image} alt={menu.title} />
          <h2>{menu.title}</h2>
          <p>Rs. {menu.price}</p>
        </div>)}
      </div>

    </div>
  );
}

export default App;
