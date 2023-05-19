import { defineConfig } from 'vitepress';
import { getSidebar } from './sidebar';

const BASE_URL = '/';

export default defineConfig({
    base: BASE_URL,
    title: 'ARMA Reforger',
    description: 'Tips, tutorials and notes',
    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    markdown: {
        lineNumbers: false,
        defaultHighlightLang: 'ts',
    },
    themeConfig: {
        logo: '/logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/centrdev/reforger-guides' },
            { icon: 'discord', link: 'https://discord.gg/arma' },
        ],
        // Search
        search: {
            provider: 'local',
        },
        // Navigation - Top of the Documentation Page Links
        nav: [
            {
                text: 'Guides',
                link: '/tutorials/index',
            },
            {
                text: 'Tools',
                link: '/tools/index',
            },
            {
                text: 'News / Updates',
                link: '/blog/index',
            },
            {
                text: 'Links',
                items: [
                    {
                        text: 'Official Resources',
                        items: [
                            {
                                text: 'BI Forums',
                                link: 'https://forums.bohemia.net/forums/forum/411-arma-reforger-editing/',
                            },
                            {
                                text: 'BI WIKI',
                                link: 'https://community.bistudio.com/wiki/Category:Arma_Reforger',
                            },
                        ],
                    },
                    {
                        text: 'Unofficial Resources',
                        items: [
                            {
                                text: 'URL 1',
                                link: 'https://#',
                            },
                            {
                                text: 'URL 2',
                                link: 'https://#',
                            },
                            {
                                text: 'URL 3',
                                link: 'https://#',
                            },
                        ],
                    },
                ],
            },
        ],
        // Footer - Bottom of the Documentation Page
        footer: {
            message: 'Created by F3NN3X | 2023',
        },
        // Page - Next & Previous Buttons
        docFooter: {
            prev: 'Prev',
            next: 'Next',
        },
        // Page - Show Last Update on Page
        lastUpdatedText: 'Updated Date',
        sidebar: getSidebar(),
    },
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: BASE_URL + 'site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: BASE_URL + 'safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ],
});
