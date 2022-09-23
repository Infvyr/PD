import { ReactElement, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ClientDetailsSchema } from '@pd-frontend/config/validation-schemas/client-details.schema';
import { ClientDetails } from '@pd-frontend/interfaces/ClientDetails.interface';
import {
	ClientLayout,
	FormInput,
	HeaderLayout,
	PhoneNumberInput
} from '@pd-frontend/components';
import {
	ButtonCreateOrder,
	ButtonsAction
} from '@pd-frontend/modules/client-area';
import { PageImage } from '@pd-frontend/layout/page/client/account-page/components';
import { delay } from '@pd-frontend/utils/delay';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/client-details-template.module.css';

const DynamicAdminHeader = dynamic(
	() => import('../../../layout/header/Admin'),
	{
		ssr: false
	}
);

function ClientDetailsPage() {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState,
		formState: { errors }
	} = useForm<ClientDetails>({
		mode: 'onChange',
		resolver: yupResolver(ClientDetailsSchema)
	});

	const fieldErrors = {
		nameError: errors.name?.message,
		phoneError: errors.phone?.message,
		emailError: errors.email?.message
	};

	const onSubmit: SubmitHandler<ClientDetails> = async (data) => {
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
		<ClientLayout cardStyles="bg-white">
			<HeaderLayout>
				<ButtonCreateOrder />
				<ButtonsAction />
			</HeaderLayout>

			<div className={styles.body}>
				<PageImage
					src="/assets/images/svg/user.svg"
					width={60}
					height={63}
					alt="user"
					containerStyle={styles['page-image-container']}
					caption={
						<h1 className="text-primary font-bold text-xl">My Details</h1>
					}
					captionStyle={styles['page-image-caption']}
				/>

				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<div className="flex flex-col">
						<FormInput
							name="name"
							placeholder="Name"
							type="text"
							register={register}
							error={fieldErrors.nameError}
						/>

						<div className="h-[67px]">
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

						<FormInput
							name="email"
							placeholder="Email"
							type="email"
							register={register}
							error={fieldErrors.emailError}
						/>
					</div>
				</form>
			</div>
		</ClientLayout>
	);
}

ClientDetailsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader backTo="/client/account" />
			<main className={classnames['auth-page']}>{page}</main>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default ClientDetailsPage;
