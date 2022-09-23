type Props = {
	wrapperStyles: string;
};
export const Shimmer = ({ wrapperStyles }: Props) => (
	<div className={wrapperStyles} aria-hidden="true" />
);
