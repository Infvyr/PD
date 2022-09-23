import { Button, FormInput, FormPasswordInput } from '@pd-frontend/components';
import { LoginSchema } from '@pd-frontend/config/validation-schemas/login.schema';
import { useAuth } from '@pd-frontend/hooks';
import { LoginCredentials } from '@pd-frontend/interfaces/Login.interface';
import {
	FormFooterRecovery,
	FormHeader
} from '@pd-frontend/modules/authentication/components';
import { ReactElement, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '@pd-frontend/styles/pages/admin.module.css';
import { ReactComponent as LoginImage } from '/public/assets/images/svg/login.svg';

const DynamicAdminHeader = dynamic(
	() => import('@pd-frontend/layout/header/Admin'),
	{
		ssr: false
	}
);

const SignInPage = () => {
	const { onSignIn } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors, isSubmitting, isValid }
	} = useForm<LoginCredentials>({
		mode: 'onChange',
		resolver: yupResolver(LoginSchema)
	});

	const fieldErrors = {
		emailError: errors.email?.message,
		passwordError: errors.password?.message
	};

	const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
		await onSignIn(data);
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState, reset]);

	return (
		<div className="py-12 lg:py-[67px] w-full">
			<div className="flex-align">
				<div className="card card-md bg-white">
					<FormHeader>
						<LoginImage className="inline-block" />
					</FormHeader>

					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						<div className="flex flex-col">
							<FormInput
								name="email"
								placeholder="Email"
								type="email"
								register={register}
								error={fieldErrors.emailError}
							/>

							<FormPasswordInput
								name="password"
								placeholder="Password"
								register={register}
								error={fieldErrors.passwordError}
							/>
						</div>
						<Button
							aria-label="Sign in"
							label="Login"
							className="btn btn-sm btn-form flex-align gap-2"
							isLoading={isSubmitting}
							isValid={isValid}
							disabled={isSubmitting || !isValid}
						/>
					</form>

					<FormFooterRecovery />
				</div>
			</div>
		</div>
	);
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader />
			<main className={styles['auth-page']}>{page}</main>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default SignInPage;
