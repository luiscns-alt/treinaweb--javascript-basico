function weekDay(year, month, day) {
    var date = new Date(year, month - 1, day).getDay();
    var days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex"];
    return days[date];
}

console.log(weekDay(2022, 02, 11));
