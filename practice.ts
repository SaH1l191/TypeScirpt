console.log("Hello")
interface someValue { 
    name:string
    id:number
}

let someObj : someValue = {
    name:"someName",
    id:12
}

let Sttring:string  = "123"
let NNubmer :number = 12
let bBolean :boolean = true


let tax :string | number 
tax = "12"
tax = 12 

let request :"pending" | "completed"
request = "pending"

let anysame :any 
notSure: anysame =  "string maybe anything"
notSure :anysame = false



// types and arrays 

const books = ["1983",'1984',"2004"]
let foundBook : string | undefined
for(let book of books){
    if(book='1983'){
        foundBook = book
        break
    }
}
console.log(foundBook?.length)
// this question mark indicates that if it is undefined then it will not run this 


let prices :number[] = [199,1200,21]
let quality:string[] = ["apple","orange"]

//auto assigned here  the type. hover it 
let anyTYpe = ["string"]

let array:(string | boolean)[] = ["string",true,false]





// objects 

//1 
//need to mention property type
let cars :{brand:string,year:number}= {
    brand : "toyota",
    year : 2020
}

//2 

let book = {title:"book",cost:20}
let pen = {title:"book",cost:20}
let notebook =  {title:"book2"}
let timepass = {title:"title1"}
//cost can be null for one object
// defining array of objects 
let items: {title:string,cost?:number}[]  = [book,pen,notebook]
items.push(timepass)
items.push({title:"newtitle",cost: 0})
// items[0].title: "newbook"
//cannot modify the read only items object arrays 




// functions 

function calculateDiscount(price:number):number { 
    return price
}

//working with optional parameters 
//also default parameter added at last
function calculatPrice(price:number,discount?:number,penalty:number= 0):number{
    return price - (discount || 0) - penalty
}
let priceAfterDiscount = calculatPrice(1000,20,1)
let priceAfterDiscount1 = calculatPrice(1000)


function sum(message:string , ...numbers:number[]):string{
    const doubled = numbers.map((numbers)=>numbers*2)
    console.log(doubled)

    let total = numbers.reduce((previous,current)=>{
        return previous+ current 
    },0)
    return `${message}${total}`
}

let result = sum(`The total is `,1,2,3,4,5)


function logMesage(message:string):void{
    console.log(message)
}


function processInput(input:string | number){
    if(typeof input ==='number'){
        console.log(input*2)
    }else{
        console.log(input.toLowerCase());
    }
}
processInput("MESSAGE");
processInput(10)

//destructing object and returns a new object
//this function taks id obj as number and returns obj if the id number is even
function createEmployee({id}:{id:number}): {id:number;isActive : boolean;}{
    return {id,isActive:id%2===0};
}

const first = createEmployee({id:1});
const second = createEmployee({id:2})



function createStudent(student:{id:number,name:string}):void{
    console.log(`Welcome to course ${student.name.toLowerCase()}`)
}
const newStudent ={
    id:5,
    name:"sahil"
}
createEmployee(newStudent)



function processData(input:string|number,config:{reverse:boolean}={reverse:false}):string|number{
    if (typeof input==='number'){
        return input*input
    }
    else{
        return config.reverse? input.toUpperCase().split('').reverse().join(""):input.toUpperCase();
    }
}


// Alias and interfaces 
type Biscuits = {name:string,tasty:boolean }

const trry:Biscuits = {name:"GoodDay",tasty:false}
console.log(trry)

type Book = {id:number,name:string, price:number}

//what if we want to add new property later on into the object
let book1:Book & {discount :number}= {
    id:1,
    name:"Secret life of smurfs",
    price:123,
    discount:2
}


//interfaces 
interface BookEasy{
    title:string,
    price:number,
    genre?:string
    printAuthor() : number;
    printTitle():string;
}
let deepwork:BookEasy={
    title:"dsf",
    price:321,
    genre:"sadf",
    printAuthor(){
        console.log(`dafsd`)
        return 1
    },
    printTitle(){
        return `${this.title}`
    },
}
console.log(deepwork)


interface Vehicle {
    wheels: number;
    maker: string;
  }
  
  interface Car extends Vehicle { // Car inherits from Vehicle
    power: "gas" | "electricity"; // Car adds its own property
  }
  
  interface Bicycle extends Vehicle { // Bicycle inherits from Vehicle
    folding: boolean; // Bicycle adds its own property
  }
  
  const myCar: Car = { wheels: 4, maker: "Toyota", power: "gas" };
  const myBike: Bicycle = { wheels: 2, maker: "Schwinn", folding: true }; 




    // is in keywords usecases 

function isString(value: unknown): value is string {
    return typeof value === "string";
  }
  
function printValue(value: unknown) {
    if (isString(value)) {
      console.log(value.toUpperCase()); // Now safe to use string methods
    } else if (typeof value === "number") {
      console.log(value * 2); // Handle numbers
    } else {
      console.log("Invalid type");
    }
  }
  
  const someValue: any = "Hello";
  printValue(someValue); 

  interface Person {
    name: string;
    age?: number; // Optional property
  }
  
  const person: Person = { name: "Alice" };
  
  console.log("name" in person); // true (property exists)
  console.log("age" in person); // true (optional property might exist)
  console.log("occupation" in person); // false (property doesn't exist)


  //enums and 


//   tuples 

  let pperson :[string ,number] = ['john',23]
  pperson.push(324) ; pperson.push("sdf");

function getPerson():[string,number]{
     return ['john',23]
}
const randomperson  = getPerson()
console.log(randomperson[0])

