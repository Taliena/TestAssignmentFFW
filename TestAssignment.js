window.addEventListener('load', function () {
    const tabs = document.querySelectorAll('.container-nav__tab');
    const content = document.querySelectorAll('.content-tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].className = 'container-nav__tab';
            }
            this.className = 'container-nav__tab active';

            for (let i = 0; i < content.length; i++) {
                content[i].className = 'content-tab';
            }
            document.getElementById(this.dataset.id).className = 'content-tab active';
        });
    }
});

//#2
function parseUrl(str) {
    let subStr = str.slice(str.indexOf('/') + '//'.length, str.indexOf('?'));
    return {
        hash: str.slice(str.indexOf('#')),
        hostname: subStr.slice(0, subStr.indexOf('/')),
        pathname: subStr.slice(subStr.indexOf('/'))
    }
}
