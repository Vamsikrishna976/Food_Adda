import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MENU_API } from "./constants";

const useResMenu = (resId) => {
  // Implementation for fetching restaurant menu data
  const [menuData, setMenuData] = useState(null);
  useEffect(() => { 
    fetchMenu();
  },[]);

  const fetchMenu =async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    // const menuInfo = jsonData.data.cards.find((x) => x?.card?.card?.info)?.card?.card?.info;
    setMenuData(jsonData);

  }
  return menuData;
};


export default useResMenu;