import InputStyle from './Input.module.scss';


export function InputApp({ value, onChange, type , placeholder }){
    return (
        <input
            className={InputStyle['input__search']}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    )
}

