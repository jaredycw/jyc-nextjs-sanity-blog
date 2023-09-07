import blockContent from "./blockcontent";
import post from "./post-schema";
import page from "./page-schema";
import author from "./author-schema";
import album from "./album-schema";
import category from "./category-schema";
import skill from "./skill-schema";
import work from "./work-schema"; 
import experiment from './experiment-schema';
import book from "./book-schema"; 
import course from "./course-schema";
import movie from "./movie-schema"; 
import industry from "./industry-schema"; 
import quote from "./quote-schema";
import youtube from "./youtube"; 
import instagramPost from "./instagramPost"
import myCodeField from "./myCodeField";

const schemas = [post,page,book,course,work, experiment,movie,
author,category,skill,industry,quote,album,blockContent,youtube,instagramPost,myCodeField];

export default schemas;