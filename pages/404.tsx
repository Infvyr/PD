import { ErrorHeader } from '@pd-frontend/layout';
import { ReactElement } from 'react';
import Image from 'next/image';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import styles from '@pd-frontend/styles/pages/admin.module.css';

function Page404() {
	return (
		<>
			<Dynamic.CustomHead title="404 error" />

			<div className="container mx-auto">
				<figure className="flex-align py-4 px-4 lg:py-10">
					<Image
						src="/assets/images/svg/404.svg"
						width={772}
						height={308}
						alt="404"
					/>
				</figure>

				<section className="px-4">
					<div className="mb-10 py-3 text-center max-w-3xl mx-auto space-y-8">
						<h1 className="uppercase text-secondary text-4xl font-bold tracking-wide xl:text-6xl">
							Page not found
						</h1>
						<p className="text-[15px] leading-8 md:text-[16px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
							aliquam, purus sit amet luctus venenatis, lectus magna fringilla
							urna, porttitor. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit ut aliquam, purus sit amet luctus venenatis,
							lectus magna fringilla urna, porttitor
						</p>
					</div>
				</section>
			</div>
		</>
	);
}

Page404.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<ErrorHeader />
			<main className={styles['auth-page']}>{page}</main>
		</>
	);
};

export default Page404;
