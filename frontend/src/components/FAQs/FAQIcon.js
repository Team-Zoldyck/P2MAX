import React from 'react'

export const CloseFAQsIcon = ({ className, click }) => {
    return (
            <svg width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} cursor-pointer`} onClick={click}>
                <path d="M0.27907 0H23.7209C23.907 0 24 0.0701754 24 0.210526V1.78947C24 1.92982 23.907 2 23.7209 2H0.27907C0.0930233 2 0 1.92982 0 1.78947V0.210526C0 0.0701754 0.0930233 0 0.27907 0Z" fill="#05377F"/>
            </svg>
    )
}

export const OpenFAQsIcon = ({ className, click }) => {
    return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} cursor-pointer`} onClick={click}>
                    <path d="M10.9539 0H13.0469C13.233 0 13.326 0.0888889 13.326 0.266667V23.7333C13.326 23.9111 13.233 24 13.0469 24H10.9539C10.7678 24 10.6748 23.9111 10.6748 23.7333V0.266667C10.6748 0.0888889 10.7678 0 10.9539 0Z" fill="#05377F"/>
                    <path d="M0.27907 10.7334H23.7209C23.907 10.7334 24 10.8223 24 11V12.9999C24 13.1776 23.907 13.2665 23.7209 13.2665H0.27907C0.0930233 13.2665 0 13.1776 0 12.9999V11C0 10.8223 0.0930233 10.7334 0.27907 10.7334Z" fill="#05377F"/>
            </svg>
    )
}