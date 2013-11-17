$(function () {
    $('pre.javascript code').each(function(i, element) {
        hljs.highlightBlock(element);
    });
});
