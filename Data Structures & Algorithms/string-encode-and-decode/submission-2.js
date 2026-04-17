class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        console.log(strs.length);
        for(let i = 0; i < strs.length; i++){
            console.log(str);
            strs[i] = strs[i].length+"#"+strs[i];
            str = str+strs[i];
        }
        console.log(str);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        console.log(str.length);
        let strs = [];
        let i = 0;
        let j = 0;
        while (i < str.length){
            let len = 0;
            if(str[i] === "#"){
                console.log(i);
                len = Number(str.slice(j, i));
                console.log("len",len);
                let s = "";
                for(j = i+1; j < i+len+1; j++){
                    s= s+str[j];
                }
                i=i+len+1;
                strs.push(s);
            } else {
                i++;
            }
        }
        console.log(strs);
        return strs;
    }
}
