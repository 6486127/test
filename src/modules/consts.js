import { dateAssemble } from "./functions";

export const form = document.getElementById('form');
export const nationality = document.getElementById('nationality').textContent;
export const day = document.querySelector('.day');
export const mounth = document.querySelector('.mounth');
export const year = document.querySelector('.year');
export const popup = document.querySelector('.popup');
export const wrapper = document.querySelector('.wrapper');
export const image = document.getElementById('valid');
export const emailWarning = document.getElementById('email-warn');
export const button = document.querySelector('.form__button');
export const date = dateAssemble(day,mounth,year);
export const svg = document.getElementById('svg');