const repeatString = function(str,num) {
    let newStr = str;
    if (num == 0){
        return ""
    }
    else if (num < 0){
        return "ERROR"
    }
    for (i=0;i<=num-2;i++){
        newStr = newStr.concat(str);
    }
    return newStr
    


};

// Do not edit below this line
module.exports = repeatString;
