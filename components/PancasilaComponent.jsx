const Pancasila = [
    {pancasila: '1', isi: 'Ketuhanan yang maha esa.', backgroundImage: '/Pancasila/Bintang.png' },
    {pancasila: '2', isi: 'Kemanusiaan yang adil dan beradab.', backgroundImage: '/Pancasila/Rantai.jpeg' },
    {pancasila: '3', isi: 'Persatuan Indonesia.', backgroundImage: '/Pancasila/PohonBeringin.jpeg' },
    {pancasila: '4', isi: 'Kerakyatan yang dimpimpin oleh hikmah kebijaksaan dalam permusyawaratan/perwakilan.', backgroundImage: '/Pancasila/Banteng.png' },
    {pancasila: '5', isi: 'Keadilan sosial bagi seluruh rakyat Indonesia.', backgroundImage: '/Pancasila/PadiKapas.png' },
]

export default function PancasilaComponent() {

    return (
        <>
            <div className="container px-4 py-5" id="scrollPancasila">
                <h2 className="pb-2 border-bottom">Pancasila</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">

                    {Pancasila.map((item) => (
                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${item.backgroundImage})`}}>
                                <div className="d-flex flex-column h-100 p-5 pb-3">
                                    <h3 className="p-2 mt-5 mb-4 display-6 lh-1 fw-bold text-black bg-white shadow-lg">{item.isi}</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/07/28/1363737012.jpg" alt="Bootstrap" width="32" height="32"
                                                 className="rounded-circle border border-white" />
                                        </li>
                                        <li className="d-flex align-items-center me-3 text-black bg-white p-2 shadow-lg">
                                            <small>Pancasila</small>
                                        </li>
                                        <li className="d-flex align-items-center text-black bg-white p-2 shadow-lg">
                                            <small>{item.pancasila}</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
