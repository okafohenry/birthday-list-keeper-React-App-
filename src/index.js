import React, {createRef} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Entry from './entry';
import Edit from './edit';
import Display from './display';
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
			toggle: false
		}
		this.nameRef = createRef();
		this.dayRef = createRef();
		this.dobRef = createRef(); 

	}

	//persist State

	//fetches stored state items fron local storage on component mount
	componentDidMount(){
		const data = localStorage.getItem('friends-list');
		if (data) {
			this.setState({ items: JSON.parse(data)});
		}
	}
	//saves every(next) state update to local storage as a string
	componentWillUpdate(nextProps, nextState){
		localStorage.setItem('friends-list', JSON.stringify(nextState.items));
	}

	
//Get Month from input type='month'
	getMonth = dateValue => {  
		let months = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const dobMonth = dateValue.substr(5,2);
		const monthValue = dobMonth - 1;
		const month = months[monthValue];
		return month;
	};

	//handles onChange event of entry 
	handleChange = event => {  
		const target = event.target;
		const value = target.value; //gets value of the textbox
		const name = target.name; //gets the name of the textbox

		this.setState({ [name]: value });
		
	};
	//handles onSubmit event of entry
	handleSubmit = event => {  
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
	handleDelete = key => {  
		let items = this.state.items.filter((item, mapKey) => key !== mapKey);
			this.setState({ items: items });
	};
	//handles onClick event of Edit button in displayed items
	handleEdit = key => {  
		this.setState({
			currentItem: {...this.state.items[key]},
			toggle: true 
		});
	};

	//handles onClick event of Cancel button in update
	handleEditCancel = () => {  
		this.setState({ 
			currentItem: {},
			toggle: false 
		});
	};	

	//handles onClick event of Update Button in update
	handleUpdate = event => {  
		event.preventDefault(); 
	
		const name = this.nameRef.current;
		const day = this.dayRef.current;
		const dob = this.dobRef.current;
		if(name.value === '' || day.value === '' || dob.value ===''){
			return;
		}
	
	
		const item = this.state.currentItem;
		//uses findIndex method to find index of object element in an array
		let index = this.state.items.findIndex(x => x.name === item.name);
		const newItemList = [...this.state.items];
		newItemList.splice(index, 1, this.state.dataEdited);
		
		this.setState({ 
			items: [...newItemList],
			toggle: false 
		});
			

	};	

	//handles onChange event in Edit
	dataChange = () => {  

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
	};

	
	render(){
		return(
			<div className="main">
				<div className="app center">
					<Header />
					<Entry
						name={this.state.name}
						day={this.state.day}
						dob={this.state.dob}
						onChange={this.handleChange}
						onSubmit={this.handleSubmit} 
						setRef={this.setRef} /> 

					{ 	this.state.toggle ?
					/****** displays Edit component when toggle is set *****/
						<Edit 
							nameRef={this.nameRef}
							dayRef={this.dayRef}
							dobRef={this.dobRef}
							name={this.state.currentItem.name}
							day={this.state.currentItem.day}
							dob={this.state.currentItem.dob}
							handleChange={this.dataChange}
							handleUpdate={this.handleUpdate}
							handleEditCancel={this.handleEditCancel}  />
						:
						<center>
							<div className="items-display">
								<table className="item-list" >
								 	<tr> 
										<th>Celebrants Name</th>
										<th>Month</th>
										<th>Date</th>
										<th></th>
									</tr>
								{ 
									this.state.items.map((item, key) => (
									<Display
										key={key} 
										name={item.name}
										dob={item.dob}
										day={item.day}
										handleEdit={() => this.handleEdit(key) }
										handleDelete={() => this.handleDelete(key)}	/>
								))}
								</table>
							</div>
						</center>
					}
					</div>
			</div>
		);
		
	}
}


ReactDOM.render(<BirthdaylistKeeper />, document.getElementById('root'));


