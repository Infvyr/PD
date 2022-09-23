import { PropsWithChildren } from 'react';

export const FormHeader = ({ children }: PropsWithChildren): JSX.Element => (
	<header className="mt-5 mb-10 text-center">{children}</header>
);
