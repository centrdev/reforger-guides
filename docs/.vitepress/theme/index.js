// .vitepress/theme/index.js
import { useData, useRoute } from 'vitepress';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import googleAnalytics from 'vitepress-plugin-google-analytics';
import DefaultTheme from 'vitepress/theme';
import './athena.css';
import AuthComponent from '/components/Auth.vue';
import ExclusivePage from '/components/ExclusivePage.vue';
import QuestionComponent from '/components/Question.vue';
import ToolkitComponent from '/components/Toolkit.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Auth', AuthComponent);
        app.component('Question', QuestionComponent);
        app.component('Toolkit', ToolkitComponent);
        app.component('ExclusivePage', ExclusivePage);

        googleAnalytics({
            //id: 'G-D2PZTWXMJ7'
        });
    },
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();

        // Obtain configuration from: https://giscus.app/
        /*giscusTalk(
            {
                repo: 'centrdev/reforger-guides',
                repoId: 'R_kgDOJk-DL',
                category: 'Feedback',
                categoryId: 'DIC_kwDOJk-DLs4CWmWs',
                mapping: 'pathname',
                term: 'Leave a comment!',
                reactionsEnabled: '1',
                lang: 'en',
            },
            {
                frontmatter,
                route,
            }
        );*/
        giscusTalk(
            {
                repo: 'centrdev/reforger-guides',
                repoId: 'R_kgDOJk-DL',
                category: 'Feedback',
                categoryId: 'DIC_kwDOJk-DLs4CWmWs',
                mapping: 'pathname',
                term: 'Leave a comment!',
                reactionsEnabled: '1',
                lang: 'en',
            },
            {
                frontmatter,
                route,
            }
        );
    },
};
