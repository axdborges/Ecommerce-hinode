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
            <SectionCard title={"mais vendidos"} items={bestSellers}/>
            <SectionCard title={"os mais desejados"} items={mostDesired}/>
            <SectionCard title={"vida saudável"} items={healthLife}/>
            {/* <SectionCard title={"corpo e banho"} items={mostDesired}/> */}
            {/* <SectionCard title={"fragrâncias"} items={mostDesired}/> */}
            <SectionCard title={"acabaram de chegar"} items={newArrived}/>
            <Footer/>
        </>
    )
}