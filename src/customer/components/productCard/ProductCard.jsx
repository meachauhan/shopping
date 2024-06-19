
 const ProductCard = (props)=>{

    return (
        <div className="cursor-pointer flex  flex-col item-center bg-white overflow-hidden w-[15rem] m-3 shadow-sm border-none shadow-black">
            <div className=" w-[10rem]  h-[13rem] self-center">
                <img className="object-cover object-top h-full w-full"  src={props.product.image}/>
            </div>
            <div className=" p-3">
                <h3 className="text-lg font-bold text-black"> {props.product.brand}</h3>
                <p className="text-gray-500 text-sm"> {props.product.description} </p>
            </div>

        </div>
    )
 }

 export default ProductCard;