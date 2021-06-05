// 银行卡数字加敏
const formatSplitString = (str = "", gap = 1, sep = " ") => {
  if (!str) {
    return "";
  }
  str = "••••••••••••" + str.substr(-4);
  console.log(str);
  let l = str.length - 1;
  let strArr = str.split(""); // 将字符串分割成字符串数组
  return strArr
    .map((elem, i) => {
      if (i % gap === gap - 1 && i !== l) {
        return elem + sep; // 当前元素+分隔符
      } else {
        return elem;
      }
    })
    .join(""); // 放入一个字符串
};

formatSplitString("12421411414124124", 4, "  ");

// 自定义加敏：target 为目标值，根据目标值长度判断加敏，如有更改：1. 长度小于等于 “3” 时为名字加敏。2. 长度等于 “11” 时为电话加敏。3. 长度大于 “20” 时为钱包 id 加敏。
const formatPrivacy = (target) => {
  if (target.length <= 5 && typeof target === "string") {
    if (target.length === 3) {
      return `${target.substr(0, 1)}**`;
    } else if (target.length === 2) {
      return `${target.substr(0, 1)}*`;
    } else if (target.length > 3 && target.length < 6) {
      return `${target.substr(0, target.length - 3)}**${target.substr(-1)}`;
    }
  } else if (target.length === 11) {
    return `${target.substr(0, 3)}****${target.substr(-4)}`;
  } else if (target.length > 20) {
    return `${target.substr(0, 9)}**************${target.substr(-13)}`;
  } else {
    return `${target.substr(0, 1)}****${target.substr(5 - target.length)}`;
  }
  return;
};
