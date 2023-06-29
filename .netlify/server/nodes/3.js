import * as universal from '../entries/pages/dashboard/_page.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/+page.js";
export const imports = ["_app/immutable/nodes/3.32a9b227.js","_app/immutable/chunks/index.301833eb.js","_app/immutable/chunks/Header.5cbd138f.js","_app/immutable/chunks/stores.3ddfcddc.js","_app/immutable/chunks/index.3a7ab953.js","_app/immutable/chunks/navigation.3d84ff79.js","_app/immutable/chunks/singletons.b4796ca2.js","_app/immutable/chunks/MainNavigator.729e284b.js","_app/immutable/chunks/leaflet-map.28b4d617.js","_app/immutable/chunks/placemark-service.924c0d4e.js","_app/immutable/chunks/PlacemarkMapList.e6528066.js"];
export const stylesheets = ["_app/immutable/assets/3.b346aa4d.css","_app/immutable/assets/Header.98dfad21.css","_app/immutable/assets/PlacemarkMapList.69420918.css"];
export const fonts = [];
