import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}

}


// Code for closing drop-down by clicking on the drop-down menu itself
// export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') toggleOpen(){
//         this.isOpen = !this.isOpen;
//     }

// }


