var remoteURL="http://111.230.97.64:8080";
function getXMLHttp(){
	var xmlhttp;
	if (window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else {
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}
function getUser(){
	var xmlHttp=getXMLHttp();
	xmlHttp.onreadystatechange=function() {
		if(xmlHttp.readyState==4 && xmlHttp.status==200) {
			var text=xmlHttp.responseText;
			alert(text);
			var user=eval("("+text+")");
		}
	}
	xmlHttp.open("POST","http://111.230.97.64:8080/User/selectUser",true);
	//false表示是否要异步
	xmlHttp.send(null);
}
function useAjax(url,parameter){
	var xmlHttp=getXMLHttp();
	var string=new String();
	xmlHttp.onreadystatechange=function() {
		if(xmlHttp.readyState==4 && xmlHttp.status==200) {
			alert("在这里"+xmlHttp.responseText);
			return eval("("+xmlHttp.responseText+")");
		} else {
			return "";
		}
	}
	xmlHttp.open("POST",url,true);
	//false表示是否要异步
	xmlHttp.send(parameter);
}