import { Dialog } from '@headlessui/react';
import { SettingsContent } from '@pd-frontend/modules/client-settings/components';
import { SettingsStore } from '@pd-frontend/modules/client-settings/features/settings/settingsState';
import { useRecoilValue } from 'recoil';
import { Dynamic } from '@pd-frontend/modules/client-settings/components/dynamic-export';

type Props = {
	open: boolean;
	onClose: () => void;
};

export const SettingsDialog = ({ open, onClose }: Props): JSX.Element => {
	const currentSetting = useRecoilValue(SettingsStore);

	return (
		<Dialog open={open} onClose={onClose} className="relative z-50">
			<div className="fixed inset-0 bg-black/20" aria-hidden="true" />

			<div className="fixed inset-0 flex items-center justify-center p-4">
				<Dialog.Panel className="relative mx-auto p-5 max-w-full w-full min-h-[276px] rounded-20 bg-white dropShadow-440 shadow-settings-dialog md:max-w-sm overflow-hidden">
					{currentSetting === 'settings' && <SettingsContent />}
					{currentSetting === 'phone' && <Dynamic.SettingsPhone />}
					{currentSetting === 'mail' && <Dynamic.SettingsMail />}
					{currentSetting === 'notifications' && (
						<Dynamic.SettingsNotifications />
					)}
					{currentSetting === 'password' && <Dynamic.SettingsPassword />}
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
