'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
        console.error('Error signing in:', error.message);
        alert(`Error signing in: ${error.message}`);
        setEmail('');
        setPassword('');
        return;
    }

    if (!error && data.session) {
      router.push('/protected');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col space-y-2 w-96">
            <input 
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                placeholder="Email"
                className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900" 
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="border-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-600 focus:bg-gray-900"
            />
            <button onClick={handleSignIn} className="bg-gray-500 hover:bg-gray-600 text-white p-2">Sign in</button>
        </div>
    </div>
  )
}