import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import {GrNext} from "react-icons/gr";

const Contoh = [
    {judul: "Gotong Royong", deskripsi: "Gotong Royong membersihkan sungai, lingkungan sekitar, membersihkan sekolah."},
    {judul: 'Menjaga Rasa Persaudaraan', deskripsi: 'Menjaga Rasa Persaudaraan agar selalu tercipta lingkungan yang dama dan tentram.'},
]

export default function PenjelasanTemaComponent() {
    return (
        <>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">Satukan Semangat dan Solidaritas Menuju Generasi Merdeka</h2>

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2 className="fw-bold text-body-emphasis">Satukan Semangat Solidaritas Negara Merdeka</h2>
                        <p className="text-body-secondary pb-3 border-bottom">Satukan semangat yang berarti Bersatu dan Semangat untuk menuju negara yang makmur dan sejahtera. Solidaritas yang berarti saling percaya pada sesama Bangsa Negara Indonesia agar kita bisa saling hormat - menghormati dan peduli terhadap sesama Bangsa Negara Indonesia.</p>
                        <p className="text-body-secondary">Berikut adalah contoh - contoh agar Bangsa Negara Indonesia selalu Bersatu untuk Menuju Generasi Merdeka.</p>
                        <a href="#scrollPancasila"><button type="button" className="btn btn-danger btn-lg"><GrNext /></button></a>
                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">

                            {Contoh.map((item) => (
                                <div className="col d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-danger bg-gradient fs-4 rounded-3">
                                        <svg className="bi" width="1em" height="1em">

                                        </svg>
                                    </div>
                                    <h4 className="fw-semibold mb-0 text-body-emphasis">{item.judul}</h4>
                                    <p className="text-body-secondary">{item.deskripsi}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
