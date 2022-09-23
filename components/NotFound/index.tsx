import Image from 'next/image';

type Props = {
	containerStyles?: string;
	figureStyles?: string;
	label: string;
};

export const NotFound = ({
	containerStyles = 'my-5',
	figureStyles = 'max-w-[140px]',
	label
}: Props) => {
	return (
		<div className={`flex-align flex-col gap-y-4 ${containerStyles}`}>
			<figure className={`mx-auto ${figureStyles}`}>
				<Image
					src="/assets/images/not-found-img.webp"
					width={625}
					height={478}
					alt="not-found"
				/>
			</figure>
			<p className="text-secondary font-bold text-xs xxl:text-base">{label}</p>
		</div>
	);
};
