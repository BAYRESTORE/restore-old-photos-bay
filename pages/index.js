// pages/index.js
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>📸 Selamat Datang di Restore Old Photos.Bay</h1>
      <p>
        Perbaiki, ubah, dan percantik foto lama Anda dengan teknologi AI. Gratis & mudah dari HP Anda.
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <a href="/restoration-siri" style={buttonStyle}>🔧 Restoration Siri</a>
        <a href="/artroom" style={buttonStyle}>🧥 ArtRoom (Ganti Pakaian)</a>
        <a href="/artphotos" style={buttonStyle}>🎨 ArtPhotos (Edit Manual)</a>
        <a href="/login" style={buttonStyle}>🔐 Login Pengguna</a>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: 'block',
  margin: '1rem auto',
  padding: '1rem 2rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  width: '80%',
  maxWidth: '300px',
};
