'use client';
import { RecoilRoot } from 'recoil';

export const RecoilRootWrapper = ({ children }) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};
