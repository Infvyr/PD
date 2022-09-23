import { Items } from '@pd-frontend/layout/home/services/types';

export const Card = ({ id, image, title, description }: Items) => (
	<article
		className="relative flex flex-col gap-4 md:gap-[22px] focus-visible:ring focus-visible:ring-primary focus-visible:rounded-lg before:content-[''] before:absolute before:left-3 before:bg-primary before:bg-gradient-bar before:w-1 before:h-[220px] md:before:h-[253px] before:bottom-[-1rem] md:before:bottom-0 lg:before:bottom-[-1.25rem]"
		tabIndex={0}
		aria-label={`The title of the column is ${title}`}
	>
		<figure
			className={`bg-white shadow-md flex-align min-h-[285px] bg-no-repeat bg-center ${
				id === 'single-items' && 'bg-[center_bottom_1.5rem]'
			}`}
			style={{ backgroundImage: `url(${image})` }}
		/>

		<div className="space-y-4 pl-[27px]">
			<h3 className="font-bold capitalize text-secondary text-2xl">{title}</h3>
			<p className="text-sm font-light leading-7 text-gray-500 2xl:text-lg">
				{description}
			</p>
		</div>
	</article>
);
