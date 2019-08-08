import React,{Component} from "react"
import {CardImg,} from "reactstrap"
import SingleMovie from "./SingleMovie";
import {Link} from "react-router-dom"

class DisplayMovies extends Component
{
    constructor(params)
    {
        super(params)
        this.state=({
            movies:[]
        });
    }

    componentDidMount = async () => {   
        var MovieName=[];
        MovieName =["harry%20potter"] ;
            var response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=424da7b2&s=" + MovieName[0] );
            var jSON = await response.json();
            this.setState({
                movies:jSON.Search
            });
    }

    render(){
        return(
            <div className="row">
            {this.state.movies.length > 0 &&
                this.state.movies.map((m, index) => (
                    <div key={index} >
                        <div className="col-md-4 mt-4">
                            <div className="card">
                               <Link to={ "/SingleMovie/" + m.imdbID } key= {m.imdbID}>
                                   <CardImg top src={m.Poster}
                                    alt="Card image cap" 
                                    style={{ cursor: "pointer", width: "150px", height: "150px" }}
                                    />
                                    </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div> 
        );
    }

    
}


export default DisplayMovies;