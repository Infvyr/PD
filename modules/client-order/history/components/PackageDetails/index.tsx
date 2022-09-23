import { ReactComponent as DownloadIcon } from '/public/assets/images/svg/doc-download.svg';

export const PackageDetails = (): JSX.Element => {
	return (
		<ul className="inline-flex items-center justify-center gap-1 lg:items-start">
			<li className="mt-0.5 lg:mt-1.5">
				<a href="" title="Download package slip" download>
					<DownloadIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
				</a>
			</li>
			<li className="mt-0.5 lg:mt-1.5">
				<a href="" title="Download package label" download>
					<DownloadIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
				</a>
			</li>
		</ul>
	);
};
