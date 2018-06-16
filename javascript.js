window.onscroll = function() {
	scrollDown()
	showWorkItems()
};

function scrollDown(){
	if(document.body.scrollTop > 950 || document.documentElement.scrollTop > 950){
		document.getElementById('about-content').style.animationPlayState = 'running';
	} else{
		document.getElementById('about-content').style.animationPlayState = 'paused';
	}
}

function showWorkItems(){
	if(document.body.scrollTop > 640 || document.documentElement.scrollTop > 640){
		document.getElementById('item-1').style.animationPlayState = 'running';
		document.getElementById('item-2').style.animationPlayState = 'running';
		document.getElementById('item-3').style.animationPlayState = 'running';
		document.getElementById('item-4').style.animationPlayState = 'running';
		document.getElementById('item-5').style.animationPlayState = 'running';
		document.getElementById('item-6').style.animationPlayState = 'running';
	} else{
		document.getElementById('item-1').style.animationPlayState = 'paused';
		document.getElementById('item-2').style.animationPlayState = 'paused';
		document.getElementById('item-3').style.animationPlayState = 'paused';
		document.getElementById('item-4').style.animationPlayState = 'paused';
		document.getElementById('item-5').style.animationPlayState = 'paused';
		document.getElementById('item-6').style.animationPlayState = 'paused';
	}
}