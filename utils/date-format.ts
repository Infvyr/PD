export const formatDate = (date: string | number | Date) => {
	if (date) return new Intl.DateTimeFormat('en-GB').format(new Date(date));
};
