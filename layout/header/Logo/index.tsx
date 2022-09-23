import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactComponent as LogoImage } from '/public/assets/images/svg/logo.svg';

export const Logo = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			{router.route === '/' ? (
				<span className="place-items-center">
					<LogoImage />
				</span>
			) : (
				<Link href="/" passHref>
					<a
						title="Proovia Delivery"
						className="inline-flex md:inline-block m-auto w-[84px] sm:w-[unset] "
					>
						<LogoImage />
					</a>
				</Link>
			)}
		</>
	);
};
