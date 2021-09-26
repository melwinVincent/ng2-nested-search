# ng2-nested-search

A simple custom pipe for filtering arrays in your angular(2+) projects and get the count of filtered items.
It supports nested search and you may search the array of items on specific properties.

![Screen Recording 2021-09-06 at 12 39 44 PM](https://user-images.githubusercontent.com/12426903/132187817-64c11f6e-df6f-440b-98be-a9dc42976f85.gif)

![Screen Recording 2021-09-06 at 12 36 50 PM](https://user-images.githubusercontent.com/12426903/132187884-2501cc69-5bb4-470c-88d3-ad991650f61a.gif)

# How to use

### import FilterPipeModule to your module (here I'm lazy loading)

```
import { NgModule } from '@angular/core';
import { ViewCharacters } from './view-characters';
import { FilterPipeModule } from 'ng2-nested-search';

@NgModule({
  declarations: [
    ViewCharacters
  ],
  imports: [
    FilterPipeModule
  ],
})
export class ViewCharactersModule {}
```

### initialize the searchText and filterMetadata in your page.ts as follows

```
searchText : string = "";
filterMetadata = { count: 0 };

characters = [
    {
        name : "Daenerys",
        family : "Targaryen",
        gender : "Female"
    },
    {
        name : "Jaime",
        family : "Lannister",
        gender : "Male"
    },
    {
        name : "Sansa",
        family : "Stark",
        gender : "Female"
    },
    {
        name : "Arya",
        family : "Stark",
        gender : "Female"
    },
    {
        name : "Theon",
        family : "Greyjoy",
        gender : "Male"
    }
]
```

### add the ng2-nested-search component in your page.html as follows (only filtering on name and family in the example)

```
<input [(ngModel)]="searchText"/>

<div *ngFor="let character of characters | ngxSearchFilter: { 'name' : searchText, 'family' : searchText} : filterMetadata">
```

### For enabling nested search, set isNestedSearch to true (by default it is false) in the filterMetadata as shown below

```
    searchName : string = "";
    searchFamily : string = "";
    filterMetadata = { count: 0, isNestedSearch : true };
```

### in HTML

```
<input [(ngModel)]="searchName"/>
<input [(ngModel)]="searchFamily"/>

<div *ngFor="let character of characters | ngxSearchFilter: { 'name' : searchName, 'family' : searchFamily} : filterMetadata">
```

### You can display the filtered elements count as follows
```
<div>
    <span>Total items filtered : </span>
    <span [innerHTML]="filterMetadata.count"></span>
</div>
```

## Contact
gmail : melwin.vincent.90@gmail.com
