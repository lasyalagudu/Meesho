import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronics.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"

import WomenWestern from "./data/WomenWestern.js"


let inputSearchEl = document.querySelector(".inputSearch")
let recentInput = []
let formInputEl = document.getElementById("inputForm")
const listofRecentEl = document.querySelector(".listofRecent")
let listofRecentHTMLE1=""


inputSearchEl.addEventListener("keydown", () => {
    // console.log(inputSearchEl)
    if (inputSearchEl.value) {
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("submit",(e)=>{
    e.preventDefault()

    recentInput.unshift(inputSearchEl.value)
    console.log(recentInput)
    if(recentInput.length > 0){
        for(let  i=0;i<recentInput;i++){
            listofRecentHTMLE1+=""
        }
        listofRecentEl.innerHTML = listofRecentHTMLE1
    }
})
/*function reuble*****/
let womenethnic = document.getElementById(" womenethnic")
let womenethnicHTML = " "
console.log(WomenEthnic)
function womenethnicFunc(){
    WomenEthnic.map(e1 =>{
        console.log(e1)
    })
}
`
    <div>
     <h3>All women ethnic</h3>
     <p>view all</p>
      </div> 
      
      `