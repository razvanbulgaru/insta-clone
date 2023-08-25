import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
	return (
		<div className="flex items-center justify-between max-w-6xl mx-auto">
			{/* Left */}
			<div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
					layout="fill"
					alt="Instagram"
					className="object-contain"
				/>
			</div>
			<div className="h-24 w-10 relative lg:hidden cursor-pointer">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
					layout="fill"
					alt="Instagram"
					className="object-contain"
				/>
			</div>
			{/* Middle */}
			<div className="relative">
				<div className="absolute top-2 left-2">
					<AiOutlineSearch className="text-xl text-gray-500" />
				</div>
				<input
					type="text"
					placeholder="Search"
					className="bg-gray-50 pl-10 border border-gray-500 text-sm h-9 focus:ring-black focus:border-black rounded-md"
				/>
			</div>
			{/* Right */}
			<h1>Right side</h1>
		</div>
	);
};

export default Header;
