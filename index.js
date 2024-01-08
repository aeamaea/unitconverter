// aeam :: Dec 25 2023

const unitInputEl = document.getElementById("unit-input")
const lengthEl = document.getElementById("p-length")
const volumeEl = document.getElementById("p-volume")
const massEl = document.getElementById("p-mass")
const convertBtn = document.getElementById("convert-btn")
const conversionContainer = document.querySelectorAll(".conversion-container")
const h4El = document.querySelector("h4")

const lenFactor = 3.281     // 1 meter = 3.281 feet
const volFactor = 0.264     // 1 liter = 0.264 gallon
const massFactor = 2.204    // 1 kilogram = 2.204 pound

// console.log(meters,feet,liters,gallons,kgs,lbs)

const s = (units) => {
     let x = units > 1 ? "s" : ""
     return x
}


const doConversion = () => {
    
    // Start out with Unit values, Convert when user gives us something.
    let units = Number(unitInputEl.value) > 1 ? Number(unitInputEl.value) : 1
    // console.log(units)

     // length 
    const m2f = (units * lenFactor).toFixed(3)
    const f2m = (units / lenFactor).toFixed(3)
     
    lengthEl.innerHTML = `
    <p>${units} Meter${s(units)} = ${m2f} Feet | ${units} F${units > 1 ? "ee" : "oo"}t = ${f2m} Meters</p>
    `
     // volume
    const l2g = (units * volFactor).toFixed(3)
    const g2l = (units / volFactor).toFixed(3)
     
    volumeEl.innerHTML = `
    <p>${units} Liter${s(units)} = ${l2g} Gallons | ${units} Gallon${s(units)} = ${g2l} Liters </p>
    `
    // mass
    const kg2lb = (units * massFactor).toFixed(3)
    const lb2kg = (units / massFactor).toFixed(3) 
     
    massEl.innerHTML = `
    <p>${units} Kilo${s(units)} = ${kg2lb} Pounds | ${units} Pound${s(units)} = ${lb2kg} Kilos</p>
    `
  
    
}
convertBtn.addEventListener("click", doConversion)

// Call it byitself so we show unit values (1meter, 1 gallon etc.)
doConversion()
