import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidator, AsyncValidatorFn } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../services/user.service";

export class CustomValidator{
    static firstNameLenght () : ValidatorFn{
        return (control : AbstractControl) : ValidationErrors | null => {
            if (!control.value || control.value.length < 3){
                return {'shortName' : {value : control.value}};
            }else{
                return null;
            }
        }
    }

    static equalPassword(password : AbstractControl) : ValidatorFn{
        return (control : AbstractControl) : ValidationErrors | null => {
            const firstPassword = control.value;
            const secondPassword = password.value;
            if (firstPassword == secondPassword){
                return null;
            }else{
                return {'passwordNotEqual' : {value : firstPassword}};
            }
        }
    }

    static emailExists(userService : UserService) : AsyncValidatorFn{
        return (control : AbstractControl) : ValidationErrors | null => {
            userService.checkIfEmailExists(control.value);
            return null;
        }
    }
}