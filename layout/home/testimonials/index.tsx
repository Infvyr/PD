import { useMediaQuery } from '@pd-frontend/hooks';
import { DesktopTestimonial } from '@pd-frontend/layout/home/testimonials/DesktopTestimonial';
import {
	customSlickStyles,
	defaultSlickStyles
} from '@pd-frontend/layout/home/testimonials/inline-styles';
import { MobileTestimonial } from '@pd-frontend/layout/home/testimonials/MobileTestimonial';

const SectionTestimonials = (): JSX.Element => {
	const isMobile = useMediaQuery('(max-width: 767px)');

	return (
		<>
			{!isMobile && (
				<style>{`${defaultSlickStyles} ${customSlickStyles}`}</style>
			)}
			<section
				data-section="testimonial"
				className="bg-gradient-to-r py-20 xl:pt-[140px] xl:pt-[120px] overflow-hidden"
			>
				<div className="container mx-auto px-0">
					<div
						className={`${
							isMobile ? 'grid grid-cols-1 gap-5' : 'flex flex-col lg:flex-row'
						}`}
					>
						<div className="px-6 lg:w-6/12 2xl:w-4/12 flex-flex-col space-y-6 text-white">
							<h2 className="section-title text-white">Testimonials</h2>
							<h3 className="font-bold text-3xl leading-normal md:text-[42px] md:leading-[48px]">
								What our Customers say about us
							</h3>
							<p className="text-sm leading-7 2xl:text-lg">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
								gravida.
							</p>
						</div>
						{isMobile ? <MobileTestimonial /> : <DesktopTestimonial />}
					</div>
				</div>
			</section>
		</>
	);
};

export default SectionTestimonials;
