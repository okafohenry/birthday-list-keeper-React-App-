import React, {createRef} from 'react';
import ReactDOM from 'react-dom';
import LoadingIcon from './loading_icon';
import HeaderIcon from './title_icon';
import Title from './title';
import Entry from './entry';
import Edit from './edit';
import './css/index.css';


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
		this.nameRef = createRef();
		this.dayRef = createRef();
		this.dobRef = createRef(); 
		this.getMonth = this.getMonth.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit  = this.handleEdit.bind(this);
		this.handleEditCancel = this.handleEditCancel.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.dataChange = this.dataChange.bind(this);

	}

	//Get Month from input type='month'
	getMonth(dateValue){
		let months = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const dobMonth = dateValue.substr(5,2);
		const monthValue = dobMonth - 1;
		const month = months[monthValue];
		return month;
	}

	//handles onChange event of entry 
	handleChange(event){
		const target = event.target;
		const value = target.value; //gets value of the textbox
		const name = target.name; //gets the name of the textbox

		this.setState({ [name]: value });
		
	};
	//handles onSubmit event of entry
	handleSubmit(event){
		event.preventDefault();
		
		let dobValue = this.state.dob;
		const dob = this.getMonth(dobValue);
		
		const {name, day, items} = this.state;
	
		items.push({name, day, dob});
		this.setState({
			items: items,
			name: '',
			day: '',
			dob: ''
		 });

	};

	//handles onClick event of Delete button in Displayed Items
	handleDelete(key){
		let items = this.state.items.filter((item, mapKey) => key !== mapKey);
			this.setState({ items: items });
	}
	//handles onClick event of Edit button in displayed items
	handleEdit(key){
		this.setState({
			currentItem: {...this.state.items[key]},
			toggle: true 
		});
		console.log(this.state.currentItem);
	}

	//handles onClick event of Cancel button in update
	handleEditCancel(){
		this.setState({ 
			currentItem: {},
			toggle: false 
		});
	}	

	//handles onClick event of Update Button in update
	handleUpdate(event){
		event.preventDefault(); 
	
		const name = this.nameRef.current;
		const day = this.dayRef.current;
		const dob = this.dobRef.current;
		if(name.value === '' || day.value === '' || dob.value ===''){
			return;
		}
	
	
		const item = this.state.currentItem;
		let index = this.state.items.indexOf(item);
		const newItemList = [...this.state.items];
		newItemList.splice(index, 1, this.state.dataEdited);
		
		this.setState({ 
			items: [...newItemList],
			toggle: false 
		});
			

	}	

	//handles onChange event in Edit
	dataChange(){

		//Get Month from input type='month'			
		const name = this.nameRef.current;
		const day = this.dayRef.current;
		const dob = this.dobRef.current;

		const month = this.getMonth(dob.value)


		this.setState (prev => ({ 
			dataEdited: {...prev.dataEdited, 
							name: name.value,
							 day: day.value,
							 dob: month
						}	
		}));
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
						<center>
							<LoadingIcon />
						</center>
					</div>:
					<div className="app center">

						<HeaderIcon />
						<Title />

						<Entry
							name={this.state.name}
							day={this.state.day}
							dob={this.state.dob}
							onChange={this.handleChange}
							onSubmit={this.handleSubmit} 
							setRef={this.setRef} /> 

						<ul className="item-list">
						{ 
							this.state.toggle ?
							(
								<Edit 
									nameRef={this.nameRef}
									dayRef={this.dayRef}
									dobRef={this.dobRef}
									name={this.state.currentItem.name}
									day={this.state.currentItem.day}
									dob={this.state.currentItem.dob}
									handleChange={this.dataChange}
									handleUpdate={this.handleUpdate}
									handleEditCancel={this.handleEditCancel}
								/>
							)
							:
							this.state.items.map((item, key) => (
							<li key={key} className="item">
								<div className="item-det">
									<span className="item-det-name"> {item.name} </span>									
									<span> {item.dob} </span>
									<span> {item.day} </span>
								</div>
								<div className="buttons">
									<button 
										className="edit-btn btn btn-light"
										onClick={() => this.handleEdit(key)} >edit</button>
									<button 
										className="del-btn btn btn-danger" 
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


