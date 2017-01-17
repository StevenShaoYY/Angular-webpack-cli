

export default class dialogController {
  //构造函数中引入依赖,需加上aaaController.$inject = ['XXX'];
  constructor($mdDialog,httpService,utils) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.httpservice = httpService;
    this.mdDialog = $mdDialog;
    this.ut = utils;
  }
  hide() {
      this.mdDialog.hide();
  }

  cancel() {
      this.mdDialog.cancel();
  }

  answer(answer) {
     this.mdDialog.hide(answer);
  }
}
dialogController.$inject = ['$mdDialog','httpService','utils'];