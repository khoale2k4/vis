"use client";
import LoginForm from "./form/login";
import RegisterForm from "./form/register";
import { ResetForm } from "./form/forgotPassword";
import { useState } from "react";
export default function AuthView() {
    const [view, setView] = useState<'login' | 'register' | 'reset'>('login');
    return (
        <div className="w-screen h-screen grid place-items-center bg-neutral-10">
            <div className="w-1/3 ">
                {view === 'login' && < LoginForm setView={setView} />}
                {view === 'register' && < RegisterForm setView={setView} />}
                {view === 'reset' && < ResetForm setView={setView} />}
            </div>
        </div>
    );
}