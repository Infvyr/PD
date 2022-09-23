import Link from 'next/link';

export const FormFooterRecovery = (): JSX.Element => (
	<footer className="mt-7 text-center">
		<Link href="/auth/recovery" passHref replace>
			<a
				title="Forgot password"
				className="capitalize font-light text-primary hover:text-secondary hover:underline"
			>
				Forgot password?
			</a>
		</Link>
	</footer>
);
