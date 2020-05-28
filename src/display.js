import React from 'react';

const Display = props => (
	<>
		<tr key={props.key} className="item">
				<td className="item-det-name"> {props.name} </td>									
				<td> {props.dob} </td>
				<td> {props.day} </td>
				<td className="buttons">
					<button 
						className="edit-btn btn btn-light"
						onClick={props.handleEdit} >edit</button>
					<button 
						className="del-btn btn btn-danger" 
						onClick={props.handleDelete}>delete</button>
				</td>
		</tr>
	</>
);

export default Display;