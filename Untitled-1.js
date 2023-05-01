// we covered .map .filter and foreach
//const forEacReturnValue= arrayOfFellowws.forEach( eachFel +> console.log(" check" + eachFel.name))

const checkFellowName = (eachFel) => {
    console.log(" check" + eachFel.name)
}

//console.log(checkFellowName)
//arraoOfFellows.forEach(checkFellowName)


// arrayofFellows.forEach( checkFellowName )
//arrayOfFellows.forEach(checkFellowName())
arrayOfFellows.forEach( () => checkFellowName () )

// structure an anonymous function and use it in a dynamic way .
//filtering process on an array of objects

const arrayOfFellows = [
    {name: "PersonA"},
    {name: "PersonAB"},
    {name: "PersonABC"},
    {name: "PersonABCD"},
    {name: "PersonABCDE"}
]
const FilteredArrayOfFellow = []

for(const eachFell of arrayOfFellows) {
    if(eachFell.name.length> 5){
        FilteredArrayOfFellow.push(eachFell)
    }
}
console.log(FilteredArrayOfFellow)