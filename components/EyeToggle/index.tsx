import { ReactComponent as IconEyeOff } from '/public/assets/images/svg/eye-off.svg';
import { ReactComponent as IconEye } from '/public/assets/images/svg/eye.svg';

type Props = {
	isVisible: boolean;
	toggleVisibility: () => void;
};
export const EyeToggle = ({ isVisible, toggleVisibility }: Props) => {
	return isVisible ? (
		<span
			role="button"
			aria-label="Show password"
			className="absolute right-3.5 top-2/4 -translate-y-1/2"
			onClick={toggleVisibility}
		>
			<IconEyeOff style={{ stroke: '#808080' }} />
		</span>
	) : (
		<span
			role="button"
			aria-label="Hide password"
			className="absolute right-3.5 top-2/4 -translate-y-1/2"
			onClick={toggleVisibility}
		>
			<IconEye style={{ stroke: '#808080' }} />
		</span>
	);
};
