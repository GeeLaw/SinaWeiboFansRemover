(function ()
{
    if (!document.location.pathname.endsWith('/fans'))
        return;
    var scriptElem = document.createElement('SCRIPT');
    scriptElem.type = 'text/javascript';
    scriptElem.src = browser.extension.getURL('fansRemover.js');
    (document.head || document.body).appendChild(scriptElem);
    scriptElem.remove();
})();
