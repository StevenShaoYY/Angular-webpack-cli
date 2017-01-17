import tpl1 from '../views/DIALOG1TMPL.html'
import dialogCtr from '../controller/dialogController'
export default class pageDController {
  constructor($interval,httpService,utils) {
    this.httpservice = httpService;
    this.ut = utils;
    this.interval = $interval;
    this.mode = 'query';
    this.activated = true;
    this.j=0;
    this.counter = 0;
    this.determinateValue = 30;
    this.determinateValue2 = 30;
    this.showList = [ ];
    this.interval(function() {
      this.determinateValue += 1;
      this.determinateValue2 += 1.5;

      if (this.determinateValue > 100) this.determinateValue = 30;
      if (this.determinateValue2 > 100) this.determinateValue2 = 30;

        // Incrementally start animation the five (5) Indeterminate,
        // themed progress circular bars

        if ( (this.j < 2) && !this.showList[this.j] && this.activated ) {
          this.showList[this.j] = true;
        }
        if ( this.counter++ % 4 == 0 ) this.j++;

        // Show the indicator in the "Used within Containers" after 200ms delay
        if ( this.j == 2 ) this.contained = "indeterminate";

    }.bind(this), 100, 0, true);

    this.interval(function() {
      this.mode = (this.mode == 'query' ? 'determinate' : 'query');
    }.bind(this), 7200, 0, true);
  }
  toggleActivation() {

        if ( !this.activated ) this.showList = [ ];
        if (  this.activated ) {
          this.j = this.counter = 0;
          this.determinateValue = 30;
          this.determinateValue2 = 30;
        }
  };
}
pageDController.$inject = ['$interval','httpService','utils'];