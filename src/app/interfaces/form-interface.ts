import ButtonInterface from "./button-interface";
import InputInterface from "./input-interface";

export default interface FormInterface {
  id:string;
  buttonsDirection?:string;
  inputs: Array<InputInterface>
  buttons:Array<ButtonInterface>
}
