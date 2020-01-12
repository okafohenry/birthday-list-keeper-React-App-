import React from 'react';
import ReactDOM from 'react-dom';


class BirthdaylistKeeper extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			day: '',
			dob: '',
			items : []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);

	}
	
	handleChange(event){
		const target = event.target;
		const value = target.value; //gets value of the textbox
		const name = target.name; //gets the name of the textbox

		this.setState({ [name]: value });
		
	};
	
	handleSubmit(event){
		event.preventDefault();
		const {name, day, dob, items} = this.state;
	

		items.push({name, day, dob});
		this.setState({
			items: items,
			name: '',
			day: '',
			dob: ''
		 });

	};
	handleDelete(key){
		let items = this.state.items.filter((item, mapKey) => key !== mapKey);
			this.setState({ items: items });
	}
			

	render(){
		return(
			<div className="app">
				<form className="form-group" onSubmit={this.handleSubmit} >

				<input 
					className=""
					name="name"
					onChange={this.handleChange}
					value={this.state.name} 
					placeholder= "Celebrants Name" 
					required /> 
				<input 
					className=""
					type="number" 
					name="day"
					min="1" 
					max="31"
					placeholder= "day" 
					onChange={this.handleChange}
					value={this.state.day} />
				<input 
					className=""
					name="dob"
					type="month" 
					onChange={this.handleChange} 
					value={this.state.dob}  />


				<button type="submit" className="btn btn-success">Add to list</button>
				</form>
				<ul>
				{
					this.state.items.map((item, key) => ( 
					<li key={key}>
						<span> {item.name} </span>
						<span> {item.day} </span>
						<span> {item.dob} </span>
						<button>edit</button>
						<button onClick={() => this.handleDelete(key)}>delete</button>
					</li>
				))}
				</ul>
			</div>
			);
	}
}





ReactDOM.render(<BirthdaylistKeeper />, document.getElementById('root'));


