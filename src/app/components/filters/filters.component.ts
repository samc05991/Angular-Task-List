import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnChanges {
  @Input() filters!: string[];
  @Output() selected = new EventEmitter<string[]>();

  selectedFilters: any = {};

  constructor() { }

  ngOnChanges() {
    let filters = [];

    for (let key in this.selectedFilters) {
      if (this.selectedFilters[key]) {
        filters.push(key);
      }
    }

    this.selected.emit(filters);
  }
}
