import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'firstFiveNames'
})


export class ToDoPipe implements PipeTransform {
    transform(title:string, id:number):any {
        if (id<=10)
            return title;
    }
}