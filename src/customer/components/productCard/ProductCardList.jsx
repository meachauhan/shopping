import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard.jsx";
import CategoryRibbon from "../Ribbon/CategoryRibbon.jsx";
const product = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brand: "Product Brand",
      description: "Product Description"
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand: "Product Brand",
        description: "Product Description"
      },
      {
        id: 3,
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand: "Product Brand",
        description: "Product Description"
      },
      {
        id: 4,
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand: "Product Brand",
        description: "Product Description"
      },
      {
        id: 5,
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand: "Product Brand",
        description: "Product Description"
      },
      {
        id: 6,
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand: "Product Brand",
        description: "Product Description"
      },
      {
        id: 7,
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        brand: "Product Brand",
        description: "Product Description"
      },
    
    
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const ProductCardList=(props)=>{
    return(
      <>
        <CategoryRibbon category={props.category}/>
        <Carousel responsive={responsive} >
        {props.product.map(product=>{
            return <ProductCard product={product} key={product.id}/>
        })}
        </Carousel>
        </>
       
    )
}

export default ProductCardList;