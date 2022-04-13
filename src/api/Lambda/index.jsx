import React from "react";
import axios from 'axios';


export const Base = axios.create({
    baseURL: 'https://algumaURL.com.br/'
})
