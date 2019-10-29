import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidator, AsyncValidatorFn, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs";

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
        return (control : AbstractControl) : Promise<ValidationErrors> | null => {
            return new Promise((resolve,reject) => {
                userService.checkIfEmailExists(control.value).then((response) => {
                    resolve (null);
                }).catch((error) => {
                    if (error.status === 409){
                        resolve({'userExist' : true});
                    }
                })
            })
        }
    }

    static checkPasswords(group: FormGroup) { 
        let pass = group.controls.password.value;
        let confirmPass = group.controls.password_repeat.value;
      
        return pass === confirmPass ? null : { notSame: true }
      }
}