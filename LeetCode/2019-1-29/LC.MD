#LeetCode
****
###两数之和

>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
>
>示例:
>给定 nums = [2, 7, 11, 15], target = 9
>因为 nums[0] + nums[1] = 2 + 7 = 9
>所以返回 [0, 1]

 这道题很简单,难度是在时空复杂度上.
 使用数组或者indexOf等双循环,时间复杂度是O(n). 用hash来存数据去找,可以用空间换时间,降到O(1).
************
###找两个有序数组的中位数
>给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
>
>请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
>
>你可以假设 nums1 和 nums2 不会同时为空。

>示例 1:
>
>nums1 = [1, 3]
>nums2 = [2]
>
>则中位数是 2.0

这个问题用sort排序就会很简单,但时间复杂度就超出要求.
答案的核心是:
>为了解决这个问题，我们需要理解“中位数的作用是什么”。在统计中，中位数被用来：
>
>>将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。
>
>如果理解了中位数的划分作用，我们就很接近答案了。

剩下的不搬运了,等到我对时间复杂度有足够理解时再考虑.
**************************
###最长回文子串
>给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
```
示例 1：
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案
```
花了一个下午写成了第一个版本.
```
function longestPalindrome(s) {
    if (s === "") {
        return "";
    }
    const sarr = s.split("");
    const rsarr = sarr.concat().reverse();
    const result = [];
    for (let i = 0; i < sarr.length; i += 1) {
        for (let j = 0; j < sarr.length - i; j += 1) {
            if (sarr[i] === rsarr[j]) {
                for (let k = 0; k <= sarr.length - i - j; k += 1) {
                    if ((typeof (sarr[i + k]) === "undefined") || (typeof (rsarr[j + k]) === "undefined") || (sarr[i + k] !== rsarr[j + k])) {
                        if (i === (sarr.length - j - k)) {
                            result.push([i, k]);
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    }
    let max = result[0];
    for (let i = 1; i < result.length; i += 1) {
        if (max[1] < result[i][1]) {
            max = result[i];
        }
    }
    if (typeof (max) === "undefined") {
        return sarr[0];
    }
    return s.slice(max[0], max[0] + max[1]);
}
```
但第一个版本的问题是遇到过长的字符串会超时.
就是说时间的复杂度有问题.
```
function sliceArr(length, arr) {
    const result = [];
    if (length % 2) {
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i - Math.floor(length / 2)] && arr[(i + Math.floor(length / 2))]) {
                result.push(i);
            }
        }
    } else {
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i - (length / 2)] && arr[(i + (length / 2)) - 1]) {
                result.push(i);
            }
        }
    }
    return result;
}

function longestPalindrome(s) {
    const sarr = s.split("");
    const rsarr = sarr.concat().reverse();
    const rs = rsarr.join("");
    for (let i = rs.length; i > 0; i -= 1) {
        const sP = sliceArr(i, sarr);
        if (i % 2) {
            const mid = Math.floor(i / 2);
            for (let j = 0; j < sP.length; j += 1) {
                if (s.slice(sP[j] - mid, sP[j]) === rs.slice(0 - sP[j] - 1 - mid, 0 - sP[j] - 1)) {
                    return s.slice(sP[j] - mid, sP[j] + mid + 1);
                }
            }
        } else {
            for (let j = 0; j < sP.length; j += 1) {
                if (s.slice(sP[j] - (i / 2), sP[j]) === rs.slice(0 - sP[j] - (i / 2), (0 - sP[j]))) {
                    return s.slice(sP[j] - (i / 2), sP[j] + ((i / 2)));
                }
            }
        }
    }
    return "";
}
```
总算是过了,时间只击败了9.76%的用户,我的天啊.