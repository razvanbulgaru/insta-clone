/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { PiChatCircleDotsLight } from 'react-icons/pi';
import { BsBookmark } from 'react-icons/bs';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

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
			{/* Post buttons */}
			<div className="flex justify-between px-4 pt-4">
				<div className="flex space-x-4">
					<AiOutlineHeart className="btn" />
					<PiChatCircleDotsLight className="btn" />
				</div>
				<BsBookmark className="btn" />
			</div>
			{/* Post comments */}
			<p className="p-5 truncate">
				<span className="font-bold mr-2">{username}</span>
				{caption}
			</p>
			{/* Post input box */}
			<form className="flex items-center p-4">
				<HiOutlineEmojiHappy className="text-3xl" />
				<input
					type="text"
					placeholder="Enter your comment..."
					className="border-none flex-1 focus:ring-0"
				/>
				<button type="submit" className="text-blue-400 font-bold">
					Post
				</button>
			</form>
		</div>
	);
};

export default Post;
