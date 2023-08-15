import { useState, useEffect } from "react"
import Link from "next/link";
import Cards from "./cards/Cards";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/")
      .then((res) => res.json())
      .then((p) => setProducts(p.products));
      // console.log(p.products);
  }, []);

  return (
    <div>
 {/* Header section */}
 <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              New Prodcuts are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494"
                          alt="mobile"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://m.media-amazon.com/images/I/616AIB+F44L._AC_UF1000,1000_QL80_.jpg"
                          alt="perfume"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://beautypouch.pk/cdn/shop/products/Dove-Beauty-Cream-250-Ml.jpg?v=1667857751"
                          alt="cream"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"
                          alt="laptop"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://c.ndtvimg.com/2021-05/0pn54deo_masala-powder_625x300_21_May_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
                          alt="masala"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://cellmart.pk/wp-content/uploads/2022/10/ijagkapbvaug38guieria.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-36 overflow-hidden rounded-lg">
                        <img
                          src="https://www.alfatah.pk/cdn/shop/products/8961100503148_1024x1024.jpg?v=1683806856"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>




{/* All card rendering */}
<div className="allProducts-Container ">
  <div><Link href={"#"}  className="inline-block  rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">New Products</Link></div>
   <div className="allProducts">
     {products.map(product => <Cards key={product.id} img = {product.images[0]} title = {product.title} stock = {product.stock} price={product.price} myKey={product.id}/> )}
   </div>
   </div>
   {/* Logo Section */}

   <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
         <Link href={"https://www.apple.com/"}> <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://logos-world.net/wp-content/uploads/2022/01/iPhone-Symbol.png"
            alt="Transistor"
            width={158}
            height={48}
          /></Link>
        <Link href={"https://www.dell.com/en-pk"}> <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://i.pinimg.com/originals/d5/09/9f/d5099fbca1f14ba14c1891af52837730.png"
            alt="Reform"
            width={158}
            height={48}
          /></Link> 
         <Link href={"https://www.hp.com/us-en/home.html"} ><img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQc-EvgAXqq2f19V3UK1h_CafhMaAHfY7k_T-Hr95WBKds5HwxVk7-pzJjfxyAO_U-fc&usqp=CAU"
            alt="Tuple"
            width={158}
            height={48}
          /></Link> 
         <Link href={"https://foog.com/en"}>  <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://files-cdn.foggfiller.com/_1200x630_crop_center-center_82_none/Fogg-OG.jpg?mtime=1643674747"
            alt="SavvyCal"
            width={158}
            height={48}
          /></Link> 
       <Link href={"https://www.samsung.com/pk/"}>    <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://static.vecteezy.com/system/resources/previews/014/018/566/original/samsung-logo-on-transparent-background-free-vector.jpg"
            alt="Statamic"
            width={158}
            height={48}
          /></Link> 
        </div>
      </div>
    </div>
   {/* Testimonial Section */}
   <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    </div>
  )
}
