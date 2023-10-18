// this is useMenuItems.jsx file its path is ./src/hooks/useMenuItmes.jsx is a custom hook
// that is used in the Menu.jsx file, that maps over the menuItmes array and returns the a menu of the array
// menuData.jsx file its path is ./src/data/menuData.jsx is a array of objects that is used in the useMenuItmes.jsx file.

import React from "react";
import { useMenuItems } from "../data/menuData";
import OrderPage from "../router/orderpage";

function Menu () {
  const [menuItems, setMenuItems] = useState(useMenuItems);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);


  const handleOrderClick = (item) => {
    setOrders([...orders, item]);
    setTotal(total + item.price)
  };

  const toggleDescription = (id) => {
    setMenuItems((prevMenuItems) => {
      return prevMenuItems.map((menu) => {
        if (menu.id === id) {
          return { ...menu, showDescription: !menu.showDescription };
        }
        return menu;
      });
    });
  };

  return (
    <div id='container' style={{ height: '300px' }}>
      {menuItems.map((menu) => (
        <div key={menu.id} id='card'>
          <div className="MenuCard">
            <div className="MenuCardHeader">
              <h3>{menu.name}</h3>
            </div>
            <div className="ImageContainer">
              <img src={menu.image} alt={menu.name} />
            </div>
            <div>
              <p>${menu.price.toFixed(2)}</p>
              <button onClick={() => toggleDescription(menu.id)}>Description</button>
              <button onClick={() => handleOrderClick(menu)}>ADD</button>
            </div>
          </div>
        </div>
      ))}
      <OrderPage orderItems={orders} total={total}/> 
    </div>
  );
}

export default Menu;
