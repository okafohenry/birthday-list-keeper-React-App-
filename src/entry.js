import React from 'react';


const Entry = (props) => ( 
	<form className="form-group entry-pane" onSubmit={props.onSubmit} >
			<div className="entry">
				<input 
					className="name-entry"
					name="name"
					onChange={props.onChange}
					placeholder= "Celebrant's Name" 
					value={props.name}
					required /> 
				<input 
					className="day-entry"
					type="number" 
					name="day"
					min="1" 
					max="31"
					placeholder= "Day" 
					onChange={props.onChange}
					value={props.day} />
				<input 
					className="dob-entry"
					name="dob"
					type="month" 
					onChange={props.onChange} 
					value={props.dob}  />


				<button type="submit" className="btn-add btn-success">Add to List</button>
			</div>
	</form>

);

export default Entry;