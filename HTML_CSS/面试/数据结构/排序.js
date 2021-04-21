//冒泡排序，是两个数比较，左边要是比右边大，就交换，使得最后一个数永远是最大的
function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) //因为到了最后一个不会交换
        {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}



//-----------------------------------------------------------------
//归并排序  把两个有序序列合成一个
function mergeSort(arr) { // 采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) { return arr; }
    var mid = Math.floor(len / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, );
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var merArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            merArr.push(left.shift()); //shift从前面输出
        } else {
            merArr.push(right.shift());
        }
    }
    while (left.length) {
        merArr.push(left.shift());
    }
    while (right.length) {
        merArr.push(right.shift());
    }
    return merArr;

}



//选择排序 --一个个在数组中选择最大（最小）的数放在前面   --比较索引
function selectSort(arr) {
    var length = arr.length;
    var minIndex;
    for (var i = 0; i < length - 1; i++) { //最后一个不用比较
        minIndex = i;
        for (var j = i; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

//插入排序--https://www.runoob.com/w3cnote/insertion-sort.html  把第一个数当做有序，后面的都当做无序，把后面的依次插入到前面
function insertSort(arr) {

    var len = arr.length;
    var preindex, indexValue;
    for (var i = 1; i < len; i++) { //从1开始，然后不断把前面数往前挪
        preindex = i - 1; //前5个
        indexValue = arr[i];
        while (preindex > 0 && arr[preindex] > arr[i]) {
            arr[preindex + 1] = arr[preindex];
            preindex--;
        }
        arr[preindex + 1] = indexValue;
    }
    return arr;
}

//希尔排序--增量因子   有点区别
function shellSort(arr) {
    //增量因子一直/2
    var len = arr.length;
    var temp;
    var addKey = math.floor(len / 2);
    for (addKey; addKey > 0; addKey = math.floor(addKey / 2)) {
        for (var i = 0; i < len; i++) {
            for (var j = i + addKey; j < len; j = j - addKey) {
                temp = arr[j];
                if (arr[j] < arr[j - addKey]) {
                    arr[j] = arr[j - addKey];
                }
                arr[j] = temp;
            }
        }
    }

    return arr;
}

//快排--先排序，然后再用分治算法
function fastSort(arr, left, right) {
    var temp = arr[left]; //让其一直处于低位
    while (left < right) {
        while (left < right && arr[left] < temp) {
            left++;
        }
        arr[right] = arr[left];
        while (left < right && arr[right] > temp) {
            right--;
        }
        arr[left] = arr[right];

    }
    arr[left] = temp;
    return left;
}

function motherFastSort(arr, left, right) {
    if (left < right) {
        var fenzhi = fastSort(arr, left, right); //先确定第一个数应该在序列的哪个位置
        //剩余的采用分治算法
        motherFastSort(arr, left, fenzhi - 1);
        motherFastSort(arr, fenzhi, right);
    }
}

//堆排序

function DuiSort(arr, right) {
    var pa = Math.ceil(right / 2) - 1; //向上取整-1
    if (pa < 0) return;
    var leftOrRight, temp;
    while (pa > 0) {
        //比较父和子
        if (arr[pa] > arr[pa * 2 + 2] && arr[pa] > arr[pa * 2 + 1]) {
            //不用变            
        } else {
            leftOrRight = arr[pa * 2 + 2] > arr[pa * 2 + 1] ? (pa * 2 + 2) : (pa * 2 + 1);
            temp = arr[leftOrRight];
            arr[leftOrRight] = arr[pa];
            arr[pa] = temp;
        }
        pa--;
    }
    //把第一个和最后一个互换
    temp = arr[0];
    arr[0] = arr[right - 1];
    arr[right - 1] = temp;
    return DuiSort(arr, right - 1);
}


var arr = new Array(49, 38, 65, 97, 23, 22, 76, 1, 5, 8, 2, 0, -1, 22);
motherFastSort(arr, 0, 13);
console.log(arr);