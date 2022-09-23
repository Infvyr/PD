import { GoodCategory } from '@pd-backend/types';
import { useScroller } from '@pd-frontend/hooks';
import { ScrollDots } from '@pd-frontend/modules/booking';
import { CATEGORY_PLACEHOLDER } from '@pd-frontend/modules/booking/config/constants';
import { setBlurDataUrl } from '@pd-frontend/utils/shimmer';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Categories.module.css';

type Props = {
	categories: GoodCategory[];
};

export const GoodsCategories = ({ categories }: Props): JSX.Element => {
	const router = useRouter();
	const catId = router?.query?.catId as string;
	const [scrollElement, setScrollElement] = useState<HTMLElement | null>();

	useEffect(() => setScrollElement(document?.getElementById('categories')), []);

	const { isVisibleOnScrollDown, isVisibleOnScrollUp } = useScroller(
		scrollElement as HTMLElement,
		50
	);

	return (
		<div className="relative">
			{categories.length > 6 && isVisibleOnScrollUp && (
				<ScrollDots
					wrapperStyles="!top-2 !left-[49.4%] md:!left-[48.5%]"
					inverted
				/>
			)}

			{categories.length > 0 ? (
				<ul className={`no-scrollbar ${styles.container}`} id="categories">
					{categories.map(({ id, name, icon }) => (
						<li key={id} className={styles.item} data-category={name}>
							<Link href={`/booking/${id}`} passHref>
								<a
									aria-label={name}
									title={name}
									className={`${styles.btn} ${
										id.toString() === catId ? styles.active : ''
									}`}
								>
									<figure className={styles.figure}>
										<Image
											src={icon || CATEGORY_PLACEHOLDER}
											width={150}
											height={150}
											alt={name}
											placeholder="blur"
											blurDataURL={setBlurDataUrl(150, 150)}
										/>
									</figure>
									<span className={styles.caption}>{name}</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			) : (
				<div className={`${styles.container} !block`}>No categories found!</div>
			)}

			{categories.length > 6 && isVisibleOnScrollDown && (
				<ScrollDots wrapperStyles="!top-[unset] bottom-5 !left-[49.4%] md:!left-[48.5%]" />
			)}
		</div>
	);
};
