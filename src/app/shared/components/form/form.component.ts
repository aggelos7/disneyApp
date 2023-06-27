import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Output() searchQuery = new EventEmitter<{}>();

  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    name: [''],
    tvShows: [''],
  });

  applyFilter() {
    console.log(this.form.get('name').value)
    console.log(this.form.get('tvShows').value)
    let searchQuery = {};
    if (this.form.get('name').value) {
      searchQuery['column'] = 'name';
      searchQuery['value'] = this.form.get('name').value;
    }
    if (this.form.get('tvShows').value) {
      searchQuery['column'] = 'tvShows';
      searchQuery['value'] = this.form.get('tvShows').value;
    }
    this.searchQuery.emit(searchQuery);
  }

  clearInput(controlName: string) {
    this.form.get(controlName).reset('');
  }

  clearForm() {
    this.form.reset();
    this.applyFilter();
  }

}
