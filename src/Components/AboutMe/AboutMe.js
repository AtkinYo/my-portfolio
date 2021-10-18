import { AboutMeContainer, AboutMeText } from '../Styles/StyledAboutMe';

export default function AboutMe() {
  return (
    <AboutMeContainer>
      <AboutMeText>
        <h2 id="about">About Me</h2>
        <p>
          Greetings! I’m a front-end web developer who loves solving problems to
          create intutive and responsive code that brings the web to life. I’m
          always pushing myself to understand new patterns and different ways of
          approaching a problem to improve as a web developer by staying on top
          of the latest industry standards and solving code challenges.
        </p>

        <p>
          Through my time at South Mountain Community College, I learned the
          basics of the web, such as HTML essentials, the box model, CSS
          Flexbox, CSS Grid, and building responsive mobile-first code. I then
          jumped to Javascript where I have familiarized myself with ES5/ES6
          standards, utilizing Async/Await to integrate API’s, DOM manipulation,
          state management, installing NPM packages, and much more, like version
          control software Git and Javascript libarary jQuery. I’m now
          familiarizing myself with React (which I built this portfolio with),
          and server-side engineering to improve my knowledge as a developer.
        </p>

        <p>
          When I’m not coding, I’m most likely out hiking South Mountain while
          enjoying a podcast, spending time with family, looking for new vinyl
          records to add to my collection, at a stand-up comedy show, or
          somewhere Googling architecture in a coffe shop enjoying some live
          music. 😃
        </p>
      </AboutMeText>
    </AboutMeContainer>
  );
}
