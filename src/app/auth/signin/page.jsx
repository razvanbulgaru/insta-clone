/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

const Signin = async () => {
	const providers = await getProviders();

	return (
		<>
			<div className="flex justify-center space-x-7 mt-20">
				<img
					src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png"
					alt="instagram"
					className="hidden object-cover rotate-6 md:inline-flex md:w-48"
				/>
				<div className="flex flex-col items-center">
					<img
						src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-File-1.png"
						alt="instagram logo"
						className="w-32 object-cover"
					/>
					<p className="text-sm italic my-10 text-center">
						This app is created for learning purposes
					</p>
					{Object.values(providers).map((provider) => (
						<div key={provider.name} className="">
							<button
								onClick={() =>
									signIn(provider.id, { callbackUrl: '/' })
								}
								className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Signin;
