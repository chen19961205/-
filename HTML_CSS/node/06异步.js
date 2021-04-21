//通过回调函数来拿到异步api返回结果
// function getDta(callback){}
// getDta(()=>{});
function getMes(callback) {
    setTimeout(() => {
        callback({
            msg: 'hello,node.js'
        })
    }, 1000);
}
getMes(function(data) {
    console.log(data);
});