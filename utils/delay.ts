import toast from 'react-hot-toast';

export function delay(ms = 2000, msg = 'Successfully resolved!') {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
			toast.success(msg);
		}, ms);
	});
}
