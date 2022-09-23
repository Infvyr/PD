import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';
import dynamic from 'next/dynamic';

export const Dynamic = {
	MobileView: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-order/history/components'),
				'MobileView'
			),
		{
			ssr: false
		}
	),
	DefaultView: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-order/history/components'),
				'DefaultView'
			),
		{
			ssr: false
		}
	),
	DefaultPanel: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-order/history/components'),
				'DefaultPanel'
			),
		{
			ssr: false
		}
	),
	TableMoreInfoMobile: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/client-order/history/components'),
				'TableMoreInfoMobile'
			),
		{
			ssr: false
		}
	)
};
