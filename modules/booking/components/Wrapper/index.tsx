import { RecoilRoot } from 'recoil';
import { AddressForm, GoToBooking } from '@pd-frontend/modules/booking';

const BookingWrapper = (): JSX.Element => {
	return (
		<RecoilRoot>
			<div className="h-[120px]">
				<AddressForm />
				<GoToBooking />
			</div>
		</RecoilRoot>
	);
};

export default BookingWrapper;
