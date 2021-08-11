const arr=[{username:'srinath',password:'srinath'}]
async function login(username, password) {
    try {
            const result = {status: false};
            console.log("username: ",username);
            const user=arr.find(obj=>obj.username===username && obj.password===password)
            if(!user){
                result.message = 'Invalid email or username';
                return result;        
            }else{
                result.status=true;
                result.token='abcdefgh';
                result.uuid='123456789'
            }
     
      return result;
    }
    catch (err) {
      throw new Error(err);
    }
  }
  
  exports.userLogin = async ({username, password}) => {
    try {
        console.log("line number 25 ",username,password)
      const result = await login(username, password);
      return result;
    }
    catch (e) {
      console.log(e);
      throw new Error(e);
    }
  };
  