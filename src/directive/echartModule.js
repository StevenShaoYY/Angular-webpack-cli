import echarts from 'echarts';
var moduleName='echartModule';

class echartdir{
	constructor () {
    	this.restrict = "A";
    	this.scope={
            option:'=ecOption',
            config:'=ecConfig'
        };
    }
	link (scope,element,attrs,ctrl) {
		function refreshChart(){
			let theme = (scope.config && scope.config.theme)?scope.config.theme:'default';
			let chart = echarts.init(element[0],theme);
			if(scope.config && scope.config.dataLoaded === false){
                chart.showLoading();
            }
            if(scope.config && scope.config.dataLoaded){
                chart.setOption(scope.option);
                chart.resize();
                chart.hideLoading();
            }
            if(scope.config && scope.config.event){
            	if(angular.isArray(scope.config.event)){
                    angular.forEach(scope.config.event,function(value,key){
                        for(var e in value){
                            chart.on(e,value[e]);
                        }
                    });
                }
            }
		};
		//自定义参数 - config
        // event 定义事件
        // theme 主题名称
        // dataLoaded 数据是否加载
        scope.$watch(
            ()=>scope.config,
            function (value) {
            	if (value) {
            		setTimeout(()=>refreshChart(),1);
            	}},
            true
        );
        scope.$watch(
            ()=>scope.option,
            function (value) {
            	if (value) {
            		setTimeout(()=>refreshChart(),1);
            	}
            },
            true
        );
	}
}
angular.module(moduleName, [])
  .directive('echartdir',() => new echartdir)
export default moduleName;