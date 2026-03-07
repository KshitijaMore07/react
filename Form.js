import React, {Component} from "react";
class Form extends Component{

    constructor(props){

        super(props);

        this.state={

            name:"",
            email:""
        };
    }

    handleChange=(event)=>{

        const{name, value}=event.target;

        this.setState({
            [name]:value
        });
    };

    render(){

        return(

            <div>

                <h2>Registration Form</h2>
                
            
                <form>

                    <div>  
                        <label>Name:</label>
                      <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <br/>
                     <div>  
                        <label>email:</label>
                      <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                </form>
                <br/>

                <p><b>Name:</b>{this.state.name}</p>
                 <p><b>email:</b>{this.state.email}</p>
            </div>
        );
    }
}

export default Form;