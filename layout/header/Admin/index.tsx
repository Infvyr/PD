import { Back, Logo, Support } from '@pd-frontend/layout';

type Props = {
	backTo?: string;
};

const AdminHeader = ({ backTo }: Props): JSX.Element => {
	return (
		<header className="px-0 pt-2 pb-2.5 sm:py-5 border-b-2 border-amber-400">
			<div className="container mx-auto grid grid-cols-3 items-center gap-4">
				<Back backTo={backTo} />
				<Logo />
				<Support />
			</div>
		</header>
	);
};

export default AdminHeader;
