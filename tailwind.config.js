/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		join(
			__dirname,
			'{modules,pages,components,layout}/**/*!(*.stories|*.spec).{ts,tsx,html}'
		),
		...createGlobPatternsForDependencies(__dirname)
	],
	theme: {
		extend: {
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				xxl: '1440px',
				'2xl': '1680px',
				'3xl': '1980px',
				'4xl': '2160px'
			},
			fontFamily: {
				calibri: ['Calibri', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				base: ['16px', '28px']
			},
			colors: {
				primary: '#912829',
				secondary: '#B53133',
				gray: {
					100: 'rgba(217, 217, 217, 0.38)',
					200: '#D8D8D8',
					300: '#667C94',
					400: '#979797',
					500: '#808080',
					550: '#61666A',
					600: '#595A59'
				},
				amber: {
					400: '#EB8D4C'
				},
				zinc: {
					400: '#ABABB6'
				},
				stone: {
					500: '#F2F1F0'
				},
				'gray-light': '#F7FBFF',
				green: {
					600: '#31AA52'
				}
			},
			backgroundImage: {
				'gradient-to-t':
					'linear-gradient(0deg, #01B9FF 0%, #912829 0.01%, #B53133 100%)',
				'gradient-to-r': 'linear-gradient(90deg, #912829 0%, #B53133 100%)',
				'gradient-to-b': 'linear-gradient(180deg, #B53133 0%, #912829 100%)',
				'gradient-to-l': 'linear-gradient(270deg, #912829 0%, #B53133 100%)',
				'gradient-to-tl': 'linear-gradient(270deg, #6D1E1F 0%, #B53133 100%)',
				'gradient-white':
					'linear-gradient(to right, rgba(100, 200, 200, 0), rgba(100, 200, 200, 0)), linear-gradient(90deg, #fff 0%, #fafafa 100%)',
				'gradient-radial-1':
					'radial-gradient(42.44% 2920.76% at 48.99% 50%, #912829 0%, #B53133 100%)',
				'gradient-bar':
					'linear-gradient(0deg, #912829 0%, #912829 0.01%, #D62426 100%)'
			},
			boxShadow: {
				sm: '0 0 4px rgba(0, 0, 0, 0.25)',
				DEFAULT: '0 0 20px rgba(0, 0, 0, 0.1)',
				md: '0 0 50px rgba(0, 0, 0, 0.2)',
				icon: '0 0 10px rgba(145, 40, 41, 0.2)',
				'icon-2': '0 0 10px rgba(0, 0, 0, 0.25)',
				'icon-3': '0 0 10px rgba(0, 0, 0, 0.1)',
				form: '0 0 40px rgba(0, 0, 0, 0.2)',
				input: '0 0 20px rgba(0, 0, 0, 0.1)',
				disclosure: '0 0 20px rgba(0, 0, 0, 0.2)',
				card: '0 0 10px rgba(0, 0, 0, 0.2)',
				'card-address': '0 4px 20px rgba(0, 0, 0, 0.2)',
				calendar: '0 2px 48px rgba(0, 0, 0, 0.2)',
				'booking-form': '0 0 50px rgba(0, 0, 0, 0.35)',
				'settings-dialog': '0 4px 40px rgba(0, 0, 0, 0.2)'
			},
			borderRadius: {
				20: '20px'
			},
			dropShadow: {
				20: '0 0 20px rgba(0, 0, 0, 0.2)',
				440: '0 4px 40px rgba(0, 0, 0, 0.2)',
				10: '0 0 10px rgba(0, 0, 0, 0.1)',
				12: '0 0 10px rgba(0, 0, 0, 0.2)',
				calendar: '0 2px 48px rgba(0, 0, 0, 0.2)',
				'booking-form': '0 0 50px rgba(0, 0, 0, 0.35)'
			},
			ringWidth: {
				DEFAULT: '1px'
			},
			backgroundSize: {
				'link-initial': '100% 3px, 0 3px',
				'link-hover': '0 3px, 100% 3px'
			},
			backgroundPosition: {
				'link-position': '100% 100%, 0 100%'
			},
			animation: {
				slideInLeft: 'slideInLeft 3s ease-in 500ms normal none 1 running',
				slideInRight: 'slideInRight 150ms linear forwards 1',
				fadeIn: 'fadeIn 150ms ease-in forwards 1'
			},
			keyframes: {
				slideInLeft: {
					'0%': {
						transform: 'translate3d(-100%, 0, 0)',
						visibility: 'visible'
					},
					'100%': {
						transform: 'translate3d(0, 0, 0)'
					}
				},
				slideInRight: {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				fadeIn: {
					'0%': {
						opacity: 0
					},
					'100%': {
						opacity: 1
					}
				}
			}
		}
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					paddingLeft: '24px',
					paddingRight: '24px',

					'@screen sm': {
						maxWidth: '640px'
					},
					'@screen md': {
						maxWidth: '768px'
					},
					'@screen lg': {
						maxWidth: '992px'
					},
					'@screen xl': {
						maxWidth: '1000px'
					},
					'@screen 2xl': {
						maxWidth: '1280px'
					}
				}
			});
		}
	]
};
