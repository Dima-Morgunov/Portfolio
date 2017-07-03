
 window.onload = function scroll(){
	var content = document.querySelector('#content');
	var desin = document.querySelector('#desing');
	var html = document.querySelector('#html');
	var ui = document.querySelector('#ui');
		var i = 1, a = 1, b = 1, c = 1;
		var id = setInterval(funcontent, 75);
		var des = setInterval(fun1, 75);
		var	des2= setInterval(fun2, 75);
		var	des3 = setInterval(fun3, 75);
	function funcontent(){
			if (i>=90) {
				clearInterval(id);
			}
			else{
				i++;
				content.style.width = i+'%';
				document.querySelector('#content-nubs').innerHTML = i + '%';
			}		
	};
	function fun2(){
			if (a>=80) {
				clearInterval(des);
			}
			else{
				a++;
				desin.style.width = a+'%';
				document.querySelector('#content-design').innerHTML = a + '%';
			}
		};
		function fun1(){
			if (b>=70) {
				clearInterval(des2);
			}
			else{
				b++;
				html.style.width = b+'%';
				document.querySelector('#content-html').innerHTML = b + '%';
			}
		};
		function fun3(){
			if (c>=75) {
				clearInterval(des3);
			}
			else{
				c++;
				ui.style.width = c+'%';
				document.querySelector('#content-ui').innerHTML = c + '%';
			}
		};

	}	

	