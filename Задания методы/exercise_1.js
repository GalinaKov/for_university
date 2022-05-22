//я не уверена, что правильно разобралась в задании, но решила отправить хоть что-то 
console.log("Задание №1");
Queue = {
    commands:[
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"}],
    get property(){
        var string_test = this.commands[0].command;
        this.commands = this.commands.slice(1, this.commands.length);
        for (var i=0; i < this.commands.length ; i++ ){
            this.commands[i].id = (i+1) + "-command";
        }
        return string_test;
    },
    set property(comm){
        this.commands = this.commands.concat({id: this.commands.length + 1 +"-command", command: comm});
    },
    showQueue:function(){
        for (var i=0; i < this.commands.length ; i++ ){
            console.log(i + 1 + ". " +  this.commands[i].command);
        }
    }
};

console.log("\nИзвлечём " + Queue.property);
console.log("Извлечём " + Queue.property);
console.log("\nНовый массив:");
Queue.showQueue();

console.log("Добавим новый элемент");
Queue.property = "go";
console.log("\nНовый массив:");
Queue.showQueue();

