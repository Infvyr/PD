import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { filterBookingGoodsAtom } from '@pd-frontend/modules/booking/features/cart/category.state';
import { ReactComponent as SearchIcon } from '/public/assets/images/svg/search.svg';

export const Search = (): JSX.Element => {
	const [filter, setFilter] = useRecoilState(filterBookingGoodsAtom);

	const handleSearchInput = (evt: ChangeEvent<HTMLInputElement>) => {
		const inputValue = evt.target.value;
		setFilter(inputValue);
	};

	return (
		<div className="relative">
			<span className="absolute left-3 top-1/2 -translate-y-2/4">
				<SearchIcon className="w-5 h-5" />
			</span>

			<input
				type="search"
				placeholder="Search to add new items..."
				className="pl-10 input bg-gray-100 shadow-none hover:bg-stone-100 focus-visible:bg-stone-100"
				value={filter}
				onChange={handleSearchInput}
			/>
		</div>
	);
};
