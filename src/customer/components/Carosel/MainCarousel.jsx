import { Carousel } from "@material-tailwind/react";

export function MainCarousel() {
    return (
      <Carousel className="max-h-96 overflow-y-hidden z-0 text-black" transition={{ duration: 2 }}
       
      >
       
        <img
          src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 1"
          className=" w-full max-h-96 object-fill "
        />
       <img
        src="https://images.pexels.com/photos/16274914/pexels-photo-16274914/free-photo-of-silver-ring-in-a-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image 2"
        className=" w-full max-h-96 object-fill  "
      />
      <img
        src="https://images.pexels.com/photos/3605015/pexels-photo-3605015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=450&dpr=1"
        alt="image 3"
        className="w-full max-h-96 object-fill "
      />
        
        
    </Carousel>
    );
  }