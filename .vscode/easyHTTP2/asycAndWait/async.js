async function hello(){
  const promise = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('Hello'),1000);
  })
  const error = true;
  if(!error){
    const res = await promise;
    return res;
  }
  else{
    await Promise.reject(new Error('Something went wrong bro!'));
  }
}
hello()
.then(res => console.log(res))
.catch(err => console.error(err))

async function getUsers(url){
  // await response for the fetch call.
  const response = await fetch(url);

  // Only proceed once its resolved.
  const data = await response.json();

  //Only proceed once the second promise is resolved.
  return data;
}

getUsers('http://jsonplaceholder.typicode.com/users')
.then(users => console.log(users));