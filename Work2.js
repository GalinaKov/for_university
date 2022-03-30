var string_array = ['Дед',',','пей','таблетки'];

function initialization(){
    var empty_value = " ";
    for (var element of string_array){
        empty_value += element + " ";
    }
    console.log(empty_value)
}
initialization(string_array)