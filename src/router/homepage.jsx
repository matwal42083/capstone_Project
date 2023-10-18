            // this is Home.jsx file its path is ./src/router/Home.jsx
            import { useState } from 'react';

            const Homepage = () => {   
            const [count, setCount] = useState(0)
            
            const increment = () => {
                setCount(count + 1);
              };
            
            
            const decrement = () => {
                setCount(count - 1);
              };
    return (
     <div className="Homepage">
       <div className='HomeHeaderContainer'>
        <h1>Home page</h1>
       </div>
        <div className="btn_display">
         <i className="material-icons" style={{ fontSize: '30px' }}>shopping_cart</i>
          <i className="fa fa-shopping-cart" style={{ fontSize: '30px' }}></i>
         </div>
        <div className="pageDisplayContainer">
        <p>Welcome, To Jacks Ice cream truck app. 
          Where you the customer is always valued. Thats
          why we build our app to change the ways of Ice cream 
          trucks. Thats right, change the way ice cream trucks operate today.
          Ice creams truck and their business ethnic are just way too old and 
          way too creepy too, If you think about. Adult in van = Ice cream attracktion with 
          kiddie luring mucic and/or sounds. Which kidnipper tried back in the day.
          So because of that and the countless times as a child, trying to caught the 
          Ice cream and miss it too, which result in a ice creamless child and a lost of 
          poteinal business earnings caused in a result of missing a ice cream truck and 
          it has happened a lot. I know too people, that say the same thing to. Ice cream 
          truck business is a unpredictable business, because for the fact that the 
          business itself has too re-lie on the kiddie music that they play. The business 
          is literally relieing on that, and if that child or adult heres the truck. Well, not anymore
          with this app. where you can order your ice cream and have it delivered straight to your
          door step.
         </p>
        </div>
       <div className="countDisplay">
      <h1 className='count'>{count}</h1>
        <button onClick = {increment}>Add one</button>
        <button onClick = {decrement}>minus one</button>
        <button onClick={() => setCount((count) => count + 1)}>
         count 
        </button>
       </div>
      </div> 
   );
}


export default Homepage;