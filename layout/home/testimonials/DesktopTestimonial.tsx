import { REVIEWS } from '@pd-frontend/layout/home/testimonials/data';
import { Rating } from '@pd-frontend/layout/home/testimonials/Rating';
import dynamic from 'next/dynamic';

const DynamicCarousel = dynamic(() => import('react-slick'), {
	ssr: false
});

const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnHover: true,
	arrows: false
};

export const DesktopTestimonial = (): JSX.Element => (
	<div className="w-6/12 2xl:8/12">
		<DynamicCarousel {...settings}>
			{REVIEWS.map((review) => (
				<div
					key={review.id}
					className="relative max-w-[335px] pt-[51px] pb-[49px] px-[34px] rounded bg-white space-y-4 after:content-[''] after:absolute after:left-4 after:bottom-[-14px] after:opacity-20 after:bg-white after:mix-blend-normal after:w-11/12 after:h-[28px] after:rounded-bl after:rounded-br before:content-[''] before:absolute before:left-8.5 before:bottom-[-28px] before:opacity-30 before:bg-white before:mix-blend-normal before:w-[81%] before:h-[28px] before:rounded-bl before:rounded-br"
				>
					<Rating rating={review.rating} />
					<blockquote className="text-primary font-bold text-xl">
						{`"${review.title}"`}
					</blockquote>
					<p className="text-gray-400">{review.description}</p>
					<footer className="inline-flex gap-3 pt-6">
						<figure className="flex-align w-[42px] h-[42px] rounded-full bg-gray-200" />
						<span className="mt-2 text-gray-600 font-bold">
							{review.author}
						</span>
					</footer>
				</div>
			))}
		</DynamicCarousel>
	</div>
);
