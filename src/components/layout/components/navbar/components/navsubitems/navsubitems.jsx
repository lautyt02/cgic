import { Link, Links } from "react-router-dom"
const NavSubItems = ({ items }) => {
    let i = 0
    return <ul>
        {items && items.map(item => {
            i++
            return <li key={item.name + i}>
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