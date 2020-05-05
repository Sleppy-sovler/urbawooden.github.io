var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) 
{
	lis[i].style.position = 'relative';
	var span = document.createElement('span');
	span.style.cssText = 'position:absolute; left:0; top:0';
	span.innerHTML = 1;
	lis[i] = appendChild(span);
}

var width=1280;
var count=1;

var carosel=document.getElementById('carosel');
var list= carosel.querySelector('ul');
var listElements = querySelectorAll('li');

var position = 0;

carosel.querySelector('.arrow-l').onclick = function () {
	position = Math.min(position + width * count, 0);
	list.style.marginLeft = position + 'px';
};

carosel.querySelector('.arrow-r').onclick = function () {
	position = Math.max(position - width * count, -width * (listElements.length - count));
list.style.marginLeft = position + 'px';
};


<section class="bg3">
			<div id="carosel" class="carosel">
				<button class="arrow-l"> < </button>
				<div class="galla">
					<ul class="img">
						<li><img src="элементы/1.jpg"></li>
						<li><img src="элементы/2.jpg"></li>
						<li><img src="элементы/3.jpg"></li>
						<li><img src="элементы/4.jpg"></li>
					</ul>
				</div>
				<button class="arrow-r"> > </button>
			</div>
		</section>