/*import React, { useState } from 'react';
import '../css/Profile.css';
import profileImage from '../assets/profile.jpg';
import editIcon from '../assets/edit-icon.png'; // Import the edit icon

const Profile = () => {
    const [editableFields, setEditableFields] = useState({
        Name: false,
        Email: false,
        Password: false,
        PhoneNumber: false,
        Address: false,
        State: false,
        ZipCode: false,
    });

    const [formData, setFormData] = useState({
        Name: 'Rahul Kumar',
        Email: 'rahulkumar@gmail.com',
        Password: '*************',
        PhoneNumber: '9598755687',
        Address: 'Patia, Bhubaneswar',
        State: 'Odisha',
        ZipCode: '751024',
    });

    const toggleEdit = (field) => {
        setEditableFields((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    return (
        <div className="profile-container">
            <header className="header">
                <h1>B.planet</h1>
                <button className="contact-button">Contact us</button>
            </header>
            <div className="profile-card">
                <img src={profileImage} alt="profile" className="profile-image" />
                <div className="profile-info">
                    {Object.keys(formData).map((field) => (
                        <div key={field} className="profile-field">
                            <label>{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                            <div className="input-container">
                                <input
                                    type={field === 'Password' ? 'password' : 'text'}
                                    value={formData[field]}
                                    readOnly={!editableFields[field]}
                                    onChange={(e) => handleChange(e, field)}
                                />
                                <img
                                    src={editIcon}
                                    alt="edit"
                                    className="edit-icon"
                                    onClick={() => toggleEdit(field)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;*/
import React, { useState } from 'react';
import '../css/Profile.css';
import profileImage from '../assets/profile.jpg';
import editIcon from '../assets/edit-icon.png'; // Import the edit icon

const Profile = () => {
    const [editableFields, setEditableFields] = useState({
        Name: false,
        Email: false,
        Password: false,
        PhoneNumber: false,
        Address: false,
        State: false,
        ZipCode: false,
    });

    const [formData, setFormData] = useState({
        Name: 'Rahul Kumar',
        Email: 'rahulkumar@gmail.com',
        Password: '*************',
        PhoneNumber: '9598755687',
        Address: 'Patia, Bhubaneswar',
        State: 'Odisha',
        ZipCode: '751024',
    });

    const toggleEdit = (field) => {
        setEditableFields((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    return (
        <div className="profile-container">
            <header className="header">
                <h1 className='h1'>B.planet</h1>
                <button className="contact-button">Contact us</button>
            </header>
            <div className="profile-card">
                <div className="profile-card-header">
                    <img src={profileImage} alt="profile" className="profile-image" />
                </div>
                <div className="profile-info">
                    {Object.keys(formData).map((field) => (
                        <div key={field} className="profile-field">
                            <label>{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                            <div className="input-container">
                                <input
                                    type={field === 'Password' ? 'password' : 'text'}
                                    value={formData[field]}
                                    readOnly={!editableFields[field]}
                                    onChange={(e) => handleChange(e, field)}
                                />
                                <img
                                    src={editIcon}
                                    alt="edit"
                                    className="edit-icon"
                                    onClick={() => toggleEdit(field)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;