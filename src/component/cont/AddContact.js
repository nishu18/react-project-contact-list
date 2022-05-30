import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        number:'',
    }

    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.number===""){
            alert("all the feild are mandatort !");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", number:''});
        
    }
     render(){
         return(
        <div className="main-container">
            <h2 className="addcontact">AddContact</h2>
            <form className="add-contact" onSubmit={this.add}>
                <div className="container-named">
                   
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/> <br/>
                    <input type="number" name="number" placeholder="Phone Number"  value={this.state.number} onChange={(e)=>this.setState({number:e.target.value})} />
                </div>
                
                <button className="add-button">Add</button>
            </form>
        </div>
         );
     };
}
export default AddContact;