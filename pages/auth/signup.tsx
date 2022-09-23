import {
	Button,
	FormCheckbox,
	FormInput,
	FormPasswordInput,
	PhoneNumberInput
} from '@pd-frontend/components';
import { RegisterSchema } from '@pd-frontend/config/validation-schemas/register.schema';
import { useAuth } from '@pd-frontend/hooks';
import { FormHeader } from '@pd-frontend/modules/authentication/components';
import Link from 'next/link';
import { ReactElement, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterCredentials } from '@pd-frontend/interfaces/Register.interface';
import styles from '@pd-frontend/styles/pages/admin.module.css';
import { ReactComponent as RegisterImage } from '/public/assets/images/svg/register.svg';

const DynamicAdminHeader = dynamic(() => import('../../layout/header/Admin'), {
	ssr: false
});

const SignUpPage = () => {
	const { onSignUp } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState,
		formState: { errors, isSubmitting, isValid }
	} = useForm<RegisterCredentials>({
		mode: 'onChange',
		resolver: yupResolver(RegisterSchema)
	});

	const fieldErrors = {
		nameError: errors.name?.message,
		emailError: errors.email?.message,
		phoneError: errors.phone?.message,
		passwordError: errors.password?.message,
		confirmPasswordError: errors.confirmPassword?.message,
		termsError: errors.terms?.message
	};

	const onSubmit: SubmitHandler<RegisterCredentials> = async (data) => {
		await onSignUp(data);
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState, reset]);

	return (
		<div className="py-12 lg:py-[67px] w-full">
			<div className="flex-align">
				<div className="card card-md">
					<FormHeader>
						<RegisterImage className="inline-block" />
					</FormHeader>

					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						<div className="flex flex-col">
							<FormInput
								name="name"
								placeholder="Name"
								type="text"
								register={register}
								error={fieldErrors.nameError}
							/>

							<FormInput
								name="email"
								placeholder="Email"
								type="email"
								register={register}
								error={fieldErrors.emailError}
								wrapperHeightClassName="h-[75px]"
							/>

							<hr className="mb-5 mx-auto max-w-[188px] w-full block h-px border-0 bg-primary" />

							<div className="mb-5 h-[50px]">
								<Controller
									control={control}
									name="phone"
									rules={{ required: true }}
									render={({ field: { ref, ...field } }) => (
										<PhoneNumberInput
											{...field}
											phoneError={fieldErrors.phoneError}
											value={field.value}
											onChange={field.onChange}
											inputHeight="!h-[43px]"
										/>
									)}
								/>
							</div>

							<hr className="mb-5 mx-auto max-w-[188px] w-full block h-px border-0 bg-primary" />

							<FormPasswordInput
								name="password"
								placeholder="Password"
								register={register}
								error={fieldErrors.passwordError}
							/>

							<FormPasswordInput
								name="confirmPassword"
								placeholder="Repeat your password"
								register={register}
								error={fieldErrors.confirmPasswordError}
							/>

							<FormCheckbox
								error={fieldErrors.termsError}
								register={register}
								name="terms"
								id="terms"
								ariaLabel="Agree to the terms and conditions"
							>
								<span className="mr-1" aria-hidden>
									I agree to the
								</span>
								<Link href="/terms-and-conditions" passHref>
									<a
										title="Terms and conditions"
										className="underline text-primary hover:text-secondary"
										target="_blank"
									>
										Terms & Conditions
									</a>
								</Link>
							</FormCheckbox>
						</div>

						<Button
							aria-label="Register"
							label="Register"
							className="btn btn-sm btn-form flex-align gap-2"
							isLoading={isSubmitting}
							isValid={isValid}
							disabled={isSubmitting || !isValid}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader />
			<main className={styles['auth-page']}>{page}</main>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default SignUpPage;
