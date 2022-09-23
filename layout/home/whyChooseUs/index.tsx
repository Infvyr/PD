import { Button } from '@pd-frontend/components/Button';
import { Card } from '@pd-frontend/layout/home/whyChooseUs/Card';
import { ITEMS } from '@pd-frontend/layout/home/whyChooseUs/data';

const SectionWhyChooseUs = (): JSX.Element => (
	<section className="py-8 md:py-10">
		<div className="container mx-auto">
			<div className="mx-auto text-center mb-8 md:max-w-xl md:mb-12 2xl:max-w-2xl xl:space-y-4">
				<h2 className="uppercase font-bold text-primary text-3xl leading-normal md:text-[28px] md:leading-[63px]">
					Why choose us?
				</h2>
				<p className="text-gray-500 md:leading-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
					purus sit amet luctus venenatis, lectus magna fringilla urna,
					porttitor
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-8 md:gap-y-14 mb-8 md:mb-12">
				{ITEMS.map(({ id, icon, title, description }) => (
					<Card key={id} icon={icon} title={title} description={description} />
				))}
			</div>
			<div className="text-center my-3">
				<Button
					aria-label="Scroll to the order form"
					label="Order here"
					className="btn"
					onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
				/>
			</div>
		</div>
	</section>
);

export default SectionWhyChooseUs;
