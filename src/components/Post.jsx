/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const Post = ({ post }) => {
	const { username, id, userImg, img, caption } = post;
	return (
		<div className="bg-white my-7 border rounded-md">
			{/* Post header */}
			<div className="flex items-center p-5">
				<img
					src={userImg}
					alt={username}
					className="h-12 rounded-full object-cover border p-1 mr-3"
				/>
				<p className="font-bold flex-1">{username}</p>
				<BiDotsHorizontalRounded className="text-2xl" />
			</div>
			{/* Post Image */}
			<img src={img} alt={caption} className="object-cover w-full" />
		</div>
	);
};

export default Post;
