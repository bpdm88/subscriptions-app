const FormField = ({ label, name, type, handleChange, value }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};

export default FormField;
