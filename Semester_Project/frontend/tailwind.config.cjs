/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('tw-elements/dist/plugin')],
}
