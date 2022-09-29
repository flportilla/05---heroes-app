import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Characters } from '../../interfaces/Characters.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Characters
    ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  delete(){
    this.dialogRef.close(true)
  }
  
  cancel(){
    this.dialogRef.close()
  }
}
