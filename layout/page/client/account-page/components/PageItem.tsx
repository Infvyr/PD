import { Page } from '@pd-frontend/layout/page/client/account-page/interface';
import Link from 'next/link';

export const PageItem = ({ icon, label, url }: Page): JSX.Element => {
	return (
		<Link href={url} passHref>
			<a
				title={label}
				className="p-1 w-full h-28 sm:w-[120px] xs:h-32 sm:!h-[119px] flex-align flex-col gap-3.5 shadow-card rounded-[20px] group hover:shadow-xl hover:bg-primary"
			>
				<div className="w-9 h-9 flex-align bg-white rounded-full icon-3 drop-shadow-10 transition-colors group-hover:bg-transparent">
					{icon}
				</div>
				<span className="text-primary text-sm group-hover:text-white">
					{label}
				</span>
			</a>
		</Link>
	);
};
