// Add your functions and code here
var kittens = []

var destructivelyAppendKitten = (name) =>{
  kittens.push(name)
}

var destructivelyPrependKitten = (name) =>{
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () =>{
  kittens.pop()
}

var destructivelyRemoveFirstKitten = () =>{
  kittens.shift()
}

