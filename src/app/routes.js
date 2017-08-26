import pageA from "../views/pageA.html";
import pageB from "../views/pageB.html";
import pageC from "../views/pageC.html";
import pageD from "../views/pageD.html";
import pageE from "../views/pageE.html";
import echartcontroller from "../controller/echartcontroller"
import pageCController from "../controller/pageCController"
import pageDController from "../controller/pageDController"
import pageEController from "../controller/pageEController"

function config($routeProvider,$locationProvider){
  $routeProvider
    .when('/',{
       template:pageA,
       controller:'',
       controllerAs:'vm'
    })
    .when('/pageA',{
      template:pageA,
      controller:"",
      controllerAs:'vm'
    })
    .when('/pageB', {
      template:pageB,
      controller:'echartcontroller',
      controllerAs:'ec'
    })
    .when('/pageC',{
      template:pageC,
      controller:"pageCController",
      controllerAs:'pc'
    })
    .when('/pageD',{
      template:pageD,
      controller:"pageDController",
      controllerAs:'pd'
    })
    .when('/pageE',{
      template:pageE,
      controller:"pageEController",
      controllerAs:'pe'
    })
    .otherwise({
    	redirectTo:'/pageA'}
    );
     $locationProvider.html5Mode(true);
}

config.$inject = ['$routeProvider','$locationProvider'];
export default config;