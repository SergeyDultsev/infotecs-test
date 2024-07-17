import InputStyle from './Input.module.scss';


export function InputApp({ type , placeholder }){
    return (
        <input className={InputStyle['input__search']} placeholder={ placeholder } type={ type } />
    )
}

