import { Button } from '@pd-frontend/components';

const Newsletter = (): JSX.Element => {
	return (
		<>
			<h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-center md:text-left">
				Subscribe to Newsletter & Offers
			</h2>
			<div className="flex items-center relative">
				<input
					type="email"
					className="rounded-full border border-gray-600 h-[45px] md:h-[61px] py-3 pl-6 pr-[164px] w-full text-gray-400 2xl:text-lg"
					name="email"
					placeholder="Your email address"
				/>
				<Button
					aria-label="Subscribe to the newsletter"
					type="button"
					label="Subscribe"
					className="btn bg-gradient-to-tl py-[22px] px-7 md:px-11 absolute top-0 right-0 h-[45px] md:h-[61px_!important] flex-align"
				/>
			</div>
		</>
	);
};

export default Newsletter;
