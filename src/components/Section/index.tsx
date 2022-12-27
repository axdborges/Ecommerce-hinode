import { StyledSection } from "./styles";
import { Card } from "../Card";
import { ImageCard } from "../ImageCard";
import { ISection } from "../../interfaces";






export const SectionCard = (props: ISection) => {

    if(props.items.length <= 4) {
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
    } else {
        const firstItems = props.items.slice(0, 4)
        const otherItems = props.items.slice(4, 8)

        return (
            <>
                <StyledSection>
                    <h2>
                        {props.title}
                    </h2>
                    <div className="cards">
                        {   
                            firstItems.map((item, index) => {
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
                <StyledSection>
                    <div className="cards">
                        {   
                            otherItems.map((item, index) => {
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
            </>
        ) 
    }

}