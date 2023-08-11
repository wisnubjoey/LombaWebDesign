import Image from "next/image";
import {GrNext} from "react-icons/gr";
export default function HeroComponent() {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5" id="hero">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
                    <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                        <Image src="/Garuda.jpg" alt="ayam goreng" width={500} height={500} loading="lazy" className="shadow-lg d-block mx-lg-auto img-fluid rounded-3"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hari Ulang Tahun Kemerdekaan Indonesia 78th</h1>
                        <p className="lead">Merdeka selalu Negeriku.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="#scrollspyHeading3"><button type="button" className="btn btn-danger"><GrNext /></button></a>
                        </div>
                        <div className="position-absolute start-0 bottom-0 py-4 d-none d-lg-block">
                            <Image src="/burungbawah.jpg" alt="ayam goreng" width={200} height={200}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
