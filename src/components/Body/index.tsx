import { Header } from "../Header";
import { Main } from "../Main";
import { SectionCard } from "../Section";
import { Footer } from "../Footer";


import { 
    bestSellers, 
    mostDesired, 
    healthLife, 
    bathroomAndBody,
    fragrancies,
    newArrived,
} from "../../database";

export const Body = () => {

    return (
        <>
            <Header/>
            <Main/>
            <SectionCard title={"mais vendidos"} images={bestSellers}/>
            <SectionCard title={"os mais desejados"} images={mostDesired}/>
            <SectionCard title={"vida saudável"} images={mostDesired}/>
            {/* <SectionCard title={"corpo e banho"} images={mostDesired}/> */}
            {/* <SectionCard title={"fragrâncias"} images={mostDesired}/> */}
            <SectionCard title={"acabaram de chegar"} images={mostDesired}/>
            <Footer/>
        </>
    )
}