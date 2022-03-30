var  competition_in_mathematics = {
    set property(new_category) {
        this.age_category = new_category;
    }
}

// 2 изменяемых свойства
Object.defineProperty(competition_in_mathematics, 'count_tasks', {
    value: 20, writable: true, enumerable: true, configurable: true
});
Object.defineProperty(competition_in_mathematics, 'age_category', {
    value: '10 класс', writable: true, enumerable: true, configurable: true
});

// 3 неизменяемых свойства
Object.defineProperty(competition_in_mathematics, 'lead_time', {
    value: '3 часа', writable: false, enumerable: true, configurable: false
});
Object.defineProperty(competition_in_mathematics, 'type_of_qualifying_stage', {
    value: ['Школьный','Муниципальный','Региональный','Заключительный'], writable: false, enumerable: true, configurable: false
});

Object.defineProperty(competition_in_mathematics, 'all-Russian', {
    value: true, writable: false, enumerable: true, configurable: false
});

//метод на увеличение заданий олимпиады
competition_in_mathematics.new_count = function(value){
    this.count_tasks += value;
    console.log(this.count_tasks);
}
competition_in_mathematics.new_count(5)

//метод на изменение возрастной категории
competition_in_mathematics.property = '9 класс';

//вывод информации
competition_in_mathematics.information = function(){
    //this.count_tasks += a;
    console.log('23 января проводится ' + competition_in_mathematics.type_of_qualifying_stage[1] + ' этап Всероссийской олимпиады среди учащихся ' + competition_in_mathematics.age_category +
        'ов. \nОлимпиада содержит ' + competition_in_mathematics.count_tasks + ' заданий и продлится ' + competition_in_mathematics.lead_time);
}
competition_in_mathematics.information()

