console.log("Задание №3");
var paragraph = "Однажды я шёл перед вечером мимо базарной площади в лесничество. " +
    "Оно помещалось на окраине городка над рекой. " +
    "Среди улиц мальчишки играли в футбол. " +
    "Громкоговоритель висел на телеграфном столбе. " +
    "Он неожиданно защёлкал.";

function partosen(parag){
    sentences = [
        {words: parag.split(". ")[0].split(" ").concat("."), length: parag.split(". ")[0].split(" ").length },
        {words: parag.split(". ")[1].split(" ").concat("."), length: parag.split(". ")[1].split(" ").length },
        {words: parag.split(". ")[2].split(" ").concat("."), length: parag.split(". ")[2].split(" ").length },
        {words: parag.split(". ")[3].split(" ").concat("."), length: parag.split(". ")[3].split(" ").length },
        {words: parag.split(". ")[4].split(" ").concat("."), length: parag.split(". ")[4].split(" ").length }
    ];
    return sentences;
}
console.log("\nПолученный массив: ");
console.log(partosen(paragraph));


