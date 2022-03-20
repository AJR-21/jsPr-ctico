const string = 'JS es gread, con JS i can build the feuture';
//método antiguo para remplazar un string
const remplcedString = string.replace('JS', 'Python');
console.log(remplcedString);

//es12
const remplcedString2 = string.replaceAll('JS', 'Python');
console.log(remplcedString2);

class mensage {
    show(val){
        console.log(val);
    }
    get #add(val){
        ...
    }
}

const mesage = new mensage();
mesage.show('Hello world');

const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1,promise2,promise3])
  .then(response => console.log(response));

  class anyClass {
      constructor(element){
          this.ref = new weakRef(element);
      }
  }
  