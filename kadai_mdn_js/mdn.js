const today = new Date();

const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDate = today.getDate();

const todayAll = todayYear + '年' + todayMonth + "月" + todayDate + '日';

console.log(todayAll);
