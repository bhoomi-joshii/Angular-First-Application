import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoServices:TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes ={
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    console.log(todo);
    todo.completed = !todo.completed;
    this.todoServices.toggleCompleted(todo).subscribe(todo=>{
      console.log(todo);
    });
  }

  onDelete(todo){
    console.log(todo);
    this.deleteTodo.emit(todo);
  }
}
