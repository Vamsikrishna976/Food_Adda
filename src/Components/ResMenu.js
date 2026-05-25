import React from 'react'
import { useEffect } from "react";
import Shimmer from './Shimmer';

const ResMenu = () => {
    const [resinfo, setResInfo] = React.useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9181997&lng=77.61852859999999&restaurantId=10582&catalog_qa=undefined&submitAction=ENTER"
                );
        const jsonData = await data.json();
        setResInfo(jsonData);
    };

  return
//  resInfo === null ? (
//     <Shimmer />
//   ) : 
(
    <div className='res-menu'>
        <h1>Restaurant Menu</h1>
        <h2>Menu</h2>
        <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Biryani</li>
            <li>Salad</li>
        </ul>
    </div>
  )
}

export default ResMenu