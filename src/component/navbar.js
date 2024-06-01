import React,{useState} from "react";
import "./navbar.css";
import logo from "../logoamexiq.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CoffeeBeans from '../CoffeeBeans.jpeg'
import CoffeePowder from '../CoffeePowder.webp'
import ContainerCoffee from '../ContainerCoffee.webp'
import Roastary from '../Roastary.jpg'
import Machine from '../machine.jpeg'
import Asscoss from '../Asscoss.jpeg'
import { Link } from "react-router-dom";


export default function Navbar() {
    const [isDropDownOpen,setIsDropDownOpen]=useState(false)

    const toogleOpen=()=>{
        setIsDropDownOpen(!isDropDownOpen)
    }

    const List=[
        {
            id:1,
            image:CoffeeBeans,
            Name:'Coffee beans',
            title:'Each bean tells a story of origin,flavor profile,and meticulous craftsmanship'
        },
        {
            id:2,
            image:CoffeePowder,
            Name:'Coffee powder',
            title:'Each bean tells a story of origin,flavor profile,and meticulous craftsmanship'
        },
        {
            id:3,
            image:ContainerCoffee,
            Name:'Container for coffee',
            title:'Each bean tells a story of origin,flavor profile,and meticulous craftsmanship'
        },
        {
            id:4,
            image:Roastary,
            Name:'Our roastery',
            title:'Each bean tells a story of origin,flavor profile,and meticulous craftsmanship'
        },
        {
            id:5,
            image:Machine,
            Name:'Coffee machines',
            title:'Each bean tells a story of origin,flavor profile,and meticulous craftsmanship'
        },
        {
            id:6,
            image:Asscoss,
            Name:'Accessories',
            title:'Each bean tells a story of origin,flavor profile,and meticulous craftsmanship'
        },
    ]
  return (
    <div className="nav-container">
      <div className="nav-image">
        <img src={logo} alt="NavBarImage" />
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <span onClick={toogleOpen}>Shop <ArrowDropDownRoundedIcon/></span>
            <ul className={isDropDownOpen ? "drop-down open":"drop-down"}>
                <div className="drop-menu-list">
             {List.map((items,index)=>(
                 <li key={index} className="list-data">
                
                <img src={items.image} alt="" />
                <div className="drop-list">
                <h6>{items.Name}</h6>
                 <p>{items.title.length>75?items.title.slice(0,75)+"...":items.title}</p>
                 <a href="/link">See products</a>
                </div>
               
               </li>
             ))}
               </div>
             
            </ul>
          </li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="nav-search">
        <SearchIcon />
        <input placeholder="Find your fav caffee" />
      </div>

      <div className="nav-icon">
        <PersonIcon />
        <FavoriteBorderIcon />
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
}
