import { AddressSuggestion } from '@pd-backend/types';
import { useScroller } from '@pd-frontend/hooks';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import {
	DropOffEntranceSteps,
	DropOffFloorOptions,
	DropOffParkingOptions,
	FormBody,
	FormHeader,
	ScrollDots
} from '@pd-frontend/modules/booking';
import { RefObject, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { useRecoilValue } from 'recoil';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import styles from '@pd-frontend/modules/booking/addresses/Form/style.module.css';

type Props = {
	dropOffAutocompleteRef: RefObject<HTMLDivElement>;
	dropOffValue: string;
	addresses: AddressSuggestion[];
	handleSelectDropOffAddress: (suggestion: string, id: string) => void;
};

export const AutocompleteDropOff = ({
	dropOffAutocompleteRef,
	dropOffValue,
	addresses,
	handleSelectDropOffAddress
}: Props): JSX.Element => {
	const formState = useRecoilValue(FormStore);
	const [scrollElement, setScrollElement] = useState<HTMLElement | null>();
	const callbackRef = (node: HTMLInputElement) => {
		if (node) {
			setScrollElement(document?.getElementById('drop-autocomplete'));
		}
	};

	const { isVisibleOnScrollDown } = useScroller(
		scrollElement as HTMLElement,
		30
	);

	if (addresses?.length === 0 && dropOffValue !== '') {
		return <Dynamic.NotFoundLocation />;
	}

	return (
		<>
			{formState.isVisibleDropOffAutocomplete && (
				<>
					{addresses?.length > 0 && (
						<div ref={dropOffAutocompleteRef}>
							<div className={styles.autocomplete} ref={callbackRef}>
								<div
									id="drop-autocomplete"
									className={`no-scrollbar ${styles['autocomplete-inner']}`}
								>
									{addresses.map((item, idx) => (
										<Disclosure key={idx}>
											{({ open }) => (
												<div className="location-box">
													<FormHeader
														open={open}
														suggestion={item?.suggestion}
														addressId={item?.id}
														selectAddress={() =>
															handleSelectDropOffAddress(
																item?.suggestion,
																item?.id
															)
														}
													/>
													<FormBody>
														<DropOffParkingOptions />
														<DropOffFloorOptions />
														<DropOffEntranceSteps />
													</FormBody>
												</div>
											)}
										</Disclosure>
									))}
								</div>

								{addresses?.length > 6 && isVisibleOnScrollDown && (
									<ScrollDots />
								)}
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};
