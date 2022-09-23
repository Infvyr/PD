export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#efefef" offset="20%" />
      <stop stop-color="#fefefe" offset="50%" />
      <stop stop-color="#efefef" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#efefef" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str);

export const setBlurDataUrl = (width: number, height: number) =>
	`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
