export class Model{
  user;
  items;

  constructor(){
    this.user = 'Mustafa';
    this.items =  [
      new ToDoItem("Spor",false),
      new ToDoItem("Kahvaltı",true),
      new ToDoItem("Ders Çalışma", true)
     ];

  }
}

export class ToDoItem {
  description;
  action;

  constructor(description, action){
    this.description = description;
    this.action = action;
  }
}
