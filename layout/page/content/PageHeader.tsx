import { setBlurDataUrl } from '@pd-frontend/utils/shimmer';
import Image from 'next/image';

type Props = {
	imgSrc: string;
	imgAlt: string;
	imgWidth: number;
	imgHeight: number;
};

const PageHeader = ({
	imgSrc,
	imgAlt,
	imgHeight,
	imgWidth
}: Props): JSX.Element => {
	return (
		<figure className="pt-9 lg:pt-[42px] sm:pb-8 lg:pb-[32px] text-center mx-auto max-w-[80%] sm:max-w-full">
			<Image
				src={imgSrc}
				width={imgWidth}
				height={imgHeight}
				alt={imgAlt}
				placeholder="blur"
				blurDataURL={setBlurDataUrl(imgWidth, imgHeight)}
			/>
		</figure>
	);
};

export default PageHeader;
