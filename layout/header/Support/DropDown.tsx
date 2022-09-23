import { ContactMedia, Mail, Phone, WorkingHours } from '@pd-frontend/layout';

const DropDown = (): JSX.Element => (
	<ul className="py-3 pl-[7px] pr-1.5">
		<Phone iconClass="w-[22px] h-[22px]" />
		<Mail iconClass="w-5 h-[22px]" />
		<ContactMedia />
		<WorkingHours />
	</ul>
);

export default DropDown;
