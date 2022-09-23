import { AddressSuggestion } from '@pd-backend/types';
import { useScroller } from '@pd-frontend/hooks';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import {
	FormBody,
	FormHeader,
	PickUpEntranceSteps,
	PickUpFloorOptions,
	PickUpParkingOptions,
	ScrollDots
} from '@pd-frontend/modules/booking';
import { RefObject, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { useRecoilValue } from 'recoil';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import styles from '@pd-frontend/modules/booking/addresses/Form/style.module.css';

type Props = {
	pickUpAutocompleteRef: RefObject<HTMLDivElement>;
	pickupValue: string;
	addresses: AddressSuggestion[];
	handleSelectPickupAddress: (suggestion: string, id: string) => void;
};

export const AutocompletePickUp = ({
	pickUpAutocompleteRef,
	pickupValue,
	addresses,
	handleSelectPickupAddress
}: Props): JSX.Element => {
	const formState = useRecoilValue(FormStore);
	const [scrollElement, setScrollElement] = useState<HTMLElement | null>();
	const callbackRef = (node: HTMLInputElement) => {
		if (node) {
			setScrollElement(document?.getElementById('pickup-autocomplete'));
		}
	};

	const { isVisibleOnScrollDown } = useScroller(
		scrollElement as HTMLElement,
		30
	);

	if (addresses?.length === 0 && pickupValue !== '') {
		return <Dynamic.NotFoundLocation />;
	}

	return (
		<>
			{formState.isVisiblePickUpAutocomplete && (
				<>
					{addresses?.length > 0 && (
						<div ref={pickUpAutocompleteRef}>
							<div className={styles.autocomplete} ref={callbackRef}>
								<div
									id="pickup-autocomplete"
									className={`no-scrollbar ${styles['autocomplete-inner']}`}
								>
									{addresses.map((item, idx) => (
										<Disclosure key={idx}>
											{({ open }) => (
												<div className="address-box">
													<FormHeader
														open={open}
														suggestion={item?.suggestion}
														addressId={item?.id}
														selectAddress={() =>
															handleSelectPickupAddress(
																item?.suggestion,
																item?.id
															)
														}
													/>
													<FormBody>
														<PickUpParkingOptions />
														<PickUpFloorOptions />
														<PickUpEntranceSteps />
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
