const SectionContact = (): JSX.Element => (
	<section data-section="contact" className="bg-gradient-to-l text-white">
		<div className="container mx-auto">
			<div className="grid grid-cols-1 gap-10 pt-8 pb-8 md:pb-[14px] md:grid-cols-2">
				<div className="flex flex-col gap-3">
					<h3 className="text-xl 2xl:text-3xl">Lorem ipsum dolor sit amet</h3>
					<p className="text-[13px] leading-4 2xl:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
						purus sit amet luctus venenatis, lectus mag na fringilla urna,
						porttitor
					</p>

					<div className="w-full overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.2445296635424!2d-1.835550661380392!3d52.51091361524282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6750cbe7c2fa9c2f%3A0x48a531bad5d2d0ac!2sProovia%20Couriers!5e0!3m2!1sen!2s!4v1657697767034!5m2!1sen!2s"
							className="w-full h-[260px] sm:h-[325px] border-none"
							allowFullScreen={false}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-10 md:pt-12">
					<h3 className="text-xl font-bold text-center leading-8 lg:text-[28px]">
						Need a Free Moving Estimate?
					</h3>
					<div>
						<h4 className="text-xl text-center leading-8">
							Call Us Toll Free:
						</h4>
						<h3 className="text-[28px] font-bold">
							<a
								href="tel:+441213149848"
								title="Call us"
								className="hover:text-slate-200"
							>
								(+44) 1213149848
							</a>
						</h3>
					</div>
					<div>
						<h4 className="text-xl text-center leading-8">Email:</h4>
						<h3 className="text-[28px] font-bold">
							<a
								href="mailto:support@proovia.co.uk"
								title="Email us"
								className="hover:text-slate-200"
							>
								support@proovia.co.uk
							</a>
						</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default SectionContact;
