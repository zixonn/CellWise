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
import A11 from "../../screens/articles/A11";
import A12 from "../../screens/articles/A12"

const findArticle = (articleTitle) => {
    let articleBody;
    switch(articleTitle) {
        case "What Is Sickle Cell Disease?":
            articleBody = A1; 
            break;
        case "Causes of Sickle Cell":
            articleBody = A2; 
            break;
        case "Effects On the Body":
            articleBody = A3; 
            break;
        case "Common Symptoms":
            articleBody = A4; 
            break;
        case "How They Manifest":
            articleBody = A5; 
            break;
        case "Diagnostic Tests":
            articleBody = A6; 
            break;
        case "Common Procedures":
            articleBody = A7; 
            break;
        case "Medications":
            articleBody = A8; 
            break;
        case "Therapies":
                articleBody = A9; 
                break;
        case "Lifestyle Changes":
                articleBody = A10; 
                break;
        case "Tips and Advice":
                articleBody = A11; 
                break;
        case "Athletes":
                articleBody = A12; 
                break;
        default:
            articleBody = () => null; 
            break;
    }
    return articleBody;
}

export { findArticle };
