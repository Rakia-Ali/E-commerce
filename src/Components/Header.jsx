import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header({search}){

    const numberOfItem = useSelector((state) => state.cart.items)

    return<div className=" bg-gray-800 fixed w-full text-white flex justify-between sm:px-10 px-4  py-5">
        <h1 className="text-3xl">eSuuq</h1>
        <ul className=" hidden sm:flex gap-10 text-2xl">
            <li>Home</li>
            <li>About</li>
            
        </ul>

<form action="">

{/* si formka wixii lagu qoro u raadiyo 'onChange' u wac */}

    <input onChange={search} className="sm:w-[300px] rounded text-black sm:h-[30px] p-2   "  type="text" placeholder="Search Product"   />
    
    <i class="fa-solid fa-magnifying-glass text-primaryColor absolute right-[75px] top-8 sm:top-7 sm:right-[265px]"> </i>
    </form>
<Link to="/cart">
        <i class="fa-solid fa-cart-shopping text-2xl ">   {numberOfItem.length}</i>
        </Link>
    </div>

}

export default Header