/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

//debugger

function cutestCat(cats) {


  let cutest=cats[0].cuteness;
  let ph=0;
  let i = 1;

  while (i < cats.length) {
    //const cat = cats[i];
    if (cats[i].cuteness > cutest) {
      cutest = cat.cuteness;
      ph=i;
    }
    i++;
  }

  return cats[0];
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
