//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //To act like a pronoun in an English sentence. It removes redundancy in code by refering to the object 
      //attched to the left of the dot (implicitly), or to the object passed by apply or permanently by bind, 
      //or by default to the window.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Implict -- done by calling on object to the left of the dot, which is then 'this'. Most common.

      //Explicit -- done by overriding whatever implicit or default might be called and giving the function 
      //exctly what you want it to sue as 'this'. Could do this by .call(useThisObjAsThis, arg1, arg...n), 
      //.apply(useThisObjAsThis, [arg1, arg...n]), .bind(useThisObjAsThis, arg1, arg...n); .bind is permanent 
      //and must be stored in a variable as essentially a new function, with a permanently added new context 
      //in the form of the object or args passed. Common with click events
      
      //Default -- 'this' refers to the window object if it has nothing else

      //New -- used for constructor functions to creat new object with protoypes that they share; if not called 
      //on a construcotr, the constructor's 'this' will revert to default

  // 3) What is the difference between call and apply?

      //call takes the arguments in as given next to the object, while apply takes an array that then gets unpacked 
      //into the function's arguments

  // 4) What does .bind do?

      //creates a new function permanently binding the object passed into .bind(useThisObjAsThis) to 'this', AND also 
      //will bidn a function to a certain context, such that arguments are passed in.

      // CONTEXT BIND ex: 
      //function taxByRate(rate, amount) {return rate* amount;};
      //var utahTax = taxByRate.bind(null, 0.07); --> bound into the context of a 0.07 tax rate in Utah.
      //utahTax(100) --> amount is 100, tax is therefore $7

      //OBJECT BOUND EX (specific in context):
      //var ship = { name: 'Pequod', position: 10, moveShip: function() {this.position++;} };
      //ship.moveShip();
      //var ship2 = { name: 'Jolly Roger', position: -19 };
      //ship2.moveShip() --> ERROR, doesn't have it!
      //var moveJollyRoger = ship.moveShip.bind(ship2);
      //moveJollyRoger();
      //console.log(ship2.position) --> -18!



//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "LadyEowyn",
      email: "no_man@rohan.gov",
      getUsername: function(){
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

  console.log(user.getUsername() === user.username);

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
      this.move += 10;
      return this.move;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the 
//move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also 
//need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal 
//objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  getYear.call(prius);
  getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //whatever the value of the username property belonging to the object passed as 'this', or undefined
  //if 'this' in that context has no username property.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Nothing! SO it defaults to window.


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) 
//so that userName will be equal to 'iliketurtles'.

