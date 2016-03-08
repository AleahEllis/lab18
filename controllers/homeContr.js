app.controller("homeContr", function(){
  console.log("welcome home")
});

app.directive("firstDirective", function(){
	return{
		template: "<h1 id='directiveOne'>First Directive</h1>"
	};
});

app.directive("secondDirective", function(){
	return{
		template: "<h3 id='directiveTwo'>Second Directive</h3>"
	};
});
