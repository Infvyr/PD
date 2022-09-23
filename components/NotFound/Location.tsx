import { ReactComponent as WrongPinIcon } from '/public/assets/images/svg/pin-wrong.svg';

export const NotFoundLocation = () => {
	return (
		<div className="py-4 h-[94px] absolute top-[60px] left-0 w-full flex-align flex-col gap-y-1 shadow-booking-form drop-shadow-booking-form rounded-20 bg-white">
			<div className="w-[29px] h-[34px]">
				<WrongPinIcon />
			</div>
			<p className="text-[15px] xxl:text-base">Location not found</p>
		</div>
	);
};
