import React from 'react';


const Entry = props => ( 
	<center>
		<form className="form-group entry-pane" onSubmit={props.onSubmit} >
			<div className="entry">
				<label> Celebrant's Name: </label>
				<input 
					className="name-entry"
					name="name"
					onChange={props.onChange}
					value={props.name}
					required /> 
				<div className="day-dob-entry-wrapper">
						<label> Birthday Date: </label>
					<span className="day-dob-entry">
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
					</span>
				</div>
				


				<button type="submit" className="btn-add btn-success">Add to List</button>
			</div>
		</form>
	</center>

);

export default Entry;