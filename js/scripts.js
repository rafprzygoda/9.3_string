var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops'.toUpperCase();
console.log(dinosaur); // all letters are uppercased

dinosaur = text.replace('Velociraptor', dinosaur); // Replacing 
console.log(dinosaur); // Show text with replaced first word

var piece = dinosaur.length/2; // Here I count where is the half of sentence

console.log(dinosaur.slice(0, piece)); // Here I slice sentence and display result
