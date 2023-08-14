import {BsDiscord, BsInstagram} from "react-icons/bs";
import {BiChurch} from "react-icons/bi";

export default function Hubungi() {
    return (
        <>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">Hubungi Saya <span className="fw-bold">(Bjoey)</span></h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div>
                            <BsDiscord className="text-primary bg-gradient fs-1 mb-3"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Discord</h3>
                        <p>BjoeyR</p>
                        <a href="https://discord.gg/pmgucZag" className="icon-link">
                            Click this
                        </a>
                    </div>

                    <div className="feature col">
                        <div>
                            <BsInstagram className="text-primary bg-gradient fs-1 mb-3"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Instagram</h3>
                        <p>@wisnubjoey</p>
                        <a href="https://www.instagram.com/wisnubjoey/" className="icon-link">
                            Click this
                        </a>
                    </div>

                    <div className="feature col">
                        <div>
                            <BiChurch className="text-primary bg-gradient fs-1 mb-3"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Hubungi Sekolah</h3>
                        <p>+62 822-61-9000-70</p>
                        <a href="https://www.smktibaliglobalbadung.sch.id/" className="icon-link">
                            www.smktibaliglobalbadung.sch.id
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
