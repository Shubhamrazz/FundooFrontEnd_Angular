import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString?:any ){
   console.log("array--->",value + "string-->",searchString);

   if(!searchString ){
    return value;
  }else{
    searchString;
  }
  return value.filter((note:any) =>{
    return note.title.toLowerCase( ).includes(searchString) || note.description.toLowerCase( ).includes(searchString);
    
  })

  }

}

// 