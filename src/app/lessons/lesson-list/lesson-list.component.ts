import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent{
  title;
  
  @Input() courseLessons;
  @Output() selected = new EventEmitter();
}
