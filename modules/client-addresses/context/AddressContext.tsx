import { createContext } from 'react';

type CollectionAddress = {
	collectionAddress: number | undefined;
	setCollectionAddress?: (value: number | undefined) => void;
};

type DeliveryAddress = {
	deliveryAddress: number | undefined;
	setDeliveryAddress?: (value: number | undefined) => void;
};

export const CollectionAddressContext = createContext<CollectionAddress>({
	collectionAddress: undefined,
	setCollectionAddress: () => {}
});

export const DeliveryAddressContext = createContext<DeliveryAddress>({
	deliveryAddress: undefined,
	setDeliveryAddress: () => {}
});

if (process.env.NODE_ENV !== 'production') {
	CollectionAddressContext.displayName = 'CollectionAddressContext';
}

if (process.env.NODE_ENV !== 'production') {
	DeliveryAddressContext.displayName = 'DeliveryAddressContext';
}
