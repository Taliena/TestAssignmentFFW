window.addEventListener('load', function() {
	const tabs = document.querySelectorAll('.container-nav__tab');
	const content = document.querySelectorAll('.content-tab');
	for(let i=0; i<tabs.length; i++) {
	    tabs[i].addEventListener('click', function(){
	        for(let i=0; i<tabs.length; i++) {
	            tabs[i].className = 'container-nav__tab';
            }
	        this.className = 'container-nav__tab active';

            for(let i=0; i<content.length; i++) {
                content[i].className = 'content-tab';
            }
            document.getElementById(this.dataset.id).className = 'content-tab active';
        });
    }
});
