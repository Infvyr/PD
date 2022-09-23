import { Items } from '@pd-frontend/layout/home/whyChooseUs/types';

export const Card = ({ icon, title, description }: Items) => (
	<figure
		className="grid grid-cols-[33px_1fr] gap-3 focus-visible:ring focus-visible:ring-primary focus-visible:rounded-lg md:grid-cols-[50px_1fr]"
		tabIndex={0}
		aria-label={`The title of the column is ${title}`}
	>
		<div className="flex-align rounded-full shadow-icon w-8 h-8 md:w-[51px] md:h-[51px] md:p-2">
			{icon}
		</div>
		<div className="sm:pt-0.5 md:pt-3 space-y-4">
			<h3 className="font-bold uppercase text-secondary text-xl md:text-2xl">
				{title}
			</h3>
			<p className="font-light text-gray-500">{description}</p>
		</div>
	</figure>
);
