import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'pf_forms';
}
//export class AppComponent implements OnInit{
  
//   file: File = null; 
//   requestPayLoad: any = {};
//   base64Output!: string;
//   constructor( private fileUploadService: FileUploadService) { }
//   ngOnInit(): void {
    
//   }
//   title = 'pf_forms';
  

//   name:string="";

//   type:String="";

//   size:number=0;

//   modifiedDate:String="";
//   downloadbutton:boolean=false;
  


//   // On file Select file from computer
//   onChange(event: { target: { files: string | any[]; }; }) {
//     this.convertFile(event.target.files[0]).subscribe((base64: string) => {
//       this.base64Output = base64;
//     });
//     for (var i = 0; i < event.target.files.length; i++) {

//       this.name = event.target.files[i].name;
 
//        this.type = event.target.files[i].type;
 
//        this.size =  Math.round(event.target.files[i].size / 1024);
 
//        this.modifiedDate = event.target.files[i].lastModifiedDate;
 
      
 
//        console.log ('Name: ' + this.name + "\n" +
 
//          'Type: ' + this.type + "\n" +
 
//          'Last-Modified-Date: ' + this.modifiedDate + "\n" +
 
//        'Size: ' + Math.round(this.size / 1024) + " KB");
 
//      }
// }
// //convert file into base 64 string
// convertFile(file : File) : Observable<string> {
//   const result = new ReplaySubject<string>(1);
//   const reader = new FileReader();
//   reader.readAsBinaryString(file);
//   reader.onload = (event) => result.next(btoa(event.target.result.toString()));
//   return result;
// }
// //sending entity empid and base 64 string to backend
// onUpload() {
//   this.downloadbutton=true;
  
//   console.log(this.file);
//   this.requestPayLoad={
//     empId:"1",
//     pfDoc:this.base64Output
//   }
//   console.log(this.requestPayLoad);
//   this.fileUploadService.savePdfDetails(
//   this.requestPayLoad
// );
  
// }
// onPreview()
// {const source = `data:application/pdf;base64,${this.base64Output}`;
// const link = document.createElement("a");
// link.href = source;
//   var win = window.open();
//   win.document.write('<iframe src="' + link.href  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
// }

// //download pdf file by converting base64 string to pdf
// downloadPdf(base64String: string, fileName: string) {
//   const source = `data:application/pdf;base64,${base64String}`;
//   const link = document.createElement("a");
//   link.href = source;
//   link.download = `${fileName}`
//   link.click();
// }
// onClickDownloadPdf(){
  
//   this.downloadPdf(this.base64Output,this.name);
// }
// }
