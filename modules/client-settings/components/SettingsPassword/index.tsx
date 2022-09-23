import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormPasswordInput } from '@pd-frontend/components';
import { ClientPasswordSettingsSchema } from '@pd-frontend/config/validation-schemas/client-password-settings.schema';
import { SettingPassword } from '@pd-frontend/interfaces/settings/SettingsPassword.interface';
import {
	OtpCode,
	SettingsHeader
} from '@pd-frontend/modules/client-settings/components';
import { SettingsStore } from '@pd-frontend/modules/client-settings/features/settings/settingsState';
import { delay } from '@pd-frontend/utils/delay';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Dynamic } from '@pd-frontend/modules/client-settings/components/dynamic-export';

export const SettingsPassword = (): JSX.Element => {
	const [, setIsActive] = useRecoilState(SettingsStore);
	const {
		register,
		handleSubmit,
		getValues,
		reset,
		formState,
		formState: { errors, isSubmitting, isValid }
	} = useForm<SettingPassword>({
		mode: 'onChange',
		resolver: yupResolver(ClientPasswordSettingsSchema)
	});
	const otpInputValue = getValues('otpCode');
	const passwordError = errors.password?.message;
	const passwordConfirmationError = errors.passwordConfirmation?.message;
	const otpCodeError = errors.otpCode?.message;

	const onSubmit: SubmitHandler<SettingPassword> = async (data) => {
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
				title="Change the password"
				onBack={() => setIsActive('settings')}
			/>

			<div className="max-w-[300px] mx-auto">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-y-3.5">
						<FormPasswordInput
							name="password"
							placeholder="Enter new password"
							register={register}
							error={passwordError}
							wrapperHeightClassName="h-10"
							classNameInput="h-8"
						/>

						<FormPasswordInput
							name="passwordConfirmation"
							placeholder="Repeat your password"
							register={register}
							error={passwordConfirmationError}
							wrapperHeightClassName="h-10"
							classNameInput="h-8"
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
							isValid={isValid}
							isLoading={isSubmitting}
							className="btn btn-xs btn-form btn-outline flex-align gap-x-2 capitalize font-bold disabled:!bg-transparent disabled:!text-primary"
							disabled={isSubmitting || !isValid}
							loadingText="Updating.."
						/>
					</footer>
				</form>
			</div>

			{isSubmitting && <Dynamic.MessageSuccess />}
		</>
	);
};
