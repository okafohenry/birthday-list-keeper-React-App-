import React from 'react';

const Edit = (props) => (

	<form onSubmit={props.handleUpdate}>
		<input 
			className=""
			name="name"	
			ref={props.nameRef}							
			onChange={props.handleChange}
			placeholder= {props.name} /> 
		<input 
			className=""
			type="number" 
			name="day"
			min="1" 
			max="31"
			ref={props.dayRef}
			onChange={props.handleChange}
			placeholder= {props.day}  />
		<input 
			className=""
			name="dob"
			type="month"	
			ref={props.dobRef}							
			onChange={props.handleChange}
			placeholder={props.dob} />

		<button type="submit">update</button>
		<button onClick={props.handleEditCancel}>cancel</button>
	</form>
);

export default Edit;