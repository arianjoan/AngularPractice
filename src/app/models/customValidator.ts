import { ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidator{
    static firstNameLenght () : ValidatorFn{
        return (control : AbstractControl) : {[key: string]: any} | null => {
            if (!control.value || control.value.length < 3){
                return {'shortName' : {value : control.value}};
            }else{
                return null;
            }
        }
    }
}