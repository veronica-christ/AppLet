// import { Injectable } from '@angular/core';
// import { MatSnackBar,MatSnackBarConfig,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';



// @Injectable({
//   providedIn: 'root'
// })
// export class SnackbarService {

//   config:MatSnackBarConfig ={
//     // duration:1500,
    
//     horizontalPosition:'right',
//     verticalPosition:'bottom'
//   }

//   constructor(public snackBar:MatSnackBar) {}

//   success(msg:string){
//     this.config.panelClass = ['snackbar-container', 'success'];
//     this.snackBar.open(msg,'Close',this.config);
//   }

//   danger(msg:string){
//     this.config.panelClass = ['danger-snackBar'];
//     this.snackBar.open(msg,'Close',this.config);
//   }

//  warning(msg:string){
//   this.config.panelClass = ['warning-snackBar'];
//     this.snackBar.open(msg,'Close',this.config);
//  }
  
// }



import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  private config: MatSnackBarConfig;

  constructor(private snackbar: MatSnackBar, private zone: NgZone) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ["snackbar-container"];
    // this.config.verticalPosition = "top";
    // this.config.horizontalPosition = "right";
    this.config.duration = 2000;
  }

  error(message: string) {
    this.config.panelClass = ["snackbar-container", "error"];
    this.show(message);
  }

  success(message: string) {
    this.config.panelClass = ["snackbar-container", "success"];
    this.show(message);
  }

  warning(message: string) {
    this.config.panelClass = ["snackbar-container", "warning"];
    this.show(message);
  }

  private show(message: string, config?: MatSnackBarConfig) {
    config = config || this.config;
    this.zone.run(() => {
      this.snackbar.open(message, "Close", config);
    });
  }
}