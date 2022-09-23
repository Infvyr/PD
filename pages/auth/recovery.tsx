import { Button, FormInput } from '@pd-frontend/components';
import { ResetPasswordSchema } from '@pd-frontend/config/validation-schemas/resetPassword.schema';
import { ResetPassword } from '@pd-frontend/interfaces/ResetPassword.interface';
import { FormHeader } from '@pd-frontend/modules/authentication/components';
import { delay } from '@pd-frontend/utils/delay';
import { ReactElement, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '@pd-frontend/styles/pages/admin.module.css';
import { ReactComponent as RecoveryImage } from '/public/assets/images/svg/recovery.svg';

const DynamicAdminHeader = dynamic(
	() => import('@pd-frontend/layout/header/Admin'),
	{
		ssr: false
	}
);

const ResetPasswordPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors, isSubmitting, isValid }
	} = useForm<ResetPassword>({
		mode: 'onChange',
		resolver: yupResolver(ResetPasswordSchema)
	});

	const onSubmit: SubmitHandler<ResetPassword> = async (data) => {
		try {
			await delay();
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
		<div className="py-12 lg:py-[67px] w-full">
			<div className="flex-align">
				<div className="card card-md">
					<FormHeader>
						<RecoveryImage className="inline-block" />
					</FormHeader>

					<h2 className="mb-6 font-bold text-primary text-center text-[22px] xxl:text-3xl">
						Password recovery
					</h2>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col">
							<FormInput
								name="email"
								placeholder="Email"
								type="email"
								register={register}
								error={errors.email?.message}
							/>
						</div>
						<Button
							aria-label="Submit"
							label="Submit"
							className="btn btn-sm btn-form flex-align gap-2"
							isLoading={isSubmitting}
							isValid={isValid}
							disabled={isSubmitting || !isValid}
						/>
						<span className="block h-4" />
					</form>
				</div>
			</div>
		</div>
	);
};

ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader backTo="/auth/signin" />
			<main className={styles['auth-page']}>{page}</main>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default ResetPasswordPage;
