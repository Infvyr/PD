import { ReactNode } from 'react';
import Link from 'next/link';
import { ReactComponent as Google } from '/public/assets/images/svg/google.svg';
import { ReactComponent as Facebook } from '/public/assets/images/svg/facebook.svg';
import { ReactComponent as Twitter } from '/public/assets/images/svg/twitter.svg';

type MediaType = {
	key: string;
	url: string;
	icon: ReactNode;
	title: string;
};

const media: MediaType[] = [
	{
		key: 'facebook-platform',
		url: 'https://www.facebook.com/Proovia-Couriers-323143638035624',
		icon: <Facebook />,
		title: 'Facebook'
	},
	{
		key: 'google-platform',
		url: '/',
		icon: <Google className="grayscale" />,
		title: 'Google'
	},
	{
		key: 'twitter-platform',
		url: '/',
		icon: <Twitter />,
		title: 'Twitter'
	}
];

const SocialMedia = (): JSX.Element => {
	return (
		<ul className="flex items-center gap-2">
			{media.map((m) => (
				<li key={m.key}>
					<Link href={m.url} passHref>
						<a
							title={m.title}
							className="flex-align w-[51px] h-[51px] rounded-full bg-gray-light hover:bg-gray-200"
							target="_blank"
							rel="noreferrer nofollow noopener"
						>
							<span
								className={`h-[18px] flex-align ${
									m.key === 'facebook-platform' ? 'w-6' : 'w-[18px]'
								} `}
							>
								{m.icon}
							</span>
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SocialMedia;
