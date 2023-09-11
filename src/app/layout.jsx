import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import UploadModal from '@/components/UploadModal';
import { NextAuthProvider } from './providers';
import { RecoilRootWrapper } from './recoilrootwrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Instagram',
	description: 'Instagram clone created with next js 13',
};

export default function RootLayout({ children, session }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextAuthProvider session={session}>
					<RecoilRootWrapper>
						{/* Header */}
						<Header />
						{/* Feed */}
						{children}
						{/* Modal */}
						<UploadModal />
					</RecoilRootWrapper>
				</NextAuthProvider>
			</body>
		</html>
	);
}
