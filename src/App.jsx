import { useState } from 'react'
import Navigation from './customer/components/navigation/Navigation.jsx'
import './App.css'
import { MainCarousel } from './customer/components/Carosel/MainCarousel.jsx'
import ProductCardList from './customer/components/productCard/ProductCardList.jsx'
import CategoryRibbon from './customer/components/Ribbon/CategoryRibbon.jsx'
import Footer from './customer/components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)
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


  return (
    <div>
      <Navigation />
      <MainCarousel  />
     
      <ProductCardList  product={product} category={"Men's T-shirt"} />
      <ProductCardList  product={product} category={"Men's Shirt"} />
      <ProductCardList  product={product} category={"Women's Saree"} />
      

      <Footer />
    </div>
  )
}

export default App
