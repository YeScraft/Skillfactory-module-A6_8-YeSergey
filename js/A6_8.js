
function p1Change() {
	$("#bar").attr({style: 'width: 1%'});
}

function p3Change() {
	$("#bar").attr({style: 'width: 3%'});
}
function p7Change() {
	$("#bar").attr({style: 'width: 7%'});
}

function p1() {
	$("#p1").click(p1Change);
	$("#p3").click(p3Change);
	$("#p7").click(p7Change);
	console.log("скрипт подгрузился");
}

$(document).ready(p1);