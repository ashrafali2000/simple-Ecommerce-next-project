import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "database","products.json" );
const filePathForSingleProduct = path.join(process.cwd(), "database", "singleProduct.json");
const filePathForSignUP = path.join(process.cwd(),"database", "account.json");

export function getAllProducs() {
   const data = fs.readFileSync(filePath);
   return JSON.parse(data);
}

export function getSingleProducsById(id) {
   const {products} = getAllProducs();
  const  productDetails = products.find(item => item.id === id);
   return productDetails;
}

export function addProduct(title,description,price, discountPercentage, rating,stock,brand,category,images) {
    const { products } = getAllProducs();
    products.push({
      id: products.length + 1,
      title,price,description,discountPercentage,rating,stock,brand,category,images
    });
    fs.writeFileSync(filePath, JSON.stringify({ products }));
  
    return products;
  }

// for comment
//   export function getCommentById(id) {
//    const {products} = getAllProducs();
//   const  productDetails = products.find(item => item.id === id);
//    return productDetails;
// }


// Comment by id
  export function getCommentById(id,comment) {
   let {products} = getAllProducs();
  const  productDetails = products.find(item => item.id === Number(id));
    productDetails.comment = comment;
    console.log(productDetails)
    products.push(productDetails);


// important
 products = products.filter(
   (obj, index) =>
   products.findIndex((item) => item.id === obj.id) === index
 );
  fs.writeFileSync(filePath, JSON.stringify({products}));
   return products;
}



// every product Details
export function getCommentBySingleId(id) {
  let {products} = getAllProducs();
 const  productDetails = products.find(item => item.id === Number(id));
// important
 fs.writeFileSync(filePathForSingleProduct, JSON.stringify({productDetails}));
  return productDetails;
}


// sign Up
export function getAllAccounts() {
  const data = fs.readFileSync(filePathForSignUP);
  return JSON.parse(data);
}



export function signUp(name,email,password) {
const {userId} = getAllAccounts();

// yeha sy 
// userId.filter(user.name !== name);
// if(userId.name === name) {
//   return ("This user Already exist");
// }


userId.push({
  // id: userId.length + 1,
name,email,password
});
fs.writeFileSync(filePathForSignUP, JSON.stringify({ userId }));
return userId;
}