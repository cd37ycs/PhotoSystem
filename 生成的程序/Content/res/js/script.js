/*�ű� 20180228 Byzgcwkj*/

function ReviseIframeHeight(iframe) {//�Զ�����Iframe�ĸ߶�
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
}

function GetIframeSrc(id, url) {//����Iframe�ĵ�ַ(Src)
    $(window.parent.document).find("#" + id).attr("src", url);
    //ReviseIframeHeight($("#pages"));
}