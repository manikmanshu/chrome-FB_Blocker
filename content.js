(() => {

    var setBodyCount = 0;
    var windowHeight = window.innerHeight || window.screen.height;
    var BLOCK_LIST = [
        'facebook.com',
        'youtube.com'
    ];

    chrome.storage.sync.get('settings', function(data) {

        data.settings = data.settings || [];
        BLOCK_LIST = data.settings.length > 0 ? data.settings : BLOCK_LIST;
        start();

    });

    function start() {

        var href = $(location).attr('href');
        var isBlocked = BLOCK_LIST.some(site => href.indexOf(site) > -1);
    
        if (isBlocked) {
            setBodyTimeout(100);
        }

    }

    function setBody() {

        if (!(document.getElementsByTagName('body') && document.getElementsByTagName('body')[0])) {
            setBodyTimeout(100);
            return 0;
        }

        if (document.getElementsByTagName('head') && document.getElementsByTagName('head')[0]) {
            document.getElementsByTagName('head')[0].innerHTML = '';
        }

        document.getElementsByTagName('body')[0].innerHTML = '<div class="message"> This is blocked for you. Stay Focused! </div>';

        $('body').css({
            'background-color': '#08090b',
            'font-size': '48px',
            'color': 'lightgreen',
            'height': windowHeight + 'px',
            'padding-top': '300px', // Math.ceil((windowHeight - 48) / 2) + 'px', /// '300px',
            'text-align': 'center',
            'font-family': 'Georgia, serif',
        });

        $('.message').css({
            'margin': 'auto',
            'width': '50%',
            'border': '3px solid green',
            'border-radius': '5px',
            'padding': '10px'
        });

        setBodyCount += 1;

        if (setBodyCount < 3) {
            setBodyTimeout(500);
        }

    }

    function setBodyTimeout(timeout) {
        setTimeout(() => {
            setBody();
        }, timeout || 100);
    }
})();
