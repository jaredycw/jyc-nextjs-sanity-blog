
import post from "./post-schema";
import author from "./author-schema";
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
import growth from "./growth-schema";

const schemas = [post,work, experiment,book,course, growth,movie,
author,category,skill,industry,quote,youtube,instagramPost];

export default schemas;