import React from 'react'
import { IRouteModule } from '../../global/interface'
import { Switch, Route } from 'react-router-dom'

/**
 * @function normolize
 * @description 递归的对route.subs做normalize，即把所有嵌套展平到一层，主要对menu树就行路由注册
 * @description 因为menu树都在同一个路由视口，所以可以在同一层级就行路由注册
 * @description 注意：path 和 component 在存在subs的那层menu-route对象中同时存在和同时不存在
 */
function normolize(routes?: IRouteModule[]) {
	let result: IRouteModule[] = []
	routes?.forEach(route => {
		!route.subs
			? result.push(route)
			: result = result.concat(normolize(route.subs))
	})
	return result
}


/**
 * @function renderRoutes
 * @description 注册所有路由，并向嵌套子路由组件传递 route 对象属性，子组件就可以获取嵌套路由属性 routes
 */
const renderRoutes = (routes?: IRouteModule[], extraProps = {}, switchProps = {}) => {
	return routes
		? <Switch {...switchProps}>
			{normolize(routes).map((route, index) => {
				return route.path && route.component &&
				// path 并且 component 同时存在才进行路由注册
				// path 和 componet 总是同时存在，同时不存在
					<Route
						key={route.key || `${index + +new Date()}`}
						path={route.path}
						exact={route.exact}
						strict={route.strict}
						render={props => {
							return route.render
								? route.render({ ...props, ...extraProps, route: route })
								: <route.component {...props} {...extraProps} route={route} /> 
								// 向嵌套组件中传递 route属性，通过route.routes在嵌套路由组件中可以再注册嵌套路由
						}} />
			})}
		</Switch>
		: null
}


export {
	renderRoutes
}