import FeaturedIn from "@/components/home/FeatuedIn"
import Intro from "@/components/home/Intro"
import Products from "@/components/home/products/Products"
import Ready from "@/components/home/Ready"
import Stats from "@/components/general/Stats"
import WhyUs from "@/components/general/WhyUs"

export default function home(){
  return(
    <>
    <Intro/>
    <FeaturedIn/>
    <Products/>
    <Stats/>
    <WhyUs/>
    <Ready/>
    </>
  )
}