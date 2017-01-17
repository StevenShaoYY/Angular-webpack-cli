import tpl1 from '../views/DIALOG1TMPL.html'
import dialogCtr from '../controller/dialogController'
export default class pageCController {
  constructor($interval,$mdDialog,httpService,utils) {
    this.httpservice = httpService;
    this.ut = utils;
    this.mdDialog = $mdDialog;
    this.title1 = 'Button';
    this.title4 = 'Warn';
    this.isDisabled = true;
    this.googleUrl = 'http://google.com';
    this.myDate = new Date();
    this.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth() - 2,
        this.myDate.getDate()
    );

    this.maxDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth() + 2,
        this.myDate.getDate());
    this.status ='';
    this.customFullscreen = false;

    this.interval = $interval;
    this.activated = true;
    this.determinateValue = 30;
      // Iterate every 100ms, non-stop and increment
      // the Determinate loader.
    this.interval(function() {
      this.determinateValue += 1;
        if (this.determinateValue > 100) {
          this.determinateValue = 30;
        }

      }.bind(this), 100);
  }

  onlyWeekendsPredicate(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };


  showAlert(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    this.mdDialog.show(
      this.mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  showConfirm(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = this.mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('ok')
          .cancel('cancel');

    return this.mdDialog.show(confirm)
    .then(function(){this.status='You decided to ok'}.bind(this), function(){this.status='You decided to cancle'}.bind(this))

  };
  
  showPrompt(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = this.mdDialog.prompt()
      .title('What would you name your dog?')
      .textContent('Bowser is a common name.')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .initialValue('Buddy')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('I\'m a cat person');

    this.mdDialog.show(confirm).then(function(result) {
      this.status = 'You decided to name your dog ' + result + '.';
    }.bind(this), function(){
      this.status = 'You didn\'t name your dog.';
    }.bind(this));
  };

  showAdvanced(ev) {
    this.mdDialog.show({
      controller: dialogCtr,
      controllerAs:'tp',
      //templateUrl: 'dialog1.tmpl.html',
      template:tpl1,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      this.status = 'You said the information was "' + answer + '".';
    }.bind(this), function() {
      this.status = 'You cancelled the dialog.';
    }.bind(this));
  };
}
pageCController.$inject = ['$interval','$mdDialog','httpService','utils'];