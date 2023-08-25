/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([]);
	useEffect(() => {
		const suggestions = minifaker.array(5, (i) => ({
			username: minifaker.username({ locale: 'en' }).toLowerCase(),
			jobTitle: minifaker.jobTitle(),
			img: `https://i.pravatar.cc/150?img=${Math.ceil(
				Math.random() * 70
			)}`,
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between mb-5 text-sm">
				<h3 className="font-bold text-gray-400">Suggestions for you</h3>
				<button className="text-gray-600 font-semibold">See all</button>
			</div>
			{suggestions.map((suggestion) => (
				<div
					key={suggestion.id}
					className="flex justify-between items-center mt-3"
				>
					<img
						src={suggestion.img}
						alt={suggestion.username}
						className="h-10 rounded-full p-[2px] border"
					/>
					<div className="flex-1 ml-4">
						<h2 className="font-semibold text-sm">
							{suggestion.username}
						</h2>
						<h3 className="text-sm text-gray-400 truncate w-[230px]">
							{suggestion.jobTitle}
						</h3>
					</div>
					<button className="font-semibold text-blue-400 text-sm">
						Follow
					</button>
				</div>
			))}
		</div>
	);
};

export default Suggestions;
