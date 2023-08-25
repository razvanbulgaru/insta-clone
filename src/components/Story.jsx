/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Story = ({ username, img }) => {
	return (
		<div className="group cursor-pointer">
			<img
				src={img}
				alt={username}
				className="h-14 rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-out"
			/>
			<p className="text-xs w-14 truncate">{username}</p>
		</div>
	);
};

export default Story;
