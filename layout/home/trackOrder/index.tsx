import { ChangeEvent, useState } from 'react';
import { ReactComponent as SearchIcon } from '/public/assets/images/svg/search.svg';

const SectionTrackOrder = (): JSX.Element => {
	const [trackNumber, setTrackNumber] = useState<string>('');
	const [disabled, setDisabled] = useState<boolean>(true);

	const handleClick = () => {
		if (trackNumber) {
			window.open(
				`https://api.proovia.co.uk/order-track/${trackNumber}`,
				'_blank'
			);
		}
	};

	const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const inputValue = target.value?.trim();

		if (inputValue.length <= 3) {
			setDisabled(true);
			setTrackNumber('');
		}

		if (inputValue.length > 3) {
			setDisabled(false);
			setTrackNumber(inputValue);
		}
	};

	return (
		<section
			id="track-order"
			className="bg-gradient-radial-1 text-center pt-10 pb-9"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-3">
					<h2 className="mb-1 text-white text-3xl lg:text-[40px] font-bold uppercase underline underline-offset-4 decoration-2 leading-10">
						track your order
					</h2>
					<div className="relative flex items-center mx-auto max-w-full w-full lg:max-w-[543px] 2xl:max-w-2xl">
						<input
							type="text"
							placeholder="Type your tracking number"
							className="px-7 pr-28 h-16 md:h-[71px] w-full text-sm md:text-base 2xl:text-lg rounded-full transition-shadow hover:shadow-2xl focus-visible:shadow-2xl"
							onChange={handleOnChange}
						/>
						<button
							aria-label="Track your order"
							type="button"
							className={`flex-align absolute right-[-1px] w-[87px] md:h-[71px] rounded-tr-full rounded-br-full transition-shadow transition-colors ${
								!disabled
									? 'bg-gradient-to-b text-white hover:shadow h-[66px] md:h-[73px]'
									: 'bg-gray-light cursor-not-allowed h-[63px]'
							} `}
							disabled={disabled}
							onClick={handleClick}
						>
							<SearchIcon className={!disabled ? 'search-icon-inverted' : ''} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTrackOrder;
