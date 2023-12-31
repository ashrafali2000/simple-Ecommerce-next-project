import { useRef,useState } from "react"
import Link from "next/link";
import myLogo from "../../public/LogoProducts.png"
import Image from "next/image";
export default function SignUp() {
  const nameRef =  useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const urlRef = useRef();
  const [check, setCheck] = useState(true);
  const [check1, setCheck1] = useState(false);

 const submitHandler = (event) => {
  event.preventDefault();
const name = nameRef.current.value;
const email = emailRef.current.value;
const password = passwordRef.current.value;
const imgUrl = urlRef.current.value;
console.log(name,email,password)

const newProduct = JSON.stringify({name,email, password, imgUrl });

// POST method
fetch("/api/signup/", {
  method: "POST",
  body: newProduct,
  headers: {
    "Content-Type": "application/json",
  },
})
.then((res) => res.json())
.then((json) => console.log(json));

// Get Data

fetch('/api/signup')
.then(res => res.json())
.then(json => {
const users =   json.userId;
let val = false;
for(let a = 0; a < users.length; a++) {
  if( users[a].email === email && users.length >= 0){
  val = true;
  break;
}
}
if(val){
setCheck(false);
setCheck1(true);
}
else{
setCheck(false);
}

})

}

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-10 w-auto"
              src={myLogo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    ref={nameRef}
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    ref={emailRef}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    ref={passwordRef}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Image Url
                </label>
                <div className="mt-2">
                  <input
                    id="url"
                    name="url"
                    ref={urlRef}
                    type="url"
                    autoComplete="url"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

  
              <div>
              {check  ?  <p>Complete the above blanks</p> : check1 ? <p style={{color: "#f00"}}>This Account already exist</p> : <p style={{color: "#10781a", fontWeight: 500}}>Account created successfully</p>}
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Account
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/signIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }