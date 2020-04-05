import React from 'react';

const Edit = (props) => (

	<form onSubmit={props.handleUpdate}>
		<input 
			className=""
			name="name"								
			onChange={props.handleChange}
		    defaultValue={props.name}
			placeholder= "Celebrant's Name" /> 
		<input 
			className=""
			type="number" 
			name="day"
			min="1" 
			max="31"
			onChange={props.handleChange}
			defaultValue={props.day}
			placeholder= "day"  />
		<input 
			className=""
			name="dob"
			type="month"								
			onChange={props.handleChange}
			defaultValue={props.dob} />

		<button type="submit">update</button>
		<button onClick={props.handleEditCancel}>cancel</button>
	</form>
);

export default Edit;