import { Fragment } from 'react';
import { ReactComponent as StarIcon } from '/public/assets/images/svg/star.svg';

type Props = {
	rating: number;
};

export const Rating = ({ rating }: Props): JSX.Element => {
	const starArray = [...Array(rating).keys()].map((i) => i + 1);

	return (
		<div className="inline-flex gap-2 items-center">
			{starArray.map((i) => (
				<Fragment key={i}>
					<StarIcon />
				</Fragment>
			))}
		</div>
	);
};
