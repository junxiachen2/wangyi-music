export default [
    {
        path: '/find',
        name: 'index',
        component (resolve) {
            require.ensure(['../views/index'], () => {
                resolve(require('../views/index'));
            });
        },
        children: [{
            path: '/find',
            name: find,
            component (resolve){
                require.ensure(['../views/find/find'], () => {
                    resolve(require('../views/find/find'));
                })
            },
            meta: {keepAlive: true}
        }]
    },
    {
        path: '*', redirect: '/find'
    }
];
