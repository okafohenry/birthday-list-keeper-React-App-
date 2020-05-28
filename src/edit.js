import React from 'react';

const Edit = props => (
	<center>
		<form onSubmit={props.handleUpdate} className="edit-pane">
			<input 
				className="name-edit"
				name="name"	
				ref={props.nameRef}							
				onChange={props.handleChange}
				placeholder= {props.name} /> 
			<input 
				className="day-edit"
				type="number" 
				name="day"
				min="1" 
				max="31"
				ref={props.dayRef}
				onChange={props.handleChange}
				placeholder= {props.day}  />
			<input 
				className="dob-edit"
				name="dob"
				type="month"	
				ref={props.dobRef}							
				onChange={props.handleChange}
				placeholder={props.dob} />

			<button type="submit" className="update-btn">update</button>
			<button onClick={props.handleEditCancel} className="cancel-edit-btn">cancel</button>
		</form>
	</center>
);

export default Edit;