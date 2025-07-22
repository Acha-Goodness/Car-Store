import React from 'react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

  const renderInputsByComponentType = (getControlItem) => {

    let element = null;
    const value = formData[getControlItem.name] || ""

    switch (getControlItem.componentType){
      case "input":
        element = (
                    <Input
                      className={`${buttonText === "Verify Otp" && "text-center"}`}
                      name={getControlItem.name}
                      placeholder={getControlItem.placeholder}
                      id={getControlItem.name}
                      type={getControlItem.type}
                      value={value}
                      onChange={ event => setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value
                      })}
                    />
                  );
      break;
      case "select":
        element = (
                    <Select onValueChange={(value) => setFormData({
                      ...formData,
                      [getControlItem.name] : value
                    })} value={value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.placeholder}/>
                      </SelectTrigger>
                      <SelectContent>
                        {
                            getControlItem.options && 
                            getControlItem.options.length > 0 ?
                            getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                        }
                      </SelectContent>
                    </Select>
                  );  
      break;
      case "textarea":
        element = (
                    <Textarea
                      name={getControlItem.name}
                      placeholder={getControlItem.placeholder}
                      id={getControlItem.name}
                      value={value}
                      onChange={ event => setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value
                      })}
                    />
                  );
      break;
      default:
        element = (
                    <Input
                      name={getControlItem.name}
                      placeholder={getControlItem.placeholder}
                      id={getControlItem.name}
                      type={getControlItem.type}
                      value={value}
                      onChange={ event => setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value
                      })}
                    />
                  );
      break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={`${buttonText === "Verify Otp" ? "grid grid-cols-4 gap-6 items-end w-full" : "flex flex-col gap-3"}`}>
        {
          formControls.map(controlItem => 
          <div className={`grid w-full gap-1.5 ${buttonText === "Verify Otp" && "w-[50px]"}`} key={controlItem.name}>
            <Label className="mb-1">{controlItem.Label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>)
        }
      </div>
      <Button type="submit" className={`mt-5 w-full bg-[#D4AF37] text-white ${buttonText === "Verify Otp" && "w-full"}`}>{buttonText || "Submit"}</Button>
    </form>
  )
}

export default CommonForm;