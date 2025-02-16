import FeaturedIn from "@/components/home/FeatuedIn"
import Intro from "@/components/home/Intro"
import Products from "@/components/home/products/Products"
import Ready from "@/components/home/Ready"
import Stats from "@/components/home/Stats"
import WhyUs from "@/components/home/WhyUs"

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