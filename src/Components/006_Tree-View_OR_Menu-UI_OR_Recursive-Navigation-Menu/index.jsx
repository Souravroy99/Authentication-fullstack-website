import { useState, useEffect } from "react";
import MenuList from "./menu-list";


export default function TreeView({ menus = [] }) {
  return (
    <div className="trew-view-container">
      <MenuList list={menus} />
    </div>
  );
}
