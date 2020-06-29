/**
 * @version 2.0
 * @author Jibril
 * @license OSU
 */

 class EasyHTTP2 {
   get (url){
     fetch(url)
     .then(res => res.json())
     .then(data => console.log(data))
     .catch(err => console.log(err))
   }
 }