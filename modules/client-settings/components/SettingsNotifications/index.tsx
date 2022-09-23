import { Button } from '@pd-frontend/components/Button';
import { SettingNotification } from '@pd-frontend/interfaces/settings/SettingsNotifications.interface';
import {
	SettingsHeader,
	SettingsLayout
} from '@pd-frontend/modules/client-settings/components';
import { SettingsStore } from '@pd-frontend/modules/client-settings/features/settings/settingsState';
import { delay } from '@pd-frontend/utils/delay';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Dynamic } from '@pd-frontend/modules/client-settings/components/dynamic-export';

export const SettingsNotifications = (): JSX.Element => {
	const [, setIsActive] = useRecoilState(SettingsStore);
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { isSubmitting, isValid }
	} = useForm<SettingNotification>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<SettingNotification> = async (data) => {
		try {
			await delay(1000);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState, reset]);

	return (
		<>
			<SettingsHeader
				title="Notifications"
				onBack={() => setIsActive('settings')}
			/>

			<SettingsLayout>
				<form onSubmit={handleSubmit(onSubmit)}>
					<ul className="flex flex-wrap gap-y-3.5">
						<li className="checkbox-wrapper relative inline-flex items-center">
							<label
								htmlFor="orderStatus"
								className="font-light cursor-pointer leading-none"
								aria-label="Check order status input for getting notifications"
							>
								<input
									type="checkbox"
									id="orderStatus"
									className="custom-checkbox"
									{...register('orderStatus')}
								/>
								<span className="checkmark" />

								<span aria-hidden>order status</span>
							</label>
						</li>

						<li className="checkbox-wrapper relative inline-flex items-center">
							<label
								htmlFor="personalData"
								className="font-light cursor-pointer leading-none"
								aria-label="Check modification of personal data input for getting notifications"
							>
								<input
									type="checkbox"
									id="personalData"
									className="custom-checkbox"
									{...register('personalData')}
								/>
								<span className="checkmark" />

								<span aria-hidden>modification of personal data</span>
							</label>
						</li>

						<li className="checkbox-wrapper relative inline-flex items-center grow basis-full">
							<label
								htmlFor="unforeseenSituations"
								className="font-light cursor-pointer leading-none"
								aria-label="Check unforeseen situations input for getting notifications"
							>
								<input
									type="checkbox"
									id="unforeseenSituations"
									className="custom-checkbox"
									{...register('unforeseenSituations')}
								/>
								<span className="checkmark" />

								<span aria-hidden>unforeseen situations</span>
							</label>
						</li>

						<li className="checkbox-wrapper relative inline-flex items-center grow basis-1/4">
							<label
								htmlFor="offers"
								className="font-light cursor-pointer leading-none"
								aria-label="Check offers input for getting notifications"
							>
								<input
									type="checkbox"
									id="offers"
									className="custom-checkbox"
									{...register('offer')}
								/>
								<span className="checkmark" />

								<span aria-hidden>offers</span>
							</label>
						</li>

						<li className="checkbox-wrapper relative inline-flex items-center grow basis-1/4 ml-2.5">
							<label
								htmlFor="newsletter"
								className="font-light cursor-pointer leading-none"
								aria-label="Check newsletter input for getting notifications"
							>
								<input
									type="checkbox"
									id="newsletter"
									className="custom-checkbox"
									{...register('newsletter')}
								/>
								<span className="checkmark" />

								<span aria-hidden>newsletter</span>
							</label>
						</li>

						<li className="checkbox-wrapper relative inline-flex items-center grow basis-1/4 ml-10">
							<label
								htmlFor="news"
								className="font-light cursor-pointer leading-none"
								aria-label="Check news input for getting notifications"
							>
								<input
									type="checkbox"
									id="news"
									className="custom-checkbox"
									{...register('news')}
								/>
								<span className="checkmark" />

								<span aria-hidden>news</span>
							</label>
						</li>
					</ul>

					<footer className="mt-10 mb-5">
						<Button
							label="Update"
							aria-label="Update settings"
							isValid={isValid}
							isLoading={isSubmitting}
							className="btn btn-xs btn-form btn-outline flex-align gap-x-2 capitalize font-bold disabled:!bg-transparent disabled:!text-primary"
							disabled={isSubmitting || !isValid}
							loadingText="Updating.."
						/>
					</footer>
				</form>
			</SettingsLayout>

			{isSubmitting && <Dynamic.MessageSuccess />}
		</>
	);
};
