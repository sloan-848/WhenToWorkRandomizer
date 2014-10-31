function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function getRandom(maxValue){
  return Math.floor((Math.random() * maxValue));
}

var nBody = $( 'body' ).html();

var allFound = false;
var lastFound = 0;
var foundIndeces = [];
while(!allFound){
  lastFound = nBody.indexOf('Unassigned', lastFound + 1);
  if(lastFound == -1){
    allFound = true;
  } else {
    foundIndeces.push(lastFound);
  }
}
var employees = ['Bryan Ahn', 'Zach Blandford', 'Ale Bliss', 'Zach Cain', 'Alex Cetnar', 'Usoshi Chatterjee', 'Mark Erdelac', 'Katie Goodge', 'Tanner Hawk', 'Rona Jiang', 'Dylan Kreitzer', 'Lauren March', 'Sarah McGee', 'Madison Montgomery', 'Tracy Rhodes', 'Brody Ritter', 'Amy Schnupp', 'Sheldon Shen', 'Will Sloan'];
for ( var i = 0; i < foundIndeces.length; i++) {
  nBody = nBody.replace('Unassigned', employees[getRandom(employees.length)]);
}

console.log(foundIndeces);

$( 'body' ).replaceWith(nBody);
