import { atom } from 'recoil';

export const SettingsStore = atom({
	key: 'client-settings',
	default: 'settings'
});
