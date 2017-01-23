export default class pageEController {
  constructor($interval,httpService,utils) {
    this.httpservice = httpService;
    this.ut = utils;
    this.interval = $interval;
  }
}
pageEController.$inject = ['$interval','httpService','utils'];