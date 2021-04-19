// 银行卡数字加敏
const formatSplitString = (str = '', gap = 1, sep = ' ') => {
  if (!str) {
    return '';
  }
  str = '••••••••••••' + str.substr(-4);
  console.log(str);
  let l = str.length - 1;
  let strArr = str.split(''); // 将字符串分割成字符串数组
  return strArr
    .map((elem, i) => {
      if (i % gap === gap - 1 && i !== l) {
        return elem + sep; // 当前元素+分隔符
      } else {
        return elem;
      }
    })
    .join(''); // 放入一个字符串
};

formatSplitString("12421411414124124", 4, '  ');
