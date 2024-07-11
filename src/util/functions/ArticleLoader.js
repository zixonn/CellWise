import A1 from "../../screens/articles/A1";
import A2 from "../../screens/articles/A2";
import A3 from "../../screens/articles/A3"
import A4 from "../../screens/articles/A4";
import A5 from "../../screens/articles/A5";
import A6 from "../../screens/articles/A6"
import A7 from "../../screens/articles/A7";
import A8 from "../../screens/articles/A8";
import A9 from "../../screens/articles/A9"
import A10 from "../../screens/articles/A10";

const findArticle = (articleTitle) => {
    let articleBody;
    switch(articleTitle) {
        case "What Is Sickle Cell Disease?":
            articleBody = A1; 
            break;
        case "Causes and Risk Factors":
            articleBody = A2; 
            break;
        case "Sickle Cell Trait":
            articleBody = A3; 
            break;
        case "Symptoms":
            articleBody = A4; 
            break;
        case "How Sickle Cell Disease May Affect Health":
            articleBody = A5; 
            break;
        case "Diagnosis":
            articleBody = A6; 
            break;
        case "Medicines":
            articleBody = A7; 
            break;
        case "Therapies":
                articleBody = A8; 
                break;
        case "Living With Sickle Cell Disease":
                articleBody = A9; 
                break;
        case "Pregnancy and Reproduction":
                articleBody = A10; 
                break;
        default:
            articleBody = () => null; 
            break;
    }
    return articleBody;
}

export { findArticle };
