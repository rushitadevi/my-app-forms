import React from 'react'
import { ListGroup, ListGroupItem, Button, Badge } from "reactstrap";
class ShowComments extends React.Component {
    constructor() {
        super();
        this.state=({
            comments:[]
        });
    }

    componentDidMount=async()=>{
        let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let url = "https://strive-school-testing-apis.herokuapp.com/api/comments/";
    let authString = `${username}:${password}`;

    let headers = new Headers({
      "Content-Type": "application/json"
    });
    headers.set("Authorization", "Basic " + btoa(authString));
    console.log("id" + this.props.id);
    var response = await fetch(url + this.props.id, {
      headers: headers
    });
    var jSon = await response.json();

    if (jSon.length > 0) {
      this.setState({
        comments: jSon
      });
    } else {
      this.setState({
        comments: []
      });
    }
    console.log(this.state.comments);
    }
   
    render() { 
        return ( 
            <>
            
            {this.state.comments.length > 0 &&
                this.state.comments.map((c,index) => (
                    <ListGroup className="mt-4" key={index} style={{ width: "100%" }}>
                    <ListGroupItem  className="justify-content-between" color="success"><b>{c.comment}</b>
                    <Badge pill color="success">{c.rate}</Badge>
                    <Button color="danger"  style={{float : "right"}} value={c._id} onClick={this.deleteComment} >Delete</Button>
                    </ListGroupItem>
                </ListGroup>
                ))}
             {this.state.comments.length === 0 && <div> <Badge color="light" pill>No Comments for this book</Badge></div>}
              </>
         );
    }
}
 
export default ShowComments;