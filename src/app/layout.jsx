'use client';
import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Instagram',
	description: 'Instagram clone created with next js 13',
};

export default function RootLayout({ children, session }) {
	return (
		<html lang="en">
			<SessionProvider session={session}>
				<body className={inter.className}>
					{/* Header */}
					<Header />
					{/* Feed */}
					{children}
					{/* Modal */}
				</body>
			</SessionProvider>
		</html>
	);
}
