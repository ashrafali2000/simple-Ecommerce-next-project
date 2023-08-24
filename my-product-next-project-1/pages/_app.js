import '@/styles/globals.css'
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import mylogo from "../public/LogoProducts.png";
import Image from 'next/image';
import Link from 'next/link';
import linkedin from "../public/linkedin.png"
import twitter from "../public/twitter.png"
import github from "../public/github.png"
import { useState } from 'react';
import { Avatar, useStepContext } from "@mui/material"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App({ Component, pageProps }) {
  const [isLogin, setIsLogin] = useState(true)
  const [hideProducts, setHideProducts] = useState(false);
  const [userName , setUserName] = useState("");
  const [userImg, setUserImg] = useState("");
  const [logo, setLogo] = useState(true);
  
  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
   if(hideProducts){
     navigation.push( { name: 'Products', href: '/products', current: false },
    { name: 'Add Product', href: '/newProducts', current: false })
  }


 return <div> 
<div  className="sticky-top">


{/* Banner */}
<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <Link
          href="/signUp"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>




{/* Nav-bar */}
<Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className={`flex flex-shrink-0 items-center ${logo ?"logohome":"" }`}>
                  <Image
                    className="h-10 w-auto"
                    src={mylogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-m font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         
      {isLogin ? <div>
      <Link className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' href="/signIn">Sign in</Link> 
         <Link className='text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium' href="/signUp ">Create Account</Link>
        </div> : ""}

                {/* Profile dropdown */}
               { hideProducts && <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Avatar src={userImg} style={{
                width: 40,
                height: 40
            }} />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white disabled-class',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
               >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>


{/* pages */}
   <Component {...pageProps} hideProducts ={hideProducts} setHideProducts={setHideProducts} setUserName = {setUserName} userName = {userName} userImg ={userImg} setUserImg = {setUserImg} setIsLogin = {setIsLogin} setLogo={setLogo}/>

   {/* footer */}
  <div style={{
    backgroundColor:"#000",
    color:"#999",
    justifyContent:"center",
    paddingTop:25,

  }} >
    <div  style={{
    display: 'flex',
    justifyContent:"space-evenly",
    flexWrap: "wrap"
  }}>
   <div style={{width:300}}>
    <Image src={mylogo} width={140} height={50} alt='logo' style={{
        filter:" brightness(0) invert(1)"
    }}></Image>
    <p >The conccept of product is not selling and purchase but the main word is Quality.
    </p>
   </div>

   <div style={{
    display: 'flex',
    gap:50,
    flexWrap: 'wrap',
    alignItems:"center"
  }}>
   <div style={{
    display: 'flex',
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center"
  }}>
    <h2 className='heading'>Company</h2>
  <div><Link href={"/about"} className='footer-links'>About</Link></div>
  <div><Link href={"/contact"} className='footer-links'>Contact</Link></div>
  <div><Link href={"/information"} className='footer-links'>information</Link></div>
  <div><Link href={"/products"} className='footer-links'>Products</Link></div>
    
   </div>
   <div style={{
    display: 'flex',
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center"
  }}>
<h1 className='heading'>Help</h1>
  <div><Link href={"/about"} className='footer-links'>About</Link></div>
  <div><Link href={"/contact"} className='footer-links'>Contact</Link></div>
  <div><Link href={"/information"} className='footer-links'>information</Link></div>
  <div><Link href={"/products"} className='footer-links'>Products</Link></div>
   </div>
   <div style={{
    display: 'flex',
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center"
  }} >
   <h1 className='heading'>Products</h1>
  <div><Link href={"/about"} className='footer-links'>About</Link></div>
  <div><Link href={"/contact"} className='footer-links'>Contact</Link></div>
  <div><Link href={"/information"} className='footer-links'>information</Link></div>
  <div><Link href={"/products"} className='footer-links'>Products</Link></div>
  </div>

   </div>


    </div>

<div style={{
 display:"flex",
 justifyContent: "center",
 marginTop:30,
 paddingBottom:20
}}>
  <h2>Our Media:</h2>
    <div style={{
      display: 'flex',
      justifyContent:"space-evenly",
      alignItems:"center",
      width:200
    }} >
      
 <Link href="https://www.linkedin.com/in/ashraf-ali-21179a269"> <Image src={linkedin} alt='myimg' width={24} height={24} style={{
     filter:" brightness(0) invert(1)"
  }}></Image></Link>
 <Link href="https://github.com/Ashraf-ali-2000"> <Image src={github} alt='myimg' width={24} height={24} style={{
     filter:" brightness(0) invert(1)"
  }}></Image></Link>
  <Link href="https://twitter.com/Ashraf_khan_tw1"><Image src={twitter} alt='myimg' width={34} height={34} style={{
     filter:" brightness(0) invert(1)"
  }}></Image></Link>
</div>

    </div>
<hr></hr>
   <div style={{
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    padding:10
   }}><p>@ASHRA  2023 All rights reserverd </p></div> 

  </div>




  </div>
}
