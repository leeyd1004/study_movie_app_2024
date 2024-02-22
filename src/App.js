// import logo from './logo.svg';
// import './App.css';
// import Potato from "./Potato";
// import PropTypes from "prop-types";
import React from "react";
// import axios from "axios";
// import Movie from "./components/Movie";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import './App.css';
import Navigation from "./components/Navigation";
import Details from "./routes/Details";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie-detail" component={Details} />
    </HashRouter>
    
  );
  // return <Home />;
}

// class App extends React.Component{  
//   state = {
//     count:0,
//     isLoading:true,
//     movies:[]
//   };

//   getMovies = async () => {
//     const {
//       data:{
//         data:{movies}
//       }
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//     // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
//     // console.log(movies);
//     // console.log(movies.data.data.movies);
//     // this.setState({movies:movies});
//     // this.setState({movies});
//     this.setState({movies,isLoading:false});
//   };    

//   componentDidMount() {
//     // setTimeout(() => {
//     //   this.setState({isLoading:false});
//     // },6000);
//     // axios.get('https://yts-proxy.now.sh/list_movies.json');
//     this.getMovies();
//   }

//   add = () => {
//     // console.log("add");
//     this.setState({count:this.state.count+1});
//   }

//   minus = () => {
//     // console.log("minus");
//     this.setState({count:this.state.count-1});
//   }

//   render(){   
//     const {isLoading,movies} = this.state;    
//     return (
//       <section className="container">
//         {isLoading? (
//           <div className="loader">
//             <span className="loader_text">Loading...</span>
//           </div>          
//         ):(
//           <div className="moives">
//             {movies.map(movie => {
//               console.log(movie);
//               return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>;
//             })}
//           </div>
//         )}          
//       </section>);
      
      
//     // return <div>{isLoading? 'Loading...':"We are ready!"}</div>;
//     // return (
//     //   <div>
//     //     <h1>I'm a class Component: {this.state.count}</h1>
//     //     <button onClick={this.add}>Add</button>
//     //     <button onClick={this.minus}>Minus</button>
//     //   </div>      
//     // );
//   }

// }

// const foodILike = [
//   {
//     id:'key0',
//     name:'kimchi',
//     image:'https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp',
//     rating:4.4
//   },
//   {
//     id:'key1',
//     name:'samgyeopsal',
//     image:'https://i.namu.wiki/i/SdI6mHzKiWg-yJEqBpWhaACTth0ZSU_qSjhHCnQp5OxqwVl-PRIzql6bkmp1tm0YaHxjDoTbt-nBtiSE4nhqbQ.webp',
//     rating:4.8
//   },
//   {
//     id:'key2',
//     name:'bibimbap',
//     image:'https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg',
//     rating:4.5
//   }
// ]


// function Food({name,picture,rating}){
//   // console.log({name});
//   return (
//     <div>
//       <h2>I love {name} !!!</h2>
//       <img src={picture} alt={name} />
//       <h4>{rating}/5.0</h4>
//     </div>
//   );
// }

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
// }
// function App() {
//   console.log(foodILike.map(renderFood));
//   return (
//     <div>
//       {/* <h1>Hello</h1>
//       <Food fav="kimchi" something={true} papa={['hello',1,2,3,4,true]} /> */}
//       {/* {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))} */}
//       {foodILike.map(renderFood)}
//     </div>
//   );
//   // return <div>Hello !!!</div>;
//   // return <div className="App" />;

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }

// Food.propTypes = {
//   name:PropTypes.string.isRequired,
//   picture:PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired,
// };

export default App;
