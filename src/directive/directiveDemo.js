import pageAController from "../controller/pageAController";
import template from "../views/app.html";

export default class demoDire{
	constructor () {
    	this.template = template;
    	this.restrict = "E";
    	this.controller = pageAController;
        this.controllerAs = "aaaCtrl";
	}
	link (scope,element,attrs) {
		//console.log(element);
	}
}
