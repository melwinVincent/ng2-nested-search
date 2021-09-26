import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : "ng2NestedSearch"
})

export class FilterPipe implements PipeTransform {
    transform(items, searchObj, filterMetadata): any {
        
        if(!items || !searchObj) {
            if(filterMetadata) filterMetadata.count = items.length;
            return items;
        }
        
        let arr = [];

        if(filterMetadata && filterMetadata.isNestedSearch) {

            let temp = items;
            for (const property in searchObj) {
                if (searchObj.hasOwnProperty(property) && searchObj[property]) {
                    arr = temp.filter(item => {
                        return item[property].toLocaleLowerCase().includes(searchObj[property].trim().toLocaleLowerCase())
                    });
                } else {
                    arr = temp;
                }
                temp = arr;
            }

            filterMetadata.count = arr.length;
            return arr;

        } else {

            for (const property in searchObj) {
                if (searchObj.hasOwnProperty(property)) {
                    arr = arr.concat(items.filter(item => {
                        return item[property].toLocaleLowerCase().includes(searchObj[property].trim().toLocaleLowerCase())
                    }));
                }
            }

            const uniqueArray = arr.filter((item, index) => {
                const _item = JSON.stringify(item);
                return index === arr.findIndex(obj => {
                    return JSON.stringify(obj) === _item;
                });
            });
    
            if(filterMetadata) filterMetadata.count = uniqueArray.length;
            return uniqueArray;

        }
        
    }
}