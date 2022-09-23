export const toPounds = (n: number, maximumFractionDigits = 2) =>
	new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
		currencyDisplay: 'narrowSymbol',
		maximumFractionDigits
	}).format(n);
