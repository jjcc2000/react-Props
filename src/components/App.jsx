import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
import Card_One from "./Cards";
function App() {
  return (
    <div>
      <h1>My contacts</h1>
      <Card_One
        name='Kendrick Lamar'
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeJ3nvjL3-6a1mFMJDKWFdaDbRy1YL0TokQ&usqp=CAU'
        tel='1111111'
        email='Joaijas@gmail.com'
      />
    </div>
  );
}

export default App;
