import { ReactComponent as CartIcon } from '/public/assets/images/svg/shopping-car.svg';

type Props = { visible: boolean; totalQty: number };

export const CartTotal = ({
	visible = false,
	totalQty
}: Props): JSX.Element => (
	<div
		className={`${
			visible
				? 'transition-all duration-300 translate-x-[43%] md:translate-x-[70%]'
				: 'w-[76px] h-[48px] translate-x-0 transition-all duration-300'
		}`}
	>
		<CartIcon className="w-[76px] h-[48px]" />
		<b className="text-white text-sm md:text-xl leading-4 absolute left-0 top-[10px] text-center w-[55px] lg:top-[5px]">
			{totalQty}
		</b>
	</div>
);
