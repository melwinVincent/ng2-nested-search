var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchObj, filterMetadata) {
        if (!items || !searchObj) {
            if (filterMetadata)
                filterMetadata.count = items.length;
            return items;
        }
        var arr = [];
        if (filterMetadata && filterMetadata.isNestedSearch) {
            var temp = items;
            var _loop_1 = function (property) {
                if (searchObj.hasOwnProperty(property) && searchObj[property]) {
                    arr = temp.filter(function (item) {
                        return item[property].toLocaleLowerCase().includes(searchObj[property].trim().toLocaleLowerCase());
                    });
                }
                else {
                    arr = temp;
                }
                temp = arr;
            };
            for (var property in searchObj) {
                _loop_1(property);
            }
            filterMetadata.count = arr.length;
            return arr;
        }
        else {
            var _loop_2 = function (property) {
                if (searchObj.hasOwnProperty(property)) {
                    arr = arr.concat(items.filter(function (item) {
                        return item[property].toLocaleLowerCase().includes(searchObj[property].trim().toLocaleLowerCase());
                    }));
                }
            };
            for (var property in searchObj) {
                _loop_2(property);
            }
            var uniqueArray = arr.filter(function (item, index) {
                var _item = JSON.stringify(item);
                return index === arr.findIndex(function (obj) {
                    return JSON.stringify(obj) === _item;
                });
            });
            if (filterMetadata)
                filterMetadata.count = uniqueArray.length;
            return uniqueArray;
        }
    };
    FilterPipe = __decorate([
        Pipe({
            name: "ng2NestedSearch"
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=ng2-nested-search-component.js.map