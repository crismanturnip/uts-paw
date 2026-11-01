import mahasiswa from '../../mahasiswa.json'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/crismanturnip/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1><center>Tentang</center></h1>
    <dl></dl>
      <dl>
        <dt>Nama</dt>
        <dd>{nama}</dd>
        <dt>NIM</dt>
        <dd>{nim}</dd>
        <dt>Kelas</dt>
        <dd>{kelas}</dd>
        <dt>Tema</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}