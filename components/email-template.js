import * as React from 'react';



export function EmailTemplate({ name, email, phone, message }) {
    return (
        <div>
            <div>
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Message:</strong> {message}</p>
            </div>
        </div>
    );
}