import { setBlurDataUrl } from '@pd-frontend/utils/shimmer';
import { ReactNode } from 'react';
import Image from 'next/image';

type Props = {
	src: string;
	width: number;
	height: number;
	alt: string;
	containerStyle?: string;
	caption?: string | ReactNode;
	captionStyle?: string;
};

export const PageImage = ({
	src,
	width,
	height,
	alt,
	caption,
	containerStyle = 'max-w-[200px] mx-auto',
	captionStyle
}: Props): JSX.Element => (
	<figure className={`${containerStyle}`}>
		<Image
			src={src}
			width={width}
			height={height}
			alt={alt}
			placeholder="blur"
			blurDataURL={setBlurDataUrl(width, height)}
		/>
		{caption && (
			<figcaption className={`${captionStyle}`}>{caption}</figcaption>
		)}
	</figure>
);
