import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'


export default function Statistik() {
    const { items } = useKoleksi()
    const perKategori = items.reduce((hitung, { kategori }) => ({ ...hitung, [kategori]: (hitung[kategori] ?? 0) + 1 }), {})

return (
    <section>
        <h1>Statistik</h1>
        <div className="tabel-gulir">
        <table className="tabel-data"></table>
        <pre>{JSON.stringify(perKategori, null, 2)}</pre>
        <table>
        <thead>
            <tr>
            <th>Kategori</th>
            <th>Jumlah</th>
        </tr>
        </thead>
        <tbody>
            {Object.entries(perKategori).map(([kategori, jumlah]) => (
            <tr key={kategori}>
              <td>{kategori}</td>
              <td>{jumlah}</td>
              </tr>
            ))}
        <tr>
            <td>Kuliah</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Organisasi</td>
            <td>1</td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <td>{items.length}</td>
            </tr>
        </tfoot>
      </table>
    </div>
    </section>
  )
}