export default class pageCController {
  constructor(httpService,utils) {
    this.httpservice = httpService;
    this.ut = utils;
    this.title1 = 'Button';
    this.title4 = 'Warn';
    this.isDisabled = true;
    this.googleUrl = 'http://google.com';
  }
 
}
pageCController.$inject = ['httpService','utils'];