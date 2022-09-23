import dynamic from 'next/dynamic';
import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';

export const Dynamic = {
	SettingsDialog: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-settings/components'),
				'SettingsDialog'
			),
		{
			ssr: false
		}
	),
	SettingsPhone: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-settings/components'),
				'SettingsPhone'
			),
		{
			ssr: false
		}
	),
	SettingsMail: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-settings/components'),
				'SettingsMail'
			),
		{
			ssr: false
		}
	),
	SettingsPassword: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-settings/components'),
				'SettingsPassword'
			),
		{
			ssr: false
		}
	),
	SettingsNotifications: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-settings/components'),
				'SettingsNotifications'
			),
		{
			ssr: false
		}
	),
	MessageSuccess: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-settings/components'),
				'MessageSuccess'
			),
		{
			ssr: false
		}
	)
};
