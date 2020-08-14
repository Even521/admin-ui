import router from '../router';

//导出函数
export default ()=>{
    const routes=router.getRoutes();
    const links=[];
    // 循环路由信息，将数据整理并 push 到 links 数组
    routes.forEach((route, index) => {
        links.push({
            name: route.meta.title || `未命名${index}`,
            link: route.path
        })
    })
    // 将 links 数组返回
    return links;
}