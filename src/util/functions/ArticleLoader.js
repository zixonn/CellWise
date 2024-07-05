import A1 from "../../screens/articles/A1";
import A2 from "../../screens/articles/A2";
import A3 from "../../screens/articles/A3";

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
        default:
            articleBody = () => null; 
            break;
    }
    return articleBody;
}

export { findArticle };
