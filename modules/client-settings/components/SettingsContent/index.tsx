import {
	SettingsHeader,
	SettingsLayout
} from '@pd-frontend/modules/client-settings/components';
import { SettingsStore } from '@pd-frontend/modules/client-settings/features/settings/settingsState';
import { KeyboardEvent } from 'react';
import { useRecoilState } from 'recoil';

export const SettingsContent = (): JSX.Element => {
	const [, setCurrentSetting] = useRecoilState(SettingsStore);
	const handleOnClick = (value: string) => () => setCurrentSetting(value);
	const handleOnKeyPress =
		(value: string) => (evt: KeyboardEvent<HTMLLIElement>) => {
			if (evt.key === 'Enter' || evt.code === 'Space') {
				setCurrentSetting(value);
			}
		};

	return (
		<>
			<SettingsHeader title="Settings" />
			<SettingsLayout>
				<ul className="flex flex-col gap-y-3">
					<li
						className="input h-8 py-1 leading-normal indent-4"
						role="button"
						aria-label="Ope phone number settings"
						onClick={handleOnClick('phone')}
						onKeyUp={handleOnKeyPress('phone')}
						tabIndex={0}
					>
						Change phone number
					</li>
					<li
						className="input h-8 py-1 leading-normal indent-4"
						role="button"
						aria-label="Open mail settings"
						onClick={handleOnClick('mail')}
						onKeyUp={handleOnKeyPress('mail')}
						tabIndex={0}
					>
						Change mail
					</li>
					<li
						className="input h-8 py-1 leading-normal indent-4"
						role="button"
						aria-label="Open notifications settings"
						onClick={handleOnClick('notifications')}
						onKeyUp={handleOnKeyPress('notifications')}
						tabIndex={0}
					>
						Notifications
					</li>
					<li
						className="input h-8 py-1 leading-normal indent-4"
						role="button"
						aria-label="Open password settings"
						onClick={handleOnClick('password')}
						onKeyUp={handleOnKeyPress('password')}
						tabIndex={0}
					>
						Change the password
					</li>
				</ul>
			</SettingsLayout>
		</>
	);
};
