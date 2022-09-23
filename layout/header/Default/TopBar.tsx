import Link from 'next/link';

export const TopBar = (): JSX.Element => {
	return (
		<div data-section="top" className="border-b border-gray-600 px-4">
			<div className="container mx-auto px-1 lg:px-2">
				<div className="flex items-center justify-between pt-[26px] pb-[26px]">
					<div className="xs:basis-4/5 basis-0" />
					<div className="flex items-center justify-center">
						<Link href="/" passHref>
							<a
								title="For drivers"
								className="2xl:text-lg group hover:text-primary"
							>
								For&nbsp;
								<b className="font-bold text-gray-600 group-hover:text-primary">
									DRIVERS
								</b>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
