

export default class pageAController {
  //构造函数中引入依赖,需加上aaaController.$inject = ['XXX'];
  constructor(httpService,utils) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.httpservice = httpService;
    this.ut = utils;
    this._init();
  }
  //controller中的方法
  _init(){
  	console.log('a start function!');
  }
  init(){
  	//alert(this.ut.leapYear(2001));
  	let aaa={'pageSize': 18, 'pageNum': 1, 'topicCode': "t_12"};
  	return this.httpservice.postData("/stweb-cms/actions/secured/query/topicArticle",aaa).then(
  		function onSuccess(response) {
			if (response.data.success) {} 
		},function onError(response){});
  	
  }
}
pageAController.$inject = ['httpService','utils'];