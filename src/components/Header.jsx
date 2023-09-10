/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
	AiOutlineSearch,
	AiOutlinePlusCircle,
	AiFillHome,
} from 'react-icons/ai';

const Header = () => {
	const { data: session } = useSession();
	return (
		<div className="shadow-sm sticky border-b top-0 bg-white z-30">
			<div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
				{/* Left */}
				<div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
					<Link href="/">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
							layout="fill"
							alt="Instagram"
							className="object-contain"
						/>
					</Link>
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
						className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
					/>
				</div>
				{/* Right */}
				<div className="flex space-x-4 items-center">
					<AiFillHome className="hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
					<AiOutlinePlusCircle className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
					{session ? (
						<>
							<img
								onClick={signOut}
								src={session.user.image}
								alt="User image"
								className="h-10 rounded-full cursor-pointer"
							/>
						</>
					) : (
						<button onClick={signIn}>Sign in</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
