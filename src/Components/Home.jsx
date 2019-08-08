import React,{Component} from "react";
import {BrowserRouter as Router,Route}  from "react-router-dom"
import { withRouter } from "react-router";
import DisplayMovies from "./DisplayMovies"
import MyNav from "./MyNav"
import SingleMovie from "./SingleMovie";
import AddComments from "./AddComments"
import Registration from "./Registration"

class Home extends Component
{
  render(){
    var RoutedNavigation = withRouter(MyNav);
      return (
          <Router>
              <RoutedNavigation/>
              <div className="container">
              <Route path="/" exact component={DisplayMovies} />
              <Route  path="/SingleMovie/:imdbID" component={SingleMovie}/>
              <Route path="/AddComments" component={AddComments}/>
              <Route path="/Registration" component={Registration}/>
              </div>
          </Router>
      );
  }
}

export default Home;