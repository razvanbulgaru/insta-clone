import Image from 'next/image';
import React from 'react';

const Header = () => {
	return (
		<div className="flex items-center justify-between max-w-6xl mx-auto">
			{/* Left */}
			<div>
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
			</div>
			{/* Middle */}
			<div>Middle</div>
			{/* Right */}
			<div>Right side</div>
		</div>
	);
};

export default Header;
