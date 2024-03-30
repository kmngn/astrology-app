import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FetchData from './FetchData';
import { useParams } from "react-router-dom";

// about, career, love, health, relationship, strengths, weaknesses
function Sign(sign) {
  const params = useParams()

  let data = FetchData('signs/' + params.sign)

  let catsList = [
    {label: 'about', func: data.about},
    {label: 'strengths', func: data.strengths},
    {label: 'weaknesses', func: data.weaknesses},
    {label: 'career', func: data.career},
    {label: 'love', func: data.love},
    {label: 'health', func: data.health},
    {label: 'relationship', func: data.relationship}
  ]

  const [index, setIndex] = useState(0);
  const length = catsList.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  let cat = catsList[index];

  return (
    <div id='sign-container'>
      <div id='blurb-container'>
        <div class='sign-blurb'>
          <h1 id='sign'> {params.sign} </h1>
          <p>
            element: {data.element} <br />
            dates: {data.date_range} <br />
            ruling planet: {data.ruling_planet}
          </p>
        </div>
      </div><div id='desc-parent'>
        <div id='cat'>
          <button onClick={handlePrevious}>←</button>
          <h1 id='sign'> {cat.label}: </h1>
          <button onClick={handleNext}>→</button>
        </div>
        <div id='desc'>
          <div>
            {cat.func}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
