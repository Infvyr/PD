import dynamic from 'next/dynamic';
import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';

export const Dynamic = {
	AutocompletePickUp: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/booking/addresses/Autocomplete/PickUp'),
				'AutocompletePickUp'
			),
		{
			ssr: false
		}
	),
	AutocompleteDropOff: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/booking/addresses/Autocomplete/DropOff'),
				'AutocompleteDropOff'
			),
		{
			ssr: false
		}
	),
	ScrollDots: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/booking/addresses/ScrollDots'),
				'ScrollDots'
			),
		{ ssr: false }
	),
	RangeCalendar: dynamic(
		() =>
			importNamedComponent(
				import('@pd-frontend/modules/booking/calendar/RangeCalendar'),
				'RangeCalendar'
			),
		{ ssr: false }
	)
};
