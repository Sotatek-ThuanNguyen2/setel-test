// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API = {
  get_all_list: 'http://localhost:3001/api/orders',
  create_order: 'api/orders',
  get_detail: 'http://localhost:3001/api/orders'
}

export const environment = {
  production: false,
  GET_ALL_LIST: API.get_all_list,
  CREATE_ORDER: API.create_order,
  GET_DETAIL: API.get_detail
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
