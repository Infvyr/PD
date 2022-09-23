import dynamic from 'next/dynamic';
import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';

export const Dynamic = {
	ErrorScreen: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/components/ErrorScreen'),
				'ErrorScreen'
			),
		{
			ssr: false
		}
	),
	CookieNotice: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/components/CookieNotice'),
				'CookieNotice'
			),
		{
			ssr: false
		}
	),
	Loader: dynamic(
		() =>
			importNamedComponent(import('@pd-frontend/components/Loader'), 'Loader'),
		{
			ssr: false
		}
	),
	NotFound: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/components/NotFound'),
				'NotFound'
			),
		{
			ssr: false
		}
	),
	NotFoundLocation: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/components/NotFound/Location'),
				'NotFoundLocation'
			),
		{
			ssr: false
		}
	),
	WarningMessage: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/components/NotFound/WarningMessage'),
				'WarningMessage'
			),
		{
			ssr: false
		}
	),
	CustomHead: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/components/CustomHead'),
				'CustomHead'
			),
		{
			ssr: false
		}
	),
	Shimmer: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/components/Shimmer'),
				'Shimmer'
			),
		{
			ssr: false
		}
	)
};
