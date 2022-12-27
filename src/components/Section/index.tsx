import { StyledSection } from "./styles";
import { Card } from "../Card";
import { ReactNode } from "react";

// import { IProduct } from "../Card";

interface IProduct {
    url: string;
    title: string;
    price: number;
}

interface ISection {
    title: string;
    items: IProduct[];
}

export const SectionCard = (props: ISection) => {

    return (
        <StyledSection>
            <h2>
                {props.title}
            </h2>
            <div className="cards">
                {
                    props.items.map((item, index)=> {
                        return (
                            <Card 
                            url={item.url} 
                            title={item.title} 
                            price={item.price}
                            key={index}/>
                        )
                    })
                }
            </div>
            
        </StyledSection>
    )

}