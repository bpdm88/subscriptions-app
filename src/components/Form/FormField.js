const FormField = ({ label, name, type, handleChange, value, min, max }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                className="input"
                id={name}
                type={type}
                onChange={handleChange}
                value={value}
                min={min}
                max={max}
            />
        </div>
    );
};

export default FormField;
