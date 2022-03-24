import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/userClass/user';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(selectValue: User[], select: any){                  //filter for box contents referencing
    console.log("selected value>>", selectValue);
    console.log("filtered box>>", select);
    if(!!selectValue && select != ''){
      return selectValue.filter(data=>{
        return JSON.stringify(data).toLocaleLowerCase().includes(select.toLocaleLowerCase());
      })
    }else{
      return selectValue;
    }
  }

}
