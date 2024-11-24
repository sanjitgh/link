
(function (d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.async = true;
    wf.onload = function () {
        WebFont.load({
            google: { families: ['Playfair Display'] }
        });
    };
    s.parentNode.insertBefore(wf, s);
})(document);

