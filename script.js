var app=angular.module('myApp', []);
app.controller('namesCtrl', function($scope) {
    $scope.names = [
        {
		"id":1,
		"first_name":"Eugene",
		"last_name":"Hayes",
		"email":"ehayes0@thetimes.co.uk",
		"mobile_number":"506-(894)757-1578",
		"add":false,
		
},
{
	"id":2,
	"first_name":"Norma",
	"last_name":"Howard",
	"email":"nhoward1@alexa.com",
	"mobile_number":"48-(899)616-2469",
	"add":false,
	
},
{
	"id":3,
	"first_name":"Elizabeth",
	"last_name":"Rice",
	"email":"erice2@ebay.com",
	"mobile_number":"86-(805)476-1753",
	"add":false,
	
},
{
	"id":4,
	"first_name":"Amy",
	"last_name":"Watkins",
	"email":"awatkins3@cbc.ca",
	"mobile_number":"54-(177)584-6082",
	"add":false,
	
},
{ 
	"id":5,
	"first_name":"Eugene",
	"last_name":"Graham",
	"email":"egraham4@taobao.com",
	"mobile_number":"86-(463)661-7790",
	"add":true,
	
},
{
	"id":6,
	"first_name":"Katherine",
	"last_name":"Green",
	"email":"kgreen5@geocities.com",
	"mobile_number":"86-(645)457-8006",
	"add":false,
	
},
{
	"id":7,
	"first_name":"Todd",
	"last_name":"Ramirez",
	"email":"tramirez6@nature.com",
	"mobile_number":"49-(681)612-7001",
	"add":false,
	
}];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    };
	 
	$scope.model = {
   selectedLabelList : []
}
$scope.isSelectAll = function(){
  $scope.model.selectedLabelList = [];
  if($scope.master){
    $scope.master = true;
    for(var i=0;i<$scope.names.length;i++){
     $scope.model.selectedLabelList.push($scope.names[i].id); 
    }
	//console.log($scope.model.selectedLabelList);
  }
  else{
   $scope.master = false;
  }
   angular.forEach($scope.names, function (item) {
    item.selected = $scope.master;
  });
 }
$scope.isLabelChecked = function(selectedID)
{
  var _name = this.x.name;
  if(this.x.selected){
  console.log(this.x.selected);
  //console.log(_name);
   $scope.model.selectedLabelList.push(selectedID);
      if($scope.model.selectedLabelList.length == $scope.names.length )
    {
     $scope.master = true;
    }
  }else{
   $scope.master = false;
   var index = $scope.model.selectedLabelList.indexOf(_name);
   $scope.model.selectedLabelList.splice(index, 1);
 }

//console.log($scope.model.selectedLabelList);

}
console.log('selectedLabelList',$scope.model.selectedLabelList);
$scope.remove = function(index) {
console.log(index-1);
    	$scope.names.splice(index,1);
    };
	
	

$scope.addPerson = function(){
    var person = {
        id: $scope.names.length+1,
        first_name: $scope.first_name,
        last_name: $scope.last_name,
		email: $scope.email,
		mobile_number: $scope.mobile_number,
		add:false
    };
    
    $scope.names.push(person);
  };
	
	
	
	
});
