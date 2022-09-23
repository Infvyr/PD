import { REVIEWS } from '@pd-frontend/layout/home/testimonials/data';
import { Rating } from '@pd-frontend/layout/home/testimonials/Rating';

export const MobileTestimonial = (): JSX.Element => (
	<div className="ml-6 relative overflow-x-auto min-h-fit no-scrollbar">
		<div className="flex items-start gap-7">
			{REVIEWS.map((review) => (
				<div
					key={review.id}
					className="relative min-w-[260px] snap-start rounded bg-white py-5 px-4 space-y-4 after:content-[''] after:absolute after:left-3 after:bottom-[-14px] after:opacity-20 after:bg-white after:mix-blend-normal after:w-11/12 after:h-[28px] after:rounded-bl-lg after:rounded-br-lg before:content-[''] before:absolute before:left-7 before:bottom-[-28px] before:opacity-30 before:bg-white before:mix-blend-normal before:w-[80%] before:h-[28px] before:rounded-bl-lg before:rounded-br-lg"
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
		</div>
	</div>
);
