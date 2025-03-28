import url from "./url.js";
 
  async function getData () {
     try{
         const nameDisney = await fetch(url);
         if(!nameDisney.ok) {
            throw new error("Lo siento...", nameDisney.status);
         }
         const transformData = await nameDisney.json();
         return transformData.data
 
     } catch(error){
         console.log(error.message)
     }
 }
 
 export default getData;