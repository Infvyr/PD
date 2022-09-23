import { PropsWithChildren } from 'react';

export const SettingsLayout = ({
	children
}: PropsWithChildren): JSX.Element => (
	<div className="max-w-[260px] mx-auto"> {children}</div>
);
