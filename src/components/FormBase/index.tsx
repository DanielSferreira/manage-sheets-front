import * as React from "react";
import { Typography, Input } from "antd";
import { Form } from "../../Interfaces/Form";
import "./css.css";
const { Title } = Typography;
type Props = {
  form: Form[];
  title: string;
}
export const FormBase = ({form,title}: Props) => {

    return (
        <React.Fragment>
        <Title level={3} >{title}</Title>
        {
        Object.values(form).map((item:any,key) => {
          return(
            <div className="form-item" key={key} style={item.style}>
            <span className="form-item-label">{item.label}</span>
              <Input
                required
                type={item.ipType}
                name={item.name}
              />
            </div>
          )
          })
        }
        </React.Fragment>
    );
}
