import { yupResolver } from '@hookform/resolvers/yup';
import { Button, PhoneNumberInput } from '@pd-frontend/components';
import { ClientPhoneSettingsSchema } from '@pd-frontend/config/validation-schemas/client-phone-settings.schema';
import { SettingPhone } from '@pd-frontend/interfaces/settings/SettingsPhone.interface';
import {
	OtpCode,
	SettingsHeader,
	SettingsLayout
} from '@pd-frontend/modules/client-settings/components';
import { SettingsStore } from '@pd-frontend/modules/client-settings/features/settings/settingsState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { delay } from '@pd-frontend/utils/delay';
import { Dynamic } from '@pd-frontend/modules/client-settings/components/dynamic-export';

export const SettingsPhone = (): JSX.Element => {
	const [, setIsActive] = useRecoilState(SettingsStore);
	const {
		register,
		handleSubmit,
		getValues,
		reset,
		control,
		formState,
		formState: { errors, isSubmitting }
	} = useForm<SettingPhone>({
		mode: 'onChange',
		resolver: yupResolver(ClientPhoneSettingsSchema)
	});
	const otpInputValue = getValues('otpCode');
	const phoneError = errors.phone?.message;
	const otpCodeError = errors.otpCode?.message;

	const onSubmit: SubmitHandler<SettingPhone> = async (data) => {
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
				title="Change phone number"
				onBack={() => setIsActive('settings')}
			/>

			<SettingsLayout>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-y-3.5">
						<Controller
							control={control}
							name="phone"
							rules={{ required: true }}
							render={({ field: { ref, ...field } }) => (
								<PhoneNumberInput
									{...field}
									phoneError={phoneError}
									value={field.value}
									onChange={field.onChange}
								/>
							)}
						/>

						<OtpCode
							register={register}
							inputValue={otpInputValue}
							error={otpCodeError}
						/>
					</div>

					<footer className="mt-10 mb-5">
						<Button
							label="Update"
							aria-label="Update settings"
							isLoading={isSubmitting}
							className="btn btn-xs btn-form btn-outline flex-align gap-x-2 capitalize font-bold disabled:!bg-transparent disabled:!text-primary"
							loadingText="Updating.."
						/>
					</footer>
				</form>
			</SettingsLayout>

			{isSubmitting && <Dynamic.MessageSuccess />}
		</>
	);
};
