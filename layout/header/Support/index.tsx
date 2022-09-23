import { useMediaQuery } from '@pd-frontend/hooks';
import dynamic from 'next/dynamic';
import { Popover } from '@headlessui/react';
import { useRouter } from 'next/router';

const DynamicDropDown = dynamic(() => import('../Support/DropDown'), {
	ssr: false
});

type Props = {
	buttonStyles?: string;
	panelStyles?: string;
};

export const Support = ({ buttonStyles, panelStyles }: Props): JSX.Element => {
	let isMobile = useMediaQuery('(max-width: 991px)');
	const { pathname } = useRouter();
	const isIndexPage = pathname === '/';

	return (
		<>
			{isMobile && isIndexPage ? null : (
				<Popover className="relative justify-self-end">
					{() => (
						<>
							<Popover.Button
								aria-label="Show contact information"
								className={`relative text-[10px] sm:text-base bg-gradient-to-b text-white rounded-full uppercase border-2 border-transparent transition-colors px-3.5 sm:px-4 sm:py-1 lg:px-[45.5px] lg:py-[9.5px] hover:bg-none hover:border-primary hover:text-secondary focus:bg-none focus:border-primary focus:text-secondary focus-visible:ring-0 ${buttonStyles}`}
							>
								Support
							</Popover.Button>
							<Popover.Overlay className="fixed inset-0 bg-black opacity-20 z-[10000]" />
							<Popover.Panel
								className={`absolute right-0 top-20 w-[300px] bg-white rounded-3xl shadow-sm z-[10000] ${panelStyles}`}
							>
								<DynamicDropDown />
							</Popover.Panel>
						</>
					)}
				</Popover>
			)}
		</>
	);
};
