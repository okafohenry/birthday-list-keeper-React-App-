import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './entry';
import Edit from './edit';
import './index.css';
import Loading from './loading_img.gif';


class BirthdaylistKeeper extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			day: '',
			dob: '',
			items : [],
			currentItem: {},
			dataEdited: {},
			toggle: false,
			loading: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit  = this.handleEdit.bind(this);
		this.handleEditCancel = this.handleEditCancel.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.dataChange = this.dataChange.bind(this);

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
	handleEdit(key){
		this.setState({
			currentItem: {...this.state.items[key]},
			toggle: true 
		});

	}

	handleEditCancel(){
		this.setState({ 
			currentItem: {},
			toggle: false 
		});
	}	
	handleUpdate(event){
		event.preventDefault();
		//const {name,day,dob} = this.state.dataEdited; 
		
			const item = this.state.currentItem;
			let index = this.state.items.indexOf(item);
			const newItemList = [...this.state.items];
			newItemList.splice(index, 1, this.state.dataEdited);
			
			this.setState({ 
				items: [...newItemList],
				toggle: false 
			});

	}	
	dataChange(event){
		const target = event.target;
		const value = target.value; //gets value of the textbox
		const name = target.name;

		this.setState (prev => ({ dataEdited: {...prev.dataEdited, [name]: value}	}));
	}
//displays loading icon for 5 seconds
	componentDidMount(){
		this.setState({ loading: true }, () => {
			setTimeout(() => {
				this.setState({loading: false});
			}, 2000)
		});
	}

	render(){
		return(
			<div className="main">
			{ 
			this.state.loading? 
				<div className="loading-icon">
					<center><img src={Loading} alt="Loading..." /></center>
				</div>:
				<div className="app">
					<div className="title">Birthday List Keeper </div>

					<Entry
						name={this.state.name}
						day={this.state.day}
						dob={this.state.dob}
						onChange={this.handleChange}
						onSubmit={this.handleSubmit} /> 

					<ul className="item-list">
					{ 
						this.state.toggle ?
						(
							<Edit 
								name={this.state.currentItem.name}
								day={this.state.currentItem.day}
								dob={this.state.currentItem.dob}
								handleChange={this.handleChange}
								handleUpdate={this.handleUpdate}
								handleEditCancel={this.handleEditCancel}
							/>
						)
						:
						this.state.items.map((item, key) => (
						<li key={key} className="item">
							<div className="item-det">
								<span> {item.name} </span>
								<span> {item.day} </span>
								<span> {item.dob} </span>
							</div>
							<div className="buttons">
								<button 
									className="edit btn btn-light"
									onClick={() => this.handleEdit(key)} >edit</button>
								<button 
									className="del btn btn-danger" 
									onClick={() => this.handleDelete(key)}>delete</button>
							</div>
						</li>
					))}
					</ul>
				</div>
			}
			</div>
			);
	}
}





ReactDOM.render(<BirthdaylistKeeper />, document.getElementById('root'));


