import dynamic from 'next/dynamic';

const DynamicPrefooter = dynamic(() => import('../footer/prefooter'), {
	ssr: false
});
const DynamicSocialMedia = dynamic(
	() => import('../../components/SocialMedia'),
	{
		ssr: false
	}
);
const DynamicNewsletter = dynamic(() => import('../../components/Newsletter'), {
	ssr: false
});

export const Footer = (): JSX.Element => {
	const year = new Date().getFullYear();

	return (
		<>
			<DynamicPrefooter />
			<footer>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:place-items-end py-9 md:pt-14 md:pb-[70px]">
						<div className="order-2 md:order-1 justify-self-center md:justify-self-start">
							<div className="flex flex-col gap-4">
								<DynamicSocialMedia />
								<p className="2xl:text-lg">
									&copy;{year} ProoviaDEV {year}
								</p>
							</div>
						</div>
						<div className="order-1 md:order-2 justify-self-center md:justify-self-end w-full">
							<div className="flex flex-col gap-4">
								<DynamicNewsletter />
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
