document.addEventListener('DOMContentLoaded', (event) => {

    const thumbnailElement = document.getElementById("smart_thumbnail");
    if (thumbnailElement !== null) {
        thumbnailElement.addEventListener("click", () => {
            if (thumbnailElement.className === 'small') {
                thumbnailElement.className = 'big';
            } else {
                thumbnailElement.className = 'small';
            }
        });
    }

    // DISQUS
    (function() {
        var d = document,
            s = d.createElement('script');
        s.src = 'https://golang-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    //FACEBOOK
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});