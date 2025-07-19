// pages/register.js
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Akun didaftarkan: ${email}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 Daftar Akun</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Kata Sandi"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Daftar</button>
      </form>
      <p>Sudah punya akun? <Link href="/login">Login di sini</Link></p>
    </div>
  );
}

const formStyle = { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: 'auto' };
const inputStyle = { padding: '0.5rem', fontSize: '1rem' };
const buttonStyle = { padding: '0.5rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px' };
