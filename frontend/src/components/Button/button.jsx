import classNames from 'classnames';
import "./button.css";

const Button = ({variant, className, children, disabled, onClick}) => {

    const classes = classNames(className, {
        "button-return-products" : variant === "return-products",
        'button-checkout' : variant === 'checkout',
        'button-delete-all': variant === "delete-all",
        'button-options': variant === 'options',
        'button-filter': variant === 'filter',
        'button-edit': variant === 'edit',
        'button-delete': variant === 'delete',
        'button-add': variant === 'add',
        'button-news': variant === 'news',
        'button-clear': variant === 'clear',
        'button-search': variant === 'search'
    })

    return ( 
        <button onClick={onClick} disabled = {disabled} className = {classes}>{children}</button>
     );
}
 
export default Button;