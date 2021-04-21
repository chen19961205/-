// 面试题 10.01. 合并排序的数组
function mianshi10_01() {
    var merge = function(A, m, B, n) {
        var len = m + n;
        var j = 0,
            i = 0;
        while (j < n && i < m) {
            if (A[i] > B[j]) {
                if (i == 0) {
                    A.unshift(B[j]);
                } else {
                    A.splice(i, 0, B[j]);
                    i++;
                    m++;
                    j++;

                }

            } else {
                i++;
            }
        }
        //如果B还有
        while (j < n) {
            A[i++] = B[j++];
            m++;
        }
        A = A.slice(0, len);
        return A;
    };
    var merge1 = function(A, m, B, n) {
        A.splice(m, A.length - m, ...B);
        A.sort((a, b) => a - b);
        return A
    }
    var a = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
    console.log(a);
}


function offer03() {
    // 查找重复的数
    var findRepeatNumber = function(nums) {
        nums.sort();
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                return nums[i];
            }
        }
    };
    var findRepeatNumber1 = function(nums) {
        var num = new Set();
        for (var i = 0; i < nums.length; i++) {
            if (num.has(nums[i])) {
                return nums[i];
            } else {
                num.add(nums[i]);
            }
        }
    }

}

function offer04() {
    var findNumberIn2DArray = function(matrix, target) {
        if (matrix.length == 0 || matrix[0].length == 0 || matrix == null) return false;
        var columnlen = matrix[0].length - 1, //列
            rowlen = matrix.length - 1; //行
        var row = 0,
            col = columnlen;
        while (matrix[row][col] != target) {
            if (matrix[row][col] == target) {
                return true;
            } else if (matrix[row][col] < target) {
                if (row == rowlen) return false
                row++;
            } else if (matrix[row][col] > target) {
                if (col == 0) return false;
                col--;
            }
        }
        return true;

    };

    var t = findNumberIn2DArray([
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ], 5);
    console.log(t);

}
offer04();