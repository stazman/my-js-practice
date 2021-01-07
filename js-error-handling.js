function enterNumber(x){
  try {
    if (typeof(x) != "number"){
      throw "Invalid input"
    } else {
      console.log(x + " is a great choice!");
    }
  } catch(err) {
    console.log(err);
  } finally {
    console.log("Hope you're enjoying your day!")
  }
}

enterNumber(2);

enterNumber("hello");