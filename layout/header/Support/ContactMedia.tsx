import { ReactComponent as FacebookIcon } from '/public/assets/images/svg/facebook.svg';
import { ReactComponent as WhatsappIcon } from '/public/assets/images/svg/wats.svg';
import { ReactComponent as ChatIcon } from '/public/assets/images/svg/chat.svg';

export const ContactMedia = (): JSX.Element => (
	<li className="pb-3 pt-3 w-full flex-align gap-3 border-b-[0.5px] border-primary">
		<a
			href="https://www.facebook.com/Proovia-Couriers-323143638035624/"
			target="_blank"
			rel="nofollow noopener noreferrer"
			className="w-[32px] h-[32px] flex-align shadow-icon-2 rounded-full border border-transparent transition duration-300 hover:border-secondary hover:shadow-sm"
		>
			<FacebookIcon className="fill-secondary w-[18px] h-[18px]" />
		</a>
		<a
			href="/"
			target="_blank"
			rel="nofollow noopener noreferrer"
			className="w-[32px] h-[32px] flex-align shadow-icon-2 rounded-full border border-transparent transition duration-300 hover:border-secondary hover:shadow-sm"
		>
			<WhatsappIcon className="fill-secondary w-[18px] h-[18px]" />
		</a>
		<a
			href="/"
			target="_blank"
			rel="nofollow noopener noreferrer"
			className="w-[32px] h-[32px] flex-align shadow-icon-2 rounded-full border border-transparent transition duration-300 hover:border-secondary hover:shadow-sm"
		>
			<ChatIcon className="w-[18px] h-[18px]" />
		</a>
	</li>
);
