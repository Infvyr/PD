import { atom } from 'recoil';

interface Calendar {
	isButtonActive: boolean;
}

export const calendarAtom = atom<Calendar>({
	key: 'calendar-store',
	default: {
		isButtonActive: false
	}
});
