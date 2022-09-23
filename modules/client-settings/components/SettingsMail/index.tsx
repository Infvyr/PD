import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@pd-frontend/components/Button';
import { FormInput } from '@pd-frontend/components/Form/Input';
import { ClientMailSettingsSchema } from '@pd-frontend/config/validation-schemas/client-mail-settings.schema';
import { SettingEmail } from '@pd-frontend/interfaces/settings/SettingsMail.interface';
import {
	OtpCode,
	SettingsHeader,
	SettingsLayout
} from '@pd-frontend/modules/client-settings/components';
import { SettingsStore } from '@pd-frontend/modules/client-settings/features/settings/settingsState';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Dynamic } from '@pd-frontend/modules/client-settings/components/dynamic-export';
import { delay } from '@pd-frontend/utils/delay';

export const SettingsMail = (): JSX.Element => {
	const [, setIsActive] = useRecoilState(SettingsStore);
	const {
		register,
		handleSubmit,
		getValues,
		reset,
		formState,
		formState: { errors, isSubmitting, isValid }
	} = useForm<SettingEmail>({
		mode: 'onChange',
		resolver: yupResolver(ClientMailSettingsSchema)
	});
	const otpInputValue = getValues('otpCode');
	const emailError = errors.email?.message;
	const otpCodeError = errors.otpCode?.message;

	const onSubmit: SubmitHandler<SettingEmail> = async (data) => {
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
				title="Change mail"
				onBack={() => setIsActive('settings')}
			/>

			<SettingsLayout>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-y-3.5">
						<FormInput
							name="email"
							placeholder="Enter new email"
							type="email"
							register={register}
							error={emailError}
							wrapperHeightClassName="h-10"
							classNameInput="h-8 indent-3"
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
			</SettingsLayout>

			{isSubmitting && <Dynamic.MessageSuccess />}
		</>
	);
};
