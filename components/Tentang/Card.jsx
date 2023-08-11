import {MdOutlineEmojiPeople, MdSchool} from "react-icons/md";
import {SiBootstrap, SiNextdotjs} from "react-icons/si";

export default function Card() {
    return (
        <>
            <div className="modal modal-sheet position-static d-block bg-secondary p-3 pt-5 py-md-5" tabIndex="-1"
                 role="dialog" id="card">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow-lg">
                        <div className="modal-body p-5">
                            <h2 className="fw-bold mb-0">Halo Guys</h2>
                            <p>Perkenalkan :</p>
                            <ul className="d-grid gap-4 my-5 list-unstyled">
                                <li className="d-flex gap-4">
                                    <svg className="bi flex-shrink-0 fs-1" width="48" height="48">
                                        <MdOutlineEmojiPeople />
                                    </svg>
                                    <div>
                                        <h5 className="mb-0">Nama</h5>
                                        I Made Wisnu Sabda Hutama / Bjoey
                                    </div>
                                </li>
                                <li className="d-flex gap-4">
                                    <svg className="bi text-primary flex-shrink-0 fs-1" width="48" height="48">
                                        <MdSchool />
                                    </svg>
                                    <div>
                                        <h5 className="mb-0">Kelas</h5>
                                        X PPLG 2
                                    </div>
                                </li>
                                <p>Project website ini dibuat pada tanggal 8 Agustus 2023 dan selesai pada tanggal 12 Agustus 2023. Website dengan bertemakan <span className="fw-bold">"Satukan Semangat dan Solidaritas Menuju Generasi Merdeka"</span> ,website ini murni dibuat oleh saya sendiri <span className="fw-bold">(Bjoey)</span></p>

                                <p>Sebenarnya project ini belum selesai dan tidak seusai harapan saya karena waktu yang terbatas untuk menyelesaikan project ini dan hari raya Kuningan yang membuat saya tidak bisa konsisten membuat project ini.</p>

                                <p>Website ini dibuat menggunakan Framework NextJS <SiNextdotjs className="fs-4"/> dan menggunakan Framework Bootstrap <SiBootstrap className="fs-4" />.</p>
                            </ul>
                            <a href="/"><button type="button" className="btn btn-lg btn-primary mt-5 w-100"
                                                data-bs-dismiss="modal">Back
                            </button></a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
