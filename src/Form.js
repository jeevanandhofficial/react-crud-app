import { Component } from "react";

class Form extends Component
{
    initialState ={
        name:"",
        job:"",
    }
    state =this.initialState;
    handleChange = (event)=>{
       const {name,value}=event.target
       this.setState({[name]:[value]});

    }
    submitForm =()=>{
         let character=this.state
         this.props.handleSubmit(character)
         this.setState(this.initialState);

    }
    render()
    {
        return(
            
            <form class="row gy-2 gx-3 align-items-center .col-sm-7 d-sticky">
            
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            placeholder="Type name of the employee to enter"
            id="name"
            value={this.state.name}
            class="form-control"
            onChange={this.handleChange}
            />
            <label htmlFor="job">Job</label>
            <input
            type="text"
            name="job"
            placeholder="Type job description of the employee"
            id="job"
            
            value={this.state.job}
            class="form-control"
            onChange={this.handleChange}
            />
            <input  class="btn btn-primary" type="button" value ="Submit" onClick={this.submitForm}/>
            </form>
            
            
        )

    }
}

export default Form