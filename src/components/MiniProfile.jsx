/* eslint-disable @next/next/no-img-element */
import React from 'react';

const MiniProfile = () => {
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				src="https://media.licdn.com/dms/image/C4E03AQHkdBvprGDBBw/profile-displayphoto-shrink_800_800/0/1622011196095?e=2147483647&v=beta&t=Ey11EN9bSLaWodByp9757mbYfvpoSX-Pc5MQpi998yo"
				alt="User image"
				className="h-16 rounded-full border p-[2px]"
			/>
			<div className="flex-1 ml-4">
				<h2 className="font-bold">razvan901206</h2>
				<h3 className="text-sm text-gray-400">Welcome to instagram</h3>
			</div>
			<button className="font-semibold text-blue-400 text-sm">
				Sign out
			</button>
		</div>
	);
};

export default MiniProfile;
