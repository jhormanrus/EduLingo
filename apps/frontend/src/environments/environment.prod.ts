import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  appVersion: require('../../../../package.json').version,
  url: 'https://edulingo-staging.herokuapp.com/api'
};
