"use client";

import {NavbarComponent} from "@/components/NavbarComponent";
import HeroComponent from "@/components/HeroComponent";
import FooterComponent from "@/components/FooterComponent";
import JumbotronComponent from "@/components/JumbotronComponent";
import PenjelasanTemaComponent from "@/components/PenjelasanTemaComponent";
import PancasilaComponent from "@/components/PancasilaComponent";

export default function Home() {
  return (
    <>
      <NavbarComponent />
        <div className="b-example-divider"></div>
      <HeroComponent />
      <JumbotronComponent />
      <PenjelasanTemaComponent />
      <PancasilaComponent />
      <FooterComponent />
    </>
  )
}
