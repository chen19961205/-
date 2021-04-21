function ajax(options) {
    var defaults = {
        type: 'get',
        url: '',
        async: true,
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function() {},
        error: function() {}
    }
    Object.assign(defaults, options);
    var xhr = new XMLHttpRequest();
    var params = '';
    for (var attr in defaults.data) {
        params = attr + "=" + defaults.data[attr] + "&";
    }
    params = params.substr(0, params.length - 1);
    defaults.url = '?' + params;
    xhr.open(defaults.type, defaults.url);
    xhr.send();
    xhr.onload = function() {
        var responseText = xhr.responseText;
        if (xhr.status == 200) {
            // 调用成功回调函数, 并且将服务器端返回的结果传递给成功回调函数
            defaults.success(responseText, xhr);
            console.log('以下是成功的响应值');
        } else {
            // 调用失败回调函数并且将xhr对象传递给回调函数
            defaults.error(responseText, xhr);
        }
    }
}