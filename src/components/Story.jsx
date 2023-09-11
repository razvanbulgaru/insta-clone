/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { HiPlus } from 'react-icons/hi';

const Story = ({ username, img, isUser }) => {
	return (
		<div className="group cursor-pointer relative">
			<img
				src={img}
				alt={username}
				className="h-14 rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-out"
			/>
			{isUser && (
				<HiPlus className="text-white absolute top-4 left-4 text-2xl group-hover:scale-110 transition-transform duration-200 ease-out" />
			)}
			<p className="text-xs w-14 truncate">{username}</p>
		</div>
	);
};

export default Story;
