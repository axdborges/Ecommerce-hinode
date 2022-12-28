import { Header } from "../Header";
import { Main } from "../Main";
import { SectionCard } from "../Section";
import { BigImageSection } from "../BigImageSection";
import { LargeImageSection } from "../LargeImageSection";
import { Footer } from "../Footer";


import { 
    bestSellers, 
    mostDesired,
    interests,
    bigProducts, 
    healthLife, 
    bathroomAndBody,
    fragrancies,
    newArrived,
} from "../../database";
import { BigPerfumSection } from "../BigPerfumSection";
import { AfterMainDiv } from "../AfterMainDiv";

export const Body = () => {

    return (
        <>
            <Header/>
            <Main/>
            <AfterMainDiv/>
            <SectionCard title={"mais vendidos"} items={bestSellers} toBuy={true}/>
            <SectionCard title={"isso pode ser do seu interesse"} items={interests} toBuy={false}/>
            <BigImageSection title={"_"} items={bigProducts} toBuy={true}/>
            <SectionCard title={"os mais desejados"} items={mostDesired} toBuy={true}/>
            <SectionCard title={"vida saudável"} items={healthLife} toBuy={true}/>
    
            <SectionCard title={"corpo e banho"} items={bathroomAndBody} toBuy={true}/>

            <SectionCard title={"fragrâncias"} items={fragrancies} toBuy={true}/>
            <SectionCard title={"acabaram de chegar"} items={newArrived} toBuy={true}/>
            <Footer/>
        </>
    )
}