

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
		},function onError(response){
      console.log(this);
    }.bind(this));
  	//在 JavaScript 中，所有函数都有 bind 方法，其允许你为 this 指定特定值。一旦函数被绑定，上下文就不能被覆盖，也就意味着 this 会指向正确的上下文。
    //或使用箭头函数
    //.then((response) => {if (response.data.success) {} }, () => {console.log(this);})
  }
}
pageAController.$inject = ['httpService','utils'];