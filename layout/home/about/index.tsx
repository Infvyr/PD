const SectionAbout = (): JSX.Element => (
	<section data-section="about" className="py-10 md:pt-[50px] md:pb-[90px]">
		<div className="container mx-auto">
			<div className="text-center mb-8 md:mb-16">
				<h2 className="section-title mb-3">about us</h2>
				<h3 className="section-subtitle">Lorem ipsum dolor sit amet</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 xl:grid-cols-[minmax(366px,_0.75fr)_553px] 2xl:grid-cols-[0.5fr_1fr]">
				<div className="flex flex-col gap-3">
					<h3 className="mb-2 text-primary font-bold text-2xl tracking-[-1.5%] 2xl:text-3xl">
						When and how it was created?
					</h3>
					<p className="text-sm text-justify tracking-[-0.015em] 2xl:text-lg">
						Proovia was founded in 2014 as Van and Man.
					</p>
					<p className="text-sm text-justify tracking-[-0.015em] 2xl:text-lg">
						The company&apos;s history began in 2014, when there was only one
						man and a van (Man & Van). Since then, for 7 years the company has
						developed rapidly, reaching now we have 160 employees with
						departments such as customer support, dispatchers, drivers,
						logistics, accounting and claims. We currently have a main hub
						(warehouse) in Birmingham with a fleet of 50 vans. With the help of
						our customers we tend to grow even more and make people happier with
						our services as much as possible. We&apos;re based in Birmingham.
						However this does have specific factors in our job. Birmingham is
						located in the middle of Great Britain, allowing us to cover most
						part of the country. We do not cover islands and Ireland. (Nor
						Republic of Ireland nor Northern Ireland). Please take note that we
						do not cover Scotland’s Highlands due to specifics of this area.
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<h3 className="mb-2 mt-4 text-primary font-bold text-2xl tracking-[-0.015em] md:mt-0 2xl:text-3xl">
						What is our target?
					</h3>
					<p className="text-sm text-justify tracking-[-0.015em] mb-4 2xl:text-lg">
						Our main task is simple: to collect the item or amount of items from
						point A and deliver it to the point B. We do room to room job. As
						example, we will collect fridge from kitchen in Edinburg, and we
						will deliver it to kitchen in London. Just where the customer wants.
					</p>
					<h3 className="mb-2 text-primary font-bold text-2xl tracking-[-0.015em] 2xl:text-3xl">
						What makes us different?
					</h3>
					<p className="text-sm text-justify tracking-[-0.015em] 2xl:text-lg">
						Besides collection and delivery we also do removals, our drivers are
						your friends. They always smile when they process the request, if
						you need to move the item to the first floor, we will not charge you
						for, it will be for free. But the most important thing is that we
						really care about your needs and we try to please you as much as
						possible. Moreover, we’re working every day to update our system and
						grow. At the moment we provide tracking system that allows to check
						progress of the order.
					</p>
					<p className="text-sm text-justify tracking-[-0.015em] 2xl:text-lg">
						So being a company with many vans and specifics routes, we do not
						forget about a personal approach. We want you to not just receive a
						service, but we want to service your needs. It is our main goal to
						be specific with every client and make sure that all awkward and
						difficult stuff is done by us.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default SectionAbout;
