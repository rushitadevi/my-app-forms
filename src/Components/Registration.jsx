import React from 'react'

import { LocalForm, Control,Errors } from "react-redux-form";
import { Button, Container, Row, FormGroup, Label, Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";

const validators = val => val && val.length;


const minLength = (val) => !val || val.length >= 3;
const minLengthPassword=(val)=>!val || val.length >=8;


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          data :{
            name:"",
            surname:"",
            email:null,
            password:0,
            birthYear:1900,
            address:"",
            city:"",
            postalcode:0,
            creditcard:0
          }
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    handleChange(values) { }
    handleUpdate(form) {  }
    handleSubmit(values) { 
        console.log("SUBMIT", values);
        var newData=this.state.data;
        newData["name"]=values.name;
        newData["surname"]=values.surname;
        newData["email"]=values.email;
        newData["password"]=values.password;
        newData["birthYear"]=values.birthYear;
        newData["address"]=values.address;
        newData["city"]=values.city;
        newData["postalcode"]=values.postalcode;
        newData["creditcard"]=values.creditcard;
       this.setState({
        data:newData
       });
     console.log(newData);
     }

    render() {
    
      return (
          <>
          <Container>
              <h3>Register Yourself!!</h3>
        <LocalForm
        model="regisration"
        
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
         <Row>
            <FormGroup className="col-md-6">
              <Label for="name">Name</Label>
              <Control.text id="name" required
              model=".name" className="form-control" placeholder="Your name" 
              validators={{
               validators,
                minLength:(val)=>!val || val.length >=3
              }}
             
              />
              <Errors
            className="errors"
            model=".name"
            show="touched"
            messages={{
                validators : 'name is required',
                minLength: "name should be atleast 2 characters long"
            }}
          />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="surname">Surname</Label>
              <Control.text id="surname" model=".surname" className="form-control" placeholder="surname"
               validators={{
                validators,
               minLength: (val)=>!val || val.length >=3
              }}
              />
              <Errors
            className="errors"
            model=".surname"
            show="touched"
            messages={{
                validators:'surname is required',
                minLength: 'Must be atleast 2 characters or more'
            }}
          />
            </FormGroup>
          </Row>
          <Row>
          <FormGroup className="col-md-6">
              <Label for="email">Email</Label>
              
              <Control.text id="email" model=".email" className="form-control" placeholder="aaa@abc.com"
              validators={{
                validators,
                emailValidator:(val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
            }}
              
              />
               <Errors
               className="errors"
               model=".email"
               show="touched"
               messages={{
                validators,
                emailValidator: "Please enter valid email"
              }}/>
             
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="password">Password</Label>
              <Control.text type="password" id="password" model=".password" className="form-control" placeholder="Password"
              validators={{
                validators,
                minLengthPassword:(val) => !val || val.length >=8
              }}
               />
               <Errors
               className="errors"
               model=".password"
               show="touched"
               messages={{
                validators:"Password is required",
                minLengthPassword: "there shoud be atleast 8 characters"
              }}/>
            </FormGroup>
          </Row>
          <Row>         
            <FormGroup className="col-md-6">
              <Label for="birthYear">Birth Year</Label>
              <Control.text id="birthYear"  type="number" className="form-control"  model=".birthYear"  placeholder="2019"   min={1910}  />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="address">Address</Label>
              <Control.text id="address" model=".address" className="form-control" placeholder="Address"
               validators={{
                validators
              }} />
               <Errors
               className="errors"
               model=".address"
               show="touched"
               messages={{
                validators:"Address is required"
                
              }} />
            </FormGroup>
          </Row>
          
          <Row>          
            <FormGroup className="col-md-6">
              <Label for="city">City</Label>
              <Control.text id="city" model=".city" className="form-control" placeholder="City" />
            </FormGroup>
          
          <FormGroup className="col-md-6">
              <Label for="postalcode">Postal code</Label>
              <Control.text id="postalcode" model=".postalcode" className="form-control" placeholder="Postal Code" />
            </FormGroup>
            </Row>
          <Row>
            <FormGroup className="col-md-6">
              <Label for="creditcard">Credit card</Label>
              <Control.text id="creditcard" model=".creditcard" className="form-control" placeholder="credit card" />
            </FormGroup>
          </Row>
          <Control.button className="btn btn-success" model="regisration" disabled={{ valid: false }} onClick={this.toggle}>{this.props.buttonLabel}
            Submit!
          </Control.button>
        </LocalForm>
        </Container>

        <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{color:'black'}}>
          <ModalHeader toggle={this.toggle}> <b>Name : {this.state.data.name } {this.state.data.surname}  </b> </ModalHeader>
          <ModalBody>
            Birth Year : {this.state.data.birthYear} <br></br>
            Email : {this.state.data.email}  <br></br>
            Address : {this.state.data.address} <br></br>
            City : {this.state.data.city} || {this.state.data.postalcode}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
        </>
      );
    }
}
 export default Registration;