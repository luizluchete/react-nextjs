interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  toRender?: boolean;
  type?: "text" | "email" | "password";
  callBackValue: (newValue: any) => void;
}
const AuthInput = (props: AuthInputProps) => {
  return props.toRender ? null : (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.callBackValue?.(e.target.value)}
        required={props.required}
      ></input>
    </div>
  );
};

export default AuthInput;
