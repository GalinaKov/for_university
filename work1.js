var num = 6;
var str = "JavaScript";
var bool = true;
var nothing;
var array = [2,3,4,5]

function definition(variable) {
    if (typeof(variable) === "number") {
        console.log("Это число");
    } else {
        if (typeof(variable) === "string") {
            console.log("Это строка");
        } else {
            if (typeof(variable) === "boolean") {
                console.log("Это логический тип");
            } else {
                if (typeof(variable) === "object") {
                    console.log("Это объект");
                } else {
                    console.log("Отсутствует значение");
                }

            }
        }
    }
}

definition(num);
definition(str);
definition(bool);
definition(nothing);
definition(array);