import {Link} from "react-router-dom";


const Header = () => {
    return (
      <>
       <div className="HeaderContainer">
        <div className="logo">
         <img src="https://i.ibb.co/BcKpqck/image.png" 
            alt="jacks ice cream truck logo with palm tree's">
            </img>
           </div>
         <div className="TitleHeadliner">
        <h1>Jacks Ice Cream</h1>
        </div> 
        </div> 
        <div className="navBar">
         <Link to={"/"}>Homepage</Link>
         <Link to={"/Menupage"}>Menupage</Link>
         <Link to={"/Orderpage"}>Orderpage</Link>
         <Link to={"/Trackpage"}>Trackpage</Link>
        </div> 
      </>
    );
}

export default Header;