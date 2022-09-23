import { Card } from '@pd-frontend/layout/home/services/Card';
import { ITEMS } from '@pd-frontend/layout/home/services/data';

const SectionServices = (): JSX.Element => (
	<section data-section="service" className="py-12 md:pt-[58px] md:pb-[70px]">
		<div className="container mx-auto">
			<div className="text-center mb-8 md:mb-20">
				<h2 className="section-title mb-5">our services</h2>
				<h3 className="section-subtitle uppercase">
					Lorem ipsum dolor sit amet
				</h3>
			</div>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-[27px] xl:ml-[-30px] xl:mr-[-30px]">
				{ITEMS.map(({ id, image, title, description }) => (
					<Card
						id={id}
						key={id}
						image={image}
						title={title}
						description={description}
					/>
				))}
			</div>
		</div>
	</section>
);

export default SectionServices;
