/**
 * Created by xx on 15/7/17.
 */


/**
 有四个人（A,B,C和D)要在一个月黑风高的夜里过一个很长的独木桥。
 桥只能一次承载两个人，就是说每次最多两人同时过桥。
 过桥要用手电筒，而这四个人只有一只手电筒，也就是说两个人共用这支手电筒过桥后，其中一个人必须带着手电筒返回（没有其他方法），否则其他人就不能再过了。
 这四个人由于年龄和身体状况的差异，每个人过桥所需的时间不同：A需要1分钟，B需要2分钟，C需要5分钟，D需要10分钟.
 由于共用一只手电筒的原因，当两个人一同过桥时，过桥的时间是以其中慢的一个人为准，比如A和C一起过桥要用5分钟。
 */



function pass(arg_peopleArr) {

    if (arg_peopleArr.length == 0) {
        return 0;
    }

    var l = arg_peopleArr.length;

    function sortNumber(a, b) {
        return a - b
    }

    arg_peopleArr = arg_peopleArr.sort(sortNumber);

    if (l <= 2) {
        return arg_peopleArr[l - 1];
    }


    var min = arg_peopleArr[0];
    var sec = arg_peopleArr[1];
    var time = 0;

    while (l > 2) {
        //这段代码是下面注释代码的化简！！！具体解释看注释代码
        time = time + sec + min;
        time = time + arg_peopleArr[l - 1];
        if (l > 3) {
            time = time + sec;
            if (l == 2) {
                time = time + sec;
            }
        }
        l = l - 2;


      /**
        if(l>3){   //除了最短时间两个人之外还有一个人以上在桥头...
            time = time + sec + min;   //最短时间两个人先过去 再最短时间的那个人跑回来所需时间
            time = time + arg_peopleArr[l - 1]; //取最长时间的人  实际上最长时间的两个人已经通过了
            time = time + sec;                  //倒数第二段的时间再跑回来 循环....
            l = l - 2;
            if (l == 2) {
                time = time + sec;      //刚刚好桥头就剩最短时间两个人
            }
        }else{    //除了最短时间两个人之外只剩一个人以上在桥头...
            time = time + sec + min;   //最短时间两个人先过去 再最短时间的那个人跑回来所需时间
            time = time + arg_peopleArr[l - 1]; //最短时间的人把最后的人接回去 ！！！
            l=l-2;
        }
     */

        
    }

    return time;
}

var arr = [1];

console.log(pass(arr));

 arr = [1, 2];

console.log(pass(arr));

arr = [1, 2, 5];

console.log(pass(arr));

arr = [1, 2, 5, 10];

console.log(pass(arr));

 arr = [1, 2, 5, 10, 30];

console.log(pass(arr));


arr = [1, 2, 5, 10, 30, 60];

console.log(pass(arr));
