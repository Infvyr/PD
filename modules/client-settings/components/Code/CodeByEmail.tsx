export const CodeByEmail = () => {
	const handleOnClick = () => {};

	return (
		<button
			aria-label="Send the code to the registered email"
			className="uppercase text-[11px] hover:text-secondary focus:text-secondary"
			type="button"
			onClick={handleOnClick}
		>
			Send by mail
		</button>
	);
};
