import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'
import './style.css'


export default function MenuItem({Item}) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }

    console.log(displayCurrentChildren)

    return <li>

        <div className="menu-list-item-container">
            <p>{Item.label}</p>
            {
                Item && Item.children
                ? <span onClick={()=>handleToggleChildren(Item.label)}>
                    {
                        displayCurrentChildren[Item.label] ? <FaMinus color="red" size="25px"/> : <FaPlus color="green" size="25px"/>
                    }
                </span>
                : null
            }

        </div>

        {
            Item && Item.children && displayCurrentChildren[Item.label] 
            ? <MenuList list={Item.children}/>
            : null
        }
    
    
    </li>
}