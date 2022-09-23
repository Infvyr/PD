import { KEYS } from '@pd-frontend/config/keys';
import { ErrorHeader } from '@pd-frontend/layout/header/Error';
import Image from 'next/image';
import { Dynamic } from '@pd-frontend/components/dynamic-export';

function MaintenancePage() {
	return (
		<>
			<Dynamic.CustomHead title="Maintenance mode" />

			<ErrorHeader />
			<main>
				<figure className="flex-align py-4 lg:py-10">
					<Image
						src={`${KEYS.CDN_URL}/images/maintenance.webp`}
						width={837}
						height={471}
						alt="maintenance"
					/>
				</figure>

				<section className="px-4">
					<div className="py-3 text-center max-w-3xl mx-auto space-y-8">
						<h1 className="text-secondary text-4xl font-bold tracking-wide xl:text-6xl">
							Maintenance Mode
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
			</main>
		</>
	);
}

export default MaintenancePage;
