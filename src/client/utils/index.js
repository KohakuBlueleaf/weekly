Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "D+": this.getDate(), //日
    "h+": this.getHours(), //小時
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" +  k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +  o[k]).substr(("" + o[k]).length)));
  return fmt;
}

export function getPageDate() {
  
  let pageDates = [{},{},{},{},{},{},{}];
  let constraintDay = 31;
  let preveiosDay = 31;
  let today = new Date();
  const thisYear = today.getFullYear();
  const thisWeek = today.getDay();
  const thisMonth = today.getMonth()+1;
  const thisDate = today.getDate();

  switch (thisMonth) {
    case 2:
      constraintDay = 28;
      break;
    case 1, 3, 5, 7, 8, 10, 12: constraintDay = 31;
      break;
    default: constraintDay = 30;
      break;
  }

  switch (thisMonth) {
    case 3:
      preveiosDay = 28;
      break;
    case 1, 2, 4, 6, 8, 9, 11: preveiosDay = 31;
      break;
    default: preveiosDay = 30;
      break;
  }

  //pageDates[thisWeek] = {thisMonth, thisDate};
  for(let i=thisWeek,j=0; i<7; i++,j++) {
    let theDay = {};
    if(thisDate+j>constraintDay) {
      theDay = {
        year: thisYear,
        month: thisMonth<12 ? thisMonth+1 : 1,
        day: thisDate+j-constraintDay,
        week: i        
      }
    }
    else {
      theDay = {
        year: thisYear,
        month: thisMonth,
        day: thisDate+j,
        week: i
      }
    }
    pageDates[i] = theDay;
  }

  for(let i=thisWeek-1,j=1; i>=0; i--,j++) {
    let theDay = {};
    if(thisDate-j<=0) {
      theDay = {
        year: thisYear,
        month: thisMonth-1>=0 ? thisMonth-1 : 12,
        day: preveiosDay+(thisDate-j),
        week: i
      }
    }
    else {
      theDay = {
        year: thisYear,
        month: thisMonth,
        day: thisDate-j,
        week: i
      }
    }
    pageDates[i] = theDay;

  }

  // {
  //   year: 
  //   month:
  //   day:
  //   week:
  // }
  return pageDates;
}

export function getToday() {
  let today = new Date();
  const thisYear = today.getFullYear();
  const thisWeek = today.getDay();
  const thisMonth = today.getMonth()+1;
  const thisDate = today.getDate();

  return {
    year: thisYear,
    month: thisMonth,
    day: thisDate,
    week: thisWeek
  }
}
