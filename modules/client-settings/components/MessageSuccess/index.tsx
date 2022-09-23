import { ReactComponent as CheckIcon } from '/public/assets/images/svg/check.svg';
import {
	updatedSuccessfullyAnimate,
	updatedSuccessfullyInitial,
	updatedSuccessfullyTransition
} from '@pd-frontend/animations/updated-successfully';
import { domAnimation, LazyMotion, m } from 'framer-motion';

export const MessageSuccess = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={updatedSuccessfullyInitial}
				animate={updatedSuccessfullyAnimate}
				transition={updatedSuccessfullyTransition}
				className="absolute top-0 left-0 w-full h-full flex-align flex-col rounded-20 p-5 bg-green-300/70"
			>
				<CheckIcon className="w-10 h-10 z-10 fill-green-900" />
				<b className="text-green-900">Updated</b>
			</m.div>
		</LazyMotion>
	);
};
