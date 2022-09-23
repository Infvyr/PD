import { ReactComponent as ChevronLeftIcon } from '/public/assets/images/svg/chevron-left.svg';
import { Dialog } from '@headlessui/react';
import { IconButton } from '@pd-frontend/components/IconButton';

type Props = {
	title: string;
	onBack?: () => void;
};

export const SettingsHeader = ({
	title = 'Settings',
	onBack
}: Props): JSX.Element => {
	return (
		<header className="mb-6 inline-flex items-center w-full">
			{title !== 'Settings' && (
				<span className="grow shrink basis-6 text-center">
					<IconButton
						ariaLabel="Back to settings"
						btnSize="xs"
						icon={<ChevronLeftIcon className="w-3 h-3" />}
						onClick={onBack}
					/>
				</span>
			)}
			<Dialog.Title className="w-full text-center text-primary text-[19px] font-bold">
				{title}
			</Dialog.Title>
		</header>
	);
};
