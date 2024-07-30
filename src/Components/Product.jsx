import { useDispatch } from "react-redux"
import { addItemToCart, calculateTotalPrice } from "../redux/reducer/cart"
import { toast ,Toaster } from "react-hot-toast"

function Product({ items }) {

    const dispatch = useDispatch()

    const handleCartItem = () => {
        dispatch(addItemToCart(items))
        dispatch(calculateTotalPrice())

        toast.success("Successfully Item Add" , {
            position: "top-center"
        })
    }


    return <div id="box" className=" w-[150px] h-[220px] sm:h-[490px] sm:w-[300px] mt-32 m-3 border-2 border-black p-2">
        <img className=" w-[120px] h-[120px] sm:w-[300px] sm:h-[300px]" src={items.image} alt="" />
        <div className="flex justify-between font-bold mt-2">
            <h1 className="text-[8px] sm:text-[18px]">{items.title}  </h1>
            <h1 className="">{items.category.name}  </h1>
        </div>
        <div id="box" className="flex justify-between sm:mt-6">
            <h1>${items.price}   </h1>
            <i onClick={handleCartItem} id="cartBtn" class="fa-solid fa-circle-plus text-2xl sm:block hidden"></i>
        </div>
        <Toaster/>
    </div>
    
   
}

export default Product