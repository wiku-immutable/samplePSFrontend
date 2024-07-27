import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const imtbl: CustomThemeConfig = {
	name: 'imtbl',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '6px',
		'--theme-rounded-container': '6px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #131313
		'--color-primary-50': '220 220 220', // #dcdcdc
		'--color-primary-100': '208 208 208', // #d0d0d0
		'--color-primary-200': '196 196 196', // #c4c4c4
		'--color-primary-300': '161 161 161', // #a1a1a1
		'--color-primary-400': '90 90 90', // #5a5a5a
		'--color-primary-500': '19 19 19', // #131313
		'--color-primary-600': '17 17 17', // #111111
		'--color-primary-700': '14 14 14', // #0e0e0e
		'--color-primary-800': '11 11 11', // #0b0b0b
		'--color-primary-900': '9 9 9', // #090909
		// secondary | #1F8290
		'--color-secondary-50': '221 236 238', // #ddecee
		'--color-secondary-100': '210 230 233', // #d2e6e9
		'--color-secondary-200': '199 224 227', // #c7e0e3
		'--color-secondary-300': '165 205 211', // #a5cdd3
		'--color-secondary-400': '98 168 177', // #62a8b1
		'--color-secondary-500': '31 130 144', // #1F8290
		'--color-secondary-600': '28 117 130', // #1c7582
		'--color-secondary-700': '23 98 108', // #17626c
		'--color-secondary-800': '19 78 86', // #134e56
		'--color-secondary-900': '15 64 71', // #0f4047
		// tertiary | #36E0F8
		'--color-tertiary-50': '225 250 254', // #e1fafe
		'--color-tertiary-100': '215 249 254', // #d7f9fe
		'--color-tertiary-200': '205 247 253', // #cdf7fd
		'--color-tertiary-300': '175 243 252', // #aff3fc
		'--color-tertiary-400': '114 233 250', // #72e9fa
		'--color-tertiary-500': '54 224 248', // #36E0F8
		'--color-tertiary-600': '49 202 223', // #31cadf
		'--color-tertiary-700': '41 168 186', // #29a8ba
		'--color-tertiary-800': '32 134 149', // #208695
		'--color-tertiary-900': '26 110 122', // #1a6e7a
		// success | #059669
		'--color-success-50': '218 239 233', // #daefe9
		'--color-success-100': '205 234 225', // #cdeae1
		'--color-success-200': '193 229 218', // #c1e5da
		'--color-success-300': '155 213 195', // #9bd5c3
		'--color-success-400': '80 182 150', // #50b696
		'--color-success-500': '5 150 105', // #059669
		'--color-success-600': '5 135 95', // #05875f
		'--color-success-700': '4 113 79', // #04714f
		'--color-success-800': '3 90 63', // #035a3f
		'--color-success-900': '2 74 51', // #024a33
		// warning | #fbbf24
		'--color-warning-50': '254 245 222', // #fef5de
		'--color-warning-100': '254 242 211', // #fef2d3
		'--color-warning-200': '254 239 200', // #feefc8
		'--color-warning-300': '253 229 167', // #fde5a7
		'--color-warning-400': '252 210 102', // #fcd266
		'--color-warning-500': '251 191 36', // #fbbf24
		'--color-warning-600': '226 172 32', // #e2ac20
		'--color-warning-700': '188 143 27', // #bc8f1b
		'--color-warning-800': '151 115 22', // #977316
		'--color-warning-900': '123 94 18', // #7b5e12
		// error | #b91c1c
		'--color-error-50': '245 221 221', // #f5dddd
		'--color-error-100': '241 210 210', // #f1d2d2
		'--color-error-200': '238 198 198', // #eec6c6
		'--color-error-300': '227 164 164', // #e3a4a4
		'--color-error-400': '206 96 96', // #ce6060
		'--color-error-500': '185 28 28', // #b91c1c
		'--color-error-600': '167 25 25', // #a71919
		'--color-error-700': '139 21 21', // #8b1515
		'--color-error-800': '111 17 17', // #6f1111
		'--color-error-900': '91 14 14', // #5b0e0e
		// surface | #e0e0e0
		'--color-surface-50': '250 250 250', // #fafafa
		'--color-surface-100': '249 249 249', // #f9f9f9
		'--color-surface-200': '247 247 247', // #f7f7f7
		'--color-surface-300': '243 243 243', // #f3f3f3
		'--color-surface-400': '233 233 233', // #e9e9e9
		'--color-surface-500': '224 224 224', // #e0e0e0
		'--color-surface-600': '202 202 202', // #cacaca
		'--color-surface-700': '168 168 168', // #a8a8a8
		'--color-surface-800': '134 134 134', // #868686
		'--color-surface-900': '110 110 110' // #6e6e6e
	}
};
