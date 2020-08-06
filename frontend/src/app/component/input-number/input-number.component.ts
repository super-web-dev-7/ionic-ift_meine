import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent implements OnInit {

  @Input() label: string;
  @Input() step: number;
  @Input() maxValue: number;
  @Input() placeholder: string;
  @Input() model: number;
  @Output() modelChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  decrease() {
    if (this.model > 0) {
      this.model -= this.step;
      this.modelChange.emit(this.model);
    }
  }

  increase() {
    if (this.model < this.maxValue) {
      this.model += this.step;
      this.modelChange.emit(this.model);
    }
  }
}
