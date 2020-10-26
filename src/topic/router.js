import { LIST_TYPE } from './store';
export const routes = [
    {
        name: LIST_TYPE.TOP,
        path: `/${LIST_TYPE.TOP}`,
        component: () => import('../views/UTop.vue'),
        prop: { type: LIST_TYPE.TOP }
    },
    {
        name: LIST_TYPE.HOT,
        path: `/${LIST_TYPE.HOT}`,
        component: () => import('../views/UTop.vue'),
        prop: { type: LIST_TYPE.HOT }
    },
    {
        name: LIST_TYPE.NEW,
        path: `/${LIST_TYPE.NEW}`,
        component: () => import('../views/UTop.vue'),
        prop: { type: LIST_TYPE.NEW }
    }
]