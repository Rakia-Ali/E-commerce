import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"
import { ClipLoader } from "react-spinners"
import Header from "./Header"


function ProductList(){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchItem, setSearchItem] = useState("")

const handleSearch = (event) => {
    setSearchItem(event.target.value)
}


    const getAllProduct = () => {
        setLoading(true)
        axios.get( "https://fakestoreapi.com/products").then( (Response) => {
               setData(Response.data)
               setLoading(false)
        }).catch( (error) => {
            console.log(error)
         })
    }

    useEffect( () =>
    {
        getAllProduct()
    },[])

    return <div>
<Header search={handleSearch} />
   { loading === true ? <ClipLoader className="my-44 ml-[500px]" loading={loading} />    : <div className="grid grid-cols-2 sm:grid-cols-[300px_300px_300px] justify-center sm:gap-4">
{
 data.filter((products) =>{

    return searchItem.toLowerCase() == "" ? products :
    products.title.toLowerCase().includes( searchItem.toLowerCase () )


 } ).map( (item) =>
 {
    return <Product items={item} />
 })
}
   

    </div>
}
    </div>
}

export default ProductList