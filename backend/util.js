const hasPalindrome = (brand, description) => {

  let lowBrand = brand.toLowerCase(),
      lowDescription = description.toLowerCase()

  let x = lowBrand.split(" "), 
      y = lowDescription.split(" "), 
      chain = x.concat(y)

  let reverseStr1 = lowBrand.split('').reverse().join(''),
      reverseStr2 = lowDescription.split('').reverse().join('')

  let xx = reverseStr1.split(" "), 
      yy = reverseStr2.split(" "),
      chain2 = xx.concat(yy)

  const found = chain.filter(element => chain2.includes(element));

  if (found.length >= 1){
    return true;
  }

  return false;
}

const fiftyPercentDiscount = (products) => {

  if(!Array.isArray(products)){
    products = [products]
  }

  for (var i = 0; i < products.length; i++) {
    if ( hasPalindrome(products[i].brand, products[i].description) ){
      products[i].price = Math.round(products[i].price / 2)
    } else {
      products.splice(i, 1)
    }
  }
  
  return products;
}

module.exports = {
  fiftyPercentDiscount
}