export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/layers-2x.png","images/layers.png","images/marker-icon-2x.png","images/marker-icon.png","images/marker-shadow.png","leaflet.css","welcome.jpg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a8c16a16.js","app":"_app/immutable/entry/app.8c95fc06.js","imports":["_app/immutable/entry/start.a8c16a16.js","_app/immutable/chunks/index.301833eb.js","_app/immutable/chunks/singletons.b4796ca2.js","_app/immutable/chunks/index.3a7ab953.js","_app/immutable/entry/app.8c95fc06.js","_app/immutable/chunks/index.301833eb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/event/new",
				pattern: /^\/event\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/event/[eventId]",
				pattern: /^\/event\/([^/]+?)\/?$/,
				params: [{"name":"eventId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
