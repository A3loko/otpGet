import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-get-otp',
  templateUrl: './get-otp.component.html',
  styleUrls: ['./get-otp.component.css']
})
export class GetOtpComponent implements OnInit {

  constructor(private searchservice : SearchService) { }

  //@Output() otpSend=new EventEmitter<any>();

  searchInput : string = "";

  otpList : number;
  ngOnInit() {
  }

  searchOTP(){
    this.searchservice.getOTP(this.searchInput).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log("Error : ¯\_(ツ)_/¯");
    });
}


}
