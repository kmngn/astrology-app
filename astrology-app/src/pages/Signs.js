import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FetchData from './FetchData';
import {useParams} from "react-router-dom";

function Sign(sign) {
    const params = useParams()

    let data = FetchData('signs/' + params.sign)
  
    return (
      <div className='quote'>
        { data.about }
      </div>
    );
  }
  
  export default Sign;
  