//enums 


enum ServerResponseStatus { 
    Success =200 ,
    Error= 500
}
interface ServerResponse{
    result:ServerResponseStatus,
    data:string[]
}
function getServerResponse():ServerResponse{
    return {
        result:ServerResponseStatus.Success,
        data:["first item","...."]
    }
}
const response = getServerResponse()
console.log(response)


enum UserRole{
    Admin,Student,Instructor
}
type User ={
    id:number,
    name:string,
    role:UserRole,
    contact:[string,string]
}
function createUser(user:User):User{
    return user
}
const user1:User = {
    id:1,
    name:"dfa",
    role:UserRole.Admin,
    contact:["234",'234']
}
console.log(user1)


//aliasing 
let smthing :any = "this is a string type "
let strlength :number = (smthing as string).length;


type Bird = {
    name:String
   }
   let birdString =`{"name":"Eagle"}`
   let birdObject = JSON.parse(birdString)
  let bird = birdObject as Bird
  // console.log(bird.name)
  
  
  enum Status{
    Pending = "Pending",
    Declined = "Declined"
  }
  type User1  = {
    name:String ,
    status :Status
  }
  const StatusValue  = "Pending"
  
  let user4:User1 =  {name:"sdfa",status: StatusValue  as Status }
  // console.log(user4)
  
  let numbe: unknown;
  numbe = 43.213
  if(typeof(numbe)==='number'){
    console.log(numbe)
  }
  
  
  // unknown type examples to handle unknown cases 

  enum Color {
     Red , Green
  }
 function showColor(color:Color){
    switch(color){
        case Color.Red:
            return `Red`
        case Color.Green:
            return `Green`
        default:
            let unexpectedColor:never= color;
            throw new Error(`Unexpected case ${color}`)
    }
 }
  

// global declaration variable names cannot be used in mutliple TS files .
// check const name = 'dashi' in two seperate TS files . ts treats this as global scope 

// Discriminated Union in Action

type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === 'dog') {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}
 // better one 
// function makeSound(animal: Animal) {
//   if ('bark' in animal) {
//     // TypeScript knows that `animal` is a Dog in this block
//     animal.bark();
//   } else {
//     // TypeScript knows that `animal` is a Cat in this block
//     animal.meow();
//   }
// }


//generics 

let arr1:string[] = ['dsaf','asf','ghf']
let arr2:Array<string> = ['sadf','asdfsadf']




//random (check too )

function runafter1sc(fn:()=>void){
    setTimeout(fn,1000)
}

runafter1sc(function(){
    console.log("loaded after 1 sec")
})




const doSomething=(a:any):number=>{
    console.log("Hello")
        return a
}
const result3 = doSomething(5)





function isLegal(user:{id:number,name:string}):boolean{
    if(user.id>3){
      return true;
    } 
    else{
      return false 
    }
  }
  console.log(isLegal({id:4,name:"Sahil"}))


  interface Person1 {
    name: string;
    greet(): void;
}

class Student implements Person1 {
    name: string;
    age: number;
    studentID: number;

    constructor(name: string, age: number, studentID: number) {
        this.name = name;
        this.age = age;
        this.studentID = studentID;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    study(): void {
        console.log(`Student ${this.name} with ID ${this.studentID} is studying.`);
    }
}

// Example usage:
const student = new Student("John Doe", 20, 12345);
student.greet();  // Output: Hello, my name is John Doe and I am 20 years old.
student.study();  // Output: Student John Doe with ID 12345 is studying.


// diff btw types and interfaces : - 
// one is we cannot use implements feature in types but can in interfaces 


// generics



function identity<T,U>(arg: T, arg1: U): string {
    return (arg+"--"+arg1);
}

let output1 = identity<number,string>(123, "asdf");
console.log(output1); // Output: "sdaf



//TypeScript Apis Advanced 

// 1.Pick
type Backend = {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
}
type checkAuth = Pick<Backend,'isAdmin' | 'age'>;

function displayAuth(profile:checkAuth){
    console.log(`${profile.age}+${profile.isAdmin}`)
}



// 2.Partial
//nothing but selects optional parameters from the type Backend
type optional = Partial<Backend>;
//hover optional to see change 


// 3. readonly 
//take example we can use const and still make internal
//  changes btu cannot reassign whole value again . to enforce nothing of the value can be cahnged we use readonly

// example-1
type Redoby= {
    readonly name:string; 
}
// example -2 
interface Congif {
    readonly endpoint : string ;
    readonly apikey : string ;
  }
  
  const config:Readonly<Congif> = {
    endpoint:'httdsafdsf',
    apikey: 'asdfadsfadsf'
  }





interface User4 {
    id:number ;
    name:string 
  }
  type User5 = {[key:number]:User4};
  
  const val:User5 = 
  {
    1 : {id:1, name:"adf asdf"},
    2 : {id:1, name:"adf asdf"}
  };
//   means key is number and rest is of user4 type

// fix to above (dont remember but check once )
//   3. record and map
type Usser = Record<string,number>;

// type Usssser =  Record<string,{id:number,age:number}>
// const check :Usssser = {
//     "asdf" : {id:1 , age:24}
// }

 // using Map
// const sot = new Map()
// sot.set("asdf",{name:1,id:39})
// or 
// sot = new Map<string,Usser>


// 4. Exclude 
// excludes the properties mentioned 
type Eventt =  'click' | 'scroll'
type excludeEventt = Exclude<Eventt,'scroll'>
// hower excludeEventt to see change 