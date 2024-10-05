import React, { useState } from 'react';

const Formulario = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const [superheroes, setSuperheroes] = useState([]);
    const [header, setHeader] = useState('Registro de superhéroe');
    
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (formData.firstname.length < 4) {
            newErrors.firstname = '¿Qué superhéroe que se aprecie tiene un nombre tan corto? Thor y Hulk tienen al menos 4 letras.';
            isValid = false;
        } else {
            newErrors.firstname = '';
        }

        if (formData.lastname.length < 4) {
            newErrors.lastname = '¿Qué superhéroe tiene un apellido tan corto?';
            isValid = false;
        } else {
            newErrors.lastname = '';
        }
        
        if (formData.email.length < 10) {
            newErrors.email = 'El correo es muy corto. Recuerda incluir el @ y una terminación digna de un superhéroe.';
            isValid = false;
        } else {
            newErrors.email = '';
        }

        if (formData.password.length < 12) {
            newErrors.password = 'La contraseña debe tener al menos 12 caracteres ultra secretos.';
            isValid = false;
        } else {
            newErrors.password = '';
        }

        if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = 'Las contraseñas no coinciden.';
            isValid = false;
        } else {
            newErrors.confirmpassword = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {

            setSuperheroes([...superheroes, formData]);

            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmpassword: '',
            });
            setHeader(`Superhéroe creado: ${formData.firstname} ${formData.lastname}`);
        }
    };

    return (
        <div>
            <h1>Bienvenido a la Liga de Superheroes</h1>
            <h2>{header}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Nombre:</label>
                    <input type="text" name="firstname" value={formData.firstname}onChange={handleInputChange} />
                    {errors.firstname && <span style={{ color: 'greenyellow' }}>{errors.firstname}</span>}
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
                    {errors.lastname && <span style={{ color: 'greenyellow' }}>{errors.lastname}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleInputChange}/>
                    {errors.email && <span style={{ color: 'greenyellow' }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
                    {errors.password && <span style={{ color: 'greenyellow' }}>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirmar Contraseña:</label>
                    <input type="password" name="confirmpassword" value={formData.confirmpassword} onChange={handleInputChange} />
                    {errors.confirmpassword && <span style={{ color: 'greenyellow' }}>{errors.confirmpassword}</span>}
                </div>
                <button type="submit">Crear Superhéroe</button>
            </form>

            <h2>Superhéroes Creados:</h2>
            <ul>
                {superheroes.map((hero, index) => (
                    <li key={index}>
                        {hero.firstname} {hero.lastname} - {hero.email}
                    </li>
                ))}
            </ul>
            <div>
                
            </div>
        </div>
    );
}

export default Formulario;
