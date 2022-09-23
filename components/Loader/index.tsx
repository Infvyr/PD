type Props = {
	wrapperStyle?: string;
	widthStyle?: string;
	heightStyle?: string;
	spinnerStyle?: string;
};

export const Loader = ({
	wrapperStyle,
	widthStyle = 'w-16',
	heightStyle = 'h-16',
	spinnerStyle
}: Props): JSX.Element => {
	return (
		<div
			className={`w-full h-full flex items-center justify-center ${
				wrapperStyle ?? ''
			}`}
		>
			<div
				className={`bg-white border-4 border-dashed border-red-600 rounded-full animate-spin ${widthStyle} ${heightStyle} ${
					spinnerStyle ?? ''
				}`}
			/>
		</div>
	);
};
