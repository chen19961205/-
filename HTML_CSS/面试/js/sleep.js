// 通过promise实现
function sleep(ms) {
    return new Promise((resolve, reject) => {
        console.log("解决");
        setTimeout(resolve, ms);
    })
}
sleep(500).then(() => { console.log('hhh'); }).catch(() => { console.log('err'); });

// 通过while实现
function sleep1(ms) {
    var start = Date.now();
    var expire = start + ms;
    while (Date.now() < expire); //当超过1000ms后就会输出111
    console.log('111');
    return;
}

//async封装
function sleep3(ms) {
    return new Promise(resolve => { setTimeout(resolve, ms); })
}
async function test() {
    var temp = await sleep3(1000);
    console.log('111');
    return temp;
}
test();