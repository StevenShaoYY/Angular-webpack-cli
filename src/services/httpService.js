
export default class httpService{
	constructor($http){
		this.http = $http;
	}
	getData(URL,params){
		let ajaxObject = {
			url : URL
		};
		if(params instanceof Object){
			ajaxObject.params = params;
		}
		return this.http(ajaxObject);
	}
	postData(URL,jsonData){
		return this.http({
			method : "post",
			url : URL,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : jsonData,
		});
	}
	onError(){
		alert("操作数据失败！");
	};

	onSuccess(response) {
	if (response.data.success) {
		alert(response.data.msg);
	} else {
		onError(response);
	}
};
}

httpService.$inject = ['$http'];