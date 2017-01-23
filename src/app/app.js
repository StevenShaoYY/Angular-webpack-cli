//框架
import angular from 'angular';
import ngRoute from 'angular-route';
import jquery from 'jquery';
import ngMaterial from 'angular-material';
import 'angular-animate';
import 'angular-aria';
//module
import echartModule from "../directive/echartModule";
import {ngTableModule} from 'ng-table';
//directive
import demoderctive from "../directive/directiveDemo";
import navderctive from "../directive/navDirective";
import {myTableComponent} from "../directive/my-tableComponent";
//service
import httpService from "../services/httpService";
import utilsService from "../services/utils";
import routesConfig from "./routes";
//controller
import echartcontroller from "../controller/echartcontroller";
import pageCController from "../controller/pageCController";
import pageDController from "../controller/pageDController";
import pageEController from "../controller/pageDController";

//css
import 'normalize.css';
import '../style/app.css';
import 'angular-material/angular-material.css';
const MODULE_NAME = 'app';



angular.module(MODULE_NAME, ['ngRoute','ngMaterial',ngTableModule.name,'echartModule'])
  .service('httpService',httpService)
  .service('utils',utilsService)
  .directive('app', () => new demoderctive())
  .directive('navigation', () => new navderctive())
  .component('myTable',myTableComponent)
  .controller('echartcontroller',echartcontroller)
  .controller('pageCController',pageCController)
  .controller('pageDController',pageDController)
  .controller('pageEController',pageEController)
  .config(routesConfig)

export default MODULE_NAME;