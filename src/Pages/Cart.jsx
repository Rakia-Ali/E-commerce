import { useSelector, useDispatch } from "react-redux"
//import Header from "../Components/Header"
// import { addItemToCart } from "../redux/reducer/cart"
import Price from "../Components/Price"
import { removeItemFromCart, calculateTotalPrice } from '../redux/reducer/cart'
import {toast ,Toaster } from "react-hot-toast"

function Cart() {

    const dispatch = useDispatch()

    const allItem = useSelector((state) => state.cart.items)

    const handleRemove = (data) => {
        dispatch(removeItemFromCart(data))
        dispatch(calculateTotalPrice())

        toast.success("Successfully Item is Removed" , {
            position: "top-center"
        })
    }

    return <div className="">
        {/* <Header /> */}

        <div className="justify-center ">
            <div className="mr-32 mb-20">
                {
                    allItem.length>0?    allItem.map((items) => {
                        return <div className="sm:w-[500px] w-[350px] flex justify-between gap-8 mt-45  mr-2  sm:h-[180px]  border-2 border-black px-4 py-5 m-4   ">
                            <img className=" h-[130px] rounded w-[150px]" src={items.image} alt="" />
                            <div>

                                <h1 className=" text-[18px] font-semibold">{items.title}  </h1>
                                <h1 className=" text-[18px] font-semibold">{items.price}  </h1>
                                <h1 className="">{items.category.name}  </h1>
                            </div>
                            <i onClick={() => handleRemove(items)} class="fa-solid fa-x text-3xl m-4"></i>
                        </div>

                    })
                    :
                    <p className="text-5xl m-20 font-bold text-blue-600">The Cart is Empty</p>
                }
            </div>
            {allItem.length > 0 && <Price/>}
        </div>
<Toaster/>
    </div>
}

export default Cart;