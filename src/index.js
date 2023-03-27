//Styles
import './_index.sass'

//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function lazyLoad() {
	if(!document.querySelector('.animate-in')) {
		return
	}

	const items = document.querySelectorAll('.animate-in');
	for(var i = 0; i < items.length; i++) {
		let delay = items[i].getAttribute('data-delay')
		delay = parseFloat(delay)
		delay = delay + .3
		console.log(delay)
		gsap.to(items[i], {
			y: 0,
			x: 0,
			opacity: 1,
			rotate: 0,
			duration: 0.5,
			delay: delay,
			ease: 'power2',
			scrollTrigger: items[i],
		});
	}
}

document.addEventListener('DOMContentLoaded', function() {
	lazyLoad();
})