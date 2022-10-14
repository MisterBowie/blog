import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	locales: {
		'/': {
			lang: 'zh-CN',
			title: '舒先生',
			description: '这是一个记录自己学习的网站',
		},
		// '/zh/': {
		// 	lang: 'zh-CN',
		// 	title: '文档演示',
		// 	description: 'vuepress-theme-hope 的文档演示',
		// },
	},

	theme,

	shouldPrefetch: false,
	plugins: [
		// backToTopPlugin(),
		docsearchPlugin({
			appId: 'N51TGY8C2T',
			apiKey: '45dc0c38f5a12001b4e3115d659e58c8',
			indexName: 'dev',
		}),
	],
});
