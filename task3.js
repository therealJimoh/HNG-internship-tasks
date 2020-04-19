function boondocks(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let str = "";
        if (i % 2 === 0) {
            str = str + "yu";
            if (i % 3 === 0) {
                str = str + "gi";
                if (i % 5 === 0) {
                    str = str + "-oh";
                }
            } else if (i % 5 === 0) {
                str = str + "oh";
            }
            answer.push(str);
        } else if (i % 3 === 0) {
            str = str + "gi";
            if (i % 5 === 0) {
                str = str + "-oh";
            }
            answer.push(str);
        } else if (i % 5 === 0) {
            str = str + "-oh";
            answer.push(str);
        } else {
            answer.push(i);
        }
        }
        console.log(answer);
        return answer;
    }

   
boondocks(100);
boondocks(5);
