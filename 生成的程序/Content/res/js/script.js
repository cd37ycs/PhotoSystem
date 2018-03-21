/*脚本 20180228 Byzgcwkj*/

function ReviseIframeHeight(iframe) {//自动调整Iframe的高度
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
}

function GetIframeSrc(id, url) {//更换Iframe的地址(Src)
    $(window.parent.document).find("#" + id).attr("src", url);
    //ReviseIframeHeight($("#pages"));
}