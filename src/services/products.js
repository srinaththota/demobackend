const arr=[
    {productId:'1001',name:'Cooking Oil',price:'10',image:''},
    {productId:'1002',name:'Hair Oil',price:'30',image:''},
    {productId:'1003',name:'Face Cream',price:'22',image:''},
    {productId:'1004',name:'Soap',price:'8',image:''},
    {productId:'1005',name:'Shampoo',price:'23',image:''},
    {productId:'1006',name:'Perfume',price:'13',image:''},
]

  exports.ProductsList = async () => {
    try {
        const result = {status: false};
        //considering fetch products from db i am using result status 
        if(arr.length >= 1){
            result.status=true;
            result.products=arr;
        }else{
            result.message="No products available"
        }
      return result;
    }
    catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
  