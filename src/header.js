import React from 'react';

const Header = () => ( 
	<center>
		<div>
			<img src={'https://res.cloudinary.com/okafohenrie/image/upload/v1589195013/emojione_spiral-calendar_rednun.png'} 
				alt={'header_icon'}
				className="header_icon" />
		</div>
		<div className="title">
			<span className="title-header">Birthday List Keeper</span>
			<span className="balloons">
				<img src={'https://res.cloudinary.com/okafohenrie/image/upload/v1589195014/fxemoji_balloon_dxd30c.png'} 
				alt={'header_icon'}
				className="balloon_1" />

				<img src={'https://res.cloudinary.com/okafohenrie/image/upload/v1589195014/noto-v1_balloon_zzs6if.png'} 
				alt={'header_icon'}
				className="balloon_2" />
			</span>
		</div>
	</center>
);

export default Header;