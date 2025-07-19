// pages/artroom/index.js
import { useState } from 'react';

export default function ArtRoom() {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎭 ArtRoom - Ganti Pakaian AI</h1>
      <p>Unggah foto Anda dan pilih template pakaian:</p>

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br /><br />

      <label>Pilih Pakaian: </label>
      <select>
        <option>Jas Formal</option>
        <option>Kebaya Wanita</option>
        <option>Seragam SD</option>
        <option>Seragam SMP</option>
        <option>Seragam SMA</option>
        <option>Batik Pria</option>
        <option>Casual Dress</option>
        <option>Blazer Wanita</option>
        <option>Jas Almamater</option>
        <option>Pakaian Wisuda</option>
      </select>

      <br /><br />
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: '300px', borderRadius: '10px' }} />}
    </div>
  );
  }
