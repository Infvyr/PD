import Link from 'next/link';
import { ReactComponent as UserIcon } from '/public/assets/images/svg/user.svg';

export const Profile = (): JSX.Element => {
	return (
		<Link href="/auth/signin" passHref>
			<a
				aria-label="Go to sign in page"
				className="flex-align w-8 h-8 lg:w-[51px] lg:h-[51px] bg-white shadow-icon rounded-full transition-shadow hover:shadow-sm"
				title="Sign In"
			>
				<UserIcon className="w-5 h-5 lg:w-8 xl:h-8" />
			</a>
		</Link>
	);
};
