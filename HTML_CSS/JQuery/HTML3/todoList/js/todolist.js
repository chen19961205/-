$(function() {

    //文本框里面输入内容，按下回车，就可以生成待办事项
    //
    $("#title").on("keydown", function(event) {

        if (event.keyCode === 13) {
            //先读取本地存储原来数据
            var local = getData();
            local.push({ title: $(this).val(), done: false })
            saveData(local);
            load();
        }

    })


    function getData() {
        var data = localStorage.getItem("todo");
        if (data != null) return JSON.parse(data);
        else {
            return [];
        }

    }

    function saveData(local) {
        localStorage.setItem("todo", JSON.stringify(local));
    }


    $("ol").on("click", "a", function() {
        var data = getData();
        //console.log(data);
        //修改数据
        var index = $(this).attr("id"); //返回id属性
        //主要修改本地存储的data  splice()
        data.splice(index, 1);
        saveData(data);

        load();
    })



    //点击待办事项复选框，就可以吧当前数据添加到已完成事项里面

    function load() {
        var data = getData();
        $("ol,ul").empty(); //要先清空再加载
        $.each(data, function(i, n) {
            //数据存到.todolist中
            //console.log("i:" + i.tos + ",n:" + n);
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox'checked='checked'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");

            } else {
                $("ol").prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></li>");

            }

        })
    }

    //点击已完成事项复选框，把当前数据添加到待办事件，
    $("ol,ul").on("click", "input", function() {
        var data = getData();
        //获取a的id
        var id = $(this).siblings("a").attr("id");
        data[id].done = $(this).prop("checked"); //prop检查状态,
        saveData(data);
        load();
    });



    //本页面内容刷新页面不会丢失


    //     var todList = [{
    //             title: '我今天哈哈哈',
    //             done: true
    //         },
    //         {
    //             title: '我今天吃饭',
    //             done: false
    //         }
    //     ];
    //     var str = JSON.stringify(todList);
    //     localStorage.setItem("todo", str);
    //     //   localStorage.getItem("todo"));
    //     console.log(JSON.parse(localStorage.getItem("todo"))[0].title);

})