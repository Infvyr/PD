import { ReactComponent as IconOne } from '/public/assets/images/svg/personal-approach.svg';
import { ReactComponent as IconTwo } from '/public/assets/images/svg/professional-touch.svg';
import { ReactComponent as IconThree } from '/public/assets/images/svg/do-unusual.svg';
import { ReactComponent as IconFour } from '/public/assets/images/svg/participation-minor.svg';
import { Items } from '@pd-frontend/layout/home/whyChooseUs/types';

export const ITEMS: Items[] = [
	{
		id: 'col-1',
		icon: <IconOne className="md:w-full md:h-full" />,
		title: 'Personal approach',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus mag na fringilla urna, porttitor'
	},
	{
		id: 'col-2',
		icon: <IconTwo className="md:w-full md:h-full" />,
		title: 'Professional touch',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus mag na fringilla urna, porttitor'
	},
	{
		id: 'col-3',
		icon: <IconThree className="md:w-full md:h-full" />,
		title: 'We do unusual and stress jobs with awkward orders',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus mag na fringilla urna, porttitor'
	},
	{
		id: 'col-4',
		icon: <IconFour className="md:w-full md:h-full" />,
		title: 'Your participation is minor',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus mag na fringilla urna, porttitor'
	}
];
