type Props = {
	error: Error;
	resetErrorBoundary: () => void;
};

export const ErrorScreen = ({ error }: Props) => {
	return (
		<div className="rounded-md py-3 px-4 bg-white ring-1 ring-slate-200 shadow-sm">
			<div className="inline-flex flex-col gap-2">
				<h2 className="text-xl text-red-500">
					We are sorry... something went wrong!
				</h2>
				<p className="text-gray-500">An error occurred.</p>
				<details>
					<summary className="font-bold">Error:</summary>
					<p>{error.message}</p>
				</details>
			</div>
		</div>
	);
};
