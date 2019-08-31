function loadjsfile(element, zoneId, ct0) {
    var fileIns = document.createElement('ins');
    fileIns.setAttribute('data-revive-zoneid', zoneId);
    fileIns.setAttribute('data-revive-target', '_blank');
    if (typeof ct0 !== 'undefined') {
        fileIns.setAttribute('data-revive-ct0', ct0);
    }
    fileIns.setAttribute('data-revive-id', 'd3c49d4501fbbaf2e7b9562ea5ff5523');

    element.append(fileIns);

    var fileScript = document.createElement('script');
    fileScript.setAttribute('type', 'text/javascript');
    fileScript.setAttribute('async', 'async');
    fileScript.setAttribute('src', '//avban.av.by/delivery/asyncjs.php');

    element.append(fileScript);
}

function showAdsByClass(divClassVisible){
    $(divClassVisible).each(function (index) {
        var zoneId = $(this).data("zoneId");
        var ct0 = $(this).data("ct0");

        if (typeof zoneId !== 'undefined') {
            loadjsfile($(this), zoneId, ct0);
        }
    });
}

$(function () {
    showAdsByClass('.show-on-all-devices');

    var divClassVisible = ($(window).width() > 1024) ? '.show-on-desktop' : '.show-on-mobile';
    showAdsByClass(divClassVisible);
});
