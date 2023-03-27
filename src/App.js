// types of cpmponents in React - 
// function component 
// class componment 

// jsx 

// function component 
import Header from "./components/Header";
import BlogPosts from "./components/BlogPosts";

const App = () => {

  const salary = 100; // model / data 

  return ( // view 
    <div>
      <Header />
      <h1>Deloitte React App</h1>
      <p>Welcome to Deloitte ReactJS Application.</p>
      <p>{salary}</p>
      <BlogPosts />
    </div>
  );
}

export default App;

// class component
// import React from "react";

// class App extends React.Component {

//   render = () => {
//     return (
//       <duv>
//         <h1>Deloitte React App</h1>
//         <p>Deloitte ReactJS Class component.</p>
//       </duv>
//     );
//   };

// };

// export default App;

// const App = () => {

//   return (
//     <div>
//       <h1>Deloitte React App</h1>
//       <p>Welcome to Deloitte ReactJS Application.</p>
//     </div>
//   );

// }

// export default App;


// const App = () => {
//   return (
//     <div>
//       <h1>Deloitte React App</h1>
//       <p>Welcome to Deloitte ReactJS Application.</p>
//     </div>
//   );
// }

// export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>Deloitte React App</h1>
//       <p>Welcome to Deloitte ReactJS Application.</p>
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
