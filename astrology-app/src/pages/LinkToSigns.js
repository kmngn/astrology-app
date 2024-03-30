import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FetchData from './FetchData';


let signs = [
    { label: "aries", url: 'http://localhost:3000/signs/aries' },
    { label: "taurus", url: 'http://localhost:3000/signs/taurus' },
    { label: "gemini", url: 'http://localhost:3000/signs/gemini' },
    { label: "cancer", url: 'http://localhost:3000/signs/cancer' },
    { label: "leo", url: 'http://localhost:3000/signs/leo' },
    { label: "virgo", url: 'http://localhost:3000/signs/virgo' },
    { label: "libra", url: 'http://localhost:3000/signs/libra' },
    { label: "scorpio", url: 'http://localhost:3000/signs/scorpio' },
    { label: "sagittarius", url: 'http://localhost:3000/signs/sagittarius' },
    { label: "capricorn", url: 'http://localhost:3000/signs/capricorn' },
    { label: "aquarius", url: 'http://localhost:3000/signs/aquarius' },
    { label: "pisces", url: 'http://localhost:3000/signs/pisces' }
];

function Signs() {
    return (
        <div id='link-container'>
            <h1 id='sign'>explore the signs!</h1>
            <div id='each-link'>
                {signs.map(sign => (
                    <p><a class="link" href={sign.url}>{sign.label}</a></p>
                ))}
            </div>
        </div>
    );
}

export default Signs;
