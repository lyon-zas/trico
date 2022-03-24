import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/userClass/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], filter: any){               //filter for serach filter
    console.log("Value>>", value);
    console.log("filtered schemas>>", filter);
    if(!!value && filter != ''){
      return value.filter(elem =>{
        return JSON.stringify(elem).toLocaleLowerCase().includes(filter.toLocaleLowerCase());
      })
    }else{
      return value;
    }
  }

}
