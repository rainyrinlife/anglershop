import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
     <div class="dropdown">
      <button onclick="myFunction()" class="dropbtn">Dropdown</button>
      <div id="myDropdown" class="dropdown-content">
      @for (option of dropdownOptions; track option.key) {
        <a [href]="option.key">{{option.value}}</a>
      }
    </div> 
  `,
  styles: ``,
})
export class Dropdown {
  dropdownOptions = [
    { key: './products', value: 'Link 1' },
    { key: './discounts', value: 'Link 2' },
    { key: './contact', value: 'Link 3' }
  ];
}
