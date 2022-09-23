import { ReactComponent as NotificationIcon } from '/public/assets/images/svg/notification.svg';
import { ReactComponent as GearIcon } from '/public/assets/images/svg/gear.svg';
import { ButtonGroup, IconButton } from '@pd-frontend/components';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Dynamic } from '@pd-frontend/modules/client-settings/components/dynamic-export';

export const ButtonsAction = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<ButtonGroup>
				<IconButton
					ariaLabel="Show notifications"
					icon={<NotificationIcon className="w-4 h-5" />}
					hasBadge
					badgeText="2"
				/>
				<IconButton
					ariaLabel="Personal settings"
					icon={<GearIcon />}
					onClick={() => setIsOpen(true)}
				/>
			</ButtonGroup>

			<RecoilRoot>
				<Dynamic.SettingsDialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
				/>
			</RecoilRoot>
		</>
	);
};
