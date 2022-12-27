import { StyledSection } from "./styles";
import { Card } from "../Card";
import { ImageCard } from "../ImageCard";
import { ISection } from "../../interfaces";






export const SectionCard = (props: ISection) => {

    return (
        <StyledSection>
            <h2>
                {props.title}
            </h2>
            <div className="cards">
                {   
                    props.toBuy ?
                    props.items.map((item, index) => {
                        return (
                            <Card 
                            url={item.url} 
                            title={item.title} 
                            price={item.price}
                            key={index}/>
                        )
                    })
                    : props.items.map((item, index) => {
                        return (
                            <ImageCard 
                            url={item.url}
                            title={item.title}
                            key={index}/>
                        )
                    })
                }
            </div>
            
        </StyledSection>
    )

}