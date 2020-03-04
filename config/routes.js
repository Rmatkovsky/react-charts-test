import MainPage from 'pages/main/MainPage';
import NotFoundPage from 'pages/common/404';

const routes = {
    mainPage: {
        path: '/',
        component: MainPage,
    },
    notFound: {
        path: '*',
        component: NotFoundPage,
    },
};

export default routes;
