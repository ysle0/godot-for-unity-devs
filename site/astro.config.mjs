// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ysle0.github.io',
	base: '/godot-for-unity-devs',
	integrations: [
		starlight({
			title: 'Godot for Unity Devs',
			locales: {
				root: { label: '한국어', lang: 'ko' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ysle0/godot-for-unity-devs' },
			],
			sidebar: [
				{
					label: '스파이크',
					items: [{ slug: 'spike/snippet' }],
				},
			],
		}),
	],
});
