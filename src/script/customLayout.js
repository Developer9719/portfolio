import { basicElementStructures } from "./structure.js";
import '../styles/customLayout.css';

export function customHTMLLayout() {
    /** Layout
     * - Top Section:
     *   - photo of me in a circle in the center with text on either side 
     * - 2nd Section: Current Qualifications
     *   - 2 columns 
     *     - left column is a photo of my diploma with date recieved and school name 
     *     - right column is a photo of odin projects logo with an explaination of why I'm doing it, what it covers,
     *       when I started, and when I expect to finish
     * - 3rd Section: Skills
     *   - list of skills with icons (html, css, js, react, git, github, etc)
     * - 4th Section: Projects
     *   - grid of project screenshots with title and short description below each one
     * - 5th Section: Professional Links
     *   - Linkedin
     *   - GitHub
     *   - Upwork
     *   - Fiverr
     */
    // Top Section
    const topSection = basicElementStructures.div(undefined, ['topSection']);
    new basicElementStructures(topSection, '.mainContent');

    for (let i=0; i < 3; i++) {
        let className = 'gridColumn_' + i;
        let content;

        let gridColumn = basicElementStructures.div(content, [className]);
        new basicElementStructures(gridColumn, '.topSection');
    }

    const selfieImage = basicElementStructures.image('../assets/selfieImage.jpg', 'Photo of Me', ['selfieImage']);
    new basicElementStructures(selfieImage, '.gridColumn_1');

    let content = "Hello I am Justin and I am a web developer.";
    const leftSideContent = basicElementStructures.p(content, ['topSectionParagraph']);

    content = "I have a Web Development Diploma from Georgian College and I am currently working through The Odin Project to further enhance my skills.";
    const rightSideContent = basicElementStructures.p(content, ['topSectionParagraph']);

    new basicElementStructures(leftSideContent, '.gridColumn_0');
    new basicElementStructures(rightSideContent, '.gridColumn_2');
}


/** Issues to Fix:
 * - 404 Error on Image
 *   - Path is correct
 */