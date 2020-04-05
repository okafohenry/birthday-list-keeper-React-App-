import React from 'react';


const Entry = (props) => ( 
	<form className="form-group" onSubmit={props.onSubmit} >

					<input 
						className="name"
						name="name"
						onChange={props.onChange}
						placeholder= "Celebrant's Name" 
						value={props.name}
						required /> 
					<input 
						className="day"
						type="number" 
						name="day"
						min="1" 
						max="31"
						placeholder= "day" 
						onChange={props.onChange}
						value={props.day} />
					<input 
						className="dob-entry"
						name="dob"
						type="month" 
						onChange={props.onChange} 
						value={props.dob}  />


					<button type="submit" className="btn btn-success">Add to list</button>
					</form>

);

export default Entry;