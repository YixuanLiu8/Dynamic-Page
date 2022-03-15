//5 groups of images from Yelp
var imgyelp=
			[["https://s3-media0.fl.yelpcdn.com/bphoto/t9Rkms1JPN2wqThDHdceCA/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/sAc0cDFTzzo23ncfVODf_A/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/3Hp0UMMJFAnvJg8Ysx7wdA/o.jpg"],
			["https://s3-media0.fl.yelpcdn.com/bphoto/MXI8kcGSnz8vJljmXUqJIg/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/1JJrc12HuMnEzUnvUWGulQ/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/Do75_Xaypl1BQ93N8i5f8A/o.jpg",
			],
			["https://s3-media0.fl.yelpcdn.com/bphoto/8JymI-vKLXBjLVLJ75mqoA/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/yWolaq65ea08c3U0SWdSwQ/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/FRPCQ6LkbGJXu8nH40N48w/o.jpg",
		],
			["https://s3-media0.fl.yelpcdn.com/bphoto/2KNdWwXXsuh_r48_2jbWbg/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/lRGUSwd91aYv_szCD4KC2A/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/peAfBfU0w5KbpE1nQLK_cg/o.jpg",
			],
			["https://s3-media0.fl.yelpcdn.com/bphoto/HpkRRl_VELJcoNQZjNycMA/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/axYU3Jp4kR9O-ByJsKPr5g/o.jpg",
			"https://s3-media0.fl.yelpcdn.com/bphoto/e_s4DRjo4ZaUHZULbEyQ0w/o.jpg",
			]];
var counter=[0,0,0,0,0];
//set the interval to carousel image
var interval=[setInterval(function(){carouselImg(0)},getRandom1to5(0)*1000),
				setInterval(function(){carouselImg(1)},getRandom1to5(1)*1000),
				setInterval(function(){carouselImg(2)},getRandom1to5(2)*1000),
				setInterval(function(){carouselImg(3)},getRandom1to5(3)*1000),
				setInterval(function(){carouselImg(4)},getRandom1to5(4)*1000)];
//carousel image 
function carouselImg(index){
	document.getElementById("img"+index).src= imgyelp[index][counter[index]++ % imgyelp[index].length]
}
//get a random number from one to five
function getRandom1to5(index){
	var rand=Math.floor(Math.random()*5+1);
	document.getElementById("indictor"+index).innerHTML=rand;
	return rand;
}
function btnAction(btnid){
	var index=btnid.charAt(btnid.length-1);
	if(document.getElementById(btnid).innerHTML=="STOP"){
		cleartheInterval(index);
	}
	else{
		restarttheInterval(index);
	}
}
//clear the interval
function cleartheInterval(index){
	clearInterval(interval[index]);
	document.getElementById("btn"+index).innerHTML="START";
}
//restart the interval
function restarttheInterval(index){
	clearInterval(interval[index]);
	interval[index]=setInterval(function(){carouselImg(index)},getRandom1to5(index)*1000)
	document.getElementById("btn"+index).innerHTML="STOP";
}