import { useEffect, useState } from "react"
import { Link, Links } from "react-router-dom"
const NavSubItems = ({ items }) => {
    return <ul>
        {items && items.map((item,i) => {
            const key = item.name + i
            console.log(key)
            i++
            return <li key={key}>
                <Link to={item.route} >
                    <div className="">
                        <h6>{item.name}</h6>
                    </div>
                </Link>
            </li>
        })}
    </ul>


}
export { NavSubItems }