import { ReactComponent as LogoImage } from '/public/assets/images/svg/logo.svg';
import { Support } from '@pd-frontend/layout/header/Support';
import Link from 'next/link';

export const ErrorHeader = (): JSX.Element => (
	<header className="px-7 pt-2 pb-2.5 sm:py-5 border-b border-amber-400">
		<div className="container mx-auto flex items-center justify-between gap-4">
			<Link href="/" passHref>
				<a>
					<span className="basis-1/3 h-6 md:h-14">
						<LogoImage className="w-full h-[inherit]" />
					</span>
				</a>
			</Link>
			<Support
				buttonStyles="h-6 inline-flex items-center md:h-[51px]"
				panelStyles="top-10 -right-3 md:top-20"
			/>
		</div>
	</header>
);
