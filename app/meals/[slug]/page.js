import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({params}){

    const meal = getMeal(params.slug);

    if(!meal){
        notFound();
    }
    
    return{
        title:meal.title,
        description: meal.summary 
    }
}

export default function MealDetialsPage({params}){
    const meal = getMeal(params.slug);
    meal.instructions = meal.instructions.replace(/\n/g,'<br/>');
    
    if(!meal){
        notFound();
    }

    return <>
    <header className={classes.header}>
        <div className={classes.image}>
        <Image src={meal.image} alt={meal.title} fill/>
        </div>
        <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
                by <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
            </p>
            <p className={classes.summary}> {meal.summary} </p>
        </div>

    </header>
    <main>
    <p 
    className={classes.instructions}
    dangerouslySetInnerHTML={{__html:meal.instructions,}}
    ></p>
    </main>
    </>;
 
}