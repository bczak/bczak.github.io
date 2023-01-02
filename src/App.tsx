import React from "react";
import tw, { styled } from "twin.macro";

const Container = tw.div`max-w-4xl mx-auto py-16 px-4`;

const Header = tw.header`flex justify-between flex-col`;
const Name = tw.h1`text-5xl font-bold uppercase`;
const Title = tw.h2`text-2xl text-red-700`;
const Contacts = tw.div`flex flex-row justify-between flex-wrap`;
const ContactItem = tw.div`flex items-start w-1/3 mt-5`;

const Main = tw.main`flex flex-wrap`;

const About = tw.section`mt-12 w-full md:w-2/3 `;
const AboutTitle = tw.h2`text-4xl font-bold border-b-4 border-black pb-2 uppercase`;
const AboutDescription = tw.p`text-lg`;

const Education = tw.section`mt-12 w-full md:w-1/4 md:ml-8 `;
const EducationTitle = tw.h2`text-4xl font-bold border-b-4 border-black pb-2 uppercase`;
const EducationDescription = tw.p`flex flex-col`;

const Skills = tw.section`mt-12`;
const SkillsTitle = tw.h2`text-4xl font-bold`;
const SkillsList = tw.ul`text-xl font-bold`;
const Skill = tw.li`inline-block mr-8`;

const Experience = tw.section`mt-12`;
const Job = tw.h2`text-4xl font-bold`;
const Company = tw.h3`text-3xl font-medium`;
const JobDescription = tw.p`text-lg`;
import {
  CalendarIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Name>Jakhongir Tashpulatov</Name>
        <Title>Fullstack Developer</Title>
        <Contacts>
          <ContactItem>
            <EnvelopeIcon width={24} className="mr-2" />
            tashpulatov.jakhongir@gmail.com
          </ContactItem>
          <ContactItem>
            <PhoneIcon width={24} className="mr-2" />
            +420 775 159 475
          </ContactItem>
          <ContactItem>
            <MapPinIcon width={24} className="mr-2" />
            Prague, CZ
          </ContactItem>
          <ContactItem>
            <LinkIcon width={24} className="mr-2" />
            <a href="https://linkedin.com/in/bczak">LinkedIn</a>
          </ContactItem>
        </Contacts>
      </Header>
      <Main>
        <About>
          <AboutTitle>About Me</AboutTitle>
          <AboutDescription>
            I have been living in Prague for over 6 years and have had the
            opportunity to immerse myself in a new culture and language. I am a
            recent graduate of <b>CTU (ČVUT)</b>, where I received my degree in{" "}
            <b>Software Engineering</b>. I am driven, detail-oriented, and
            always eager to learn and take on new challenges. I am excited to
            bring my unique perspective and skills to a dynamic team and
            contribute to the success of your company.
            <br />
            <br />
            As a <b>React developer with 4 years of experience</b>, I have a
            strong foundation in web development and a passion for building
            intuitive and engaging user interfaces. In addition to React, I am
            proficient in a variety of programming languages including{" "}
            <b>Java, Spring Boot, JavaScript, TypeScript, Vue, and Python</b>. I
            am always looking to expand my skills and take on new challenges,
            and I am excited to contribute my expertise to a dynamic team.
          </AboutDescription>
        </About>
        <Education>
          <EducationTitle>Education</EducationTitle>
          <EducationDescription>
            <span>Bachelor's Degree</span>
            <span>Software Engineering</span>
            <span className="text-red-500">Czech Technical University</span>
            <span className="flex gap-2">
              <CalendarIcon width={24} />
              Sep 2018 - Sep 2021
            </span>
            <span>Prague, CZ</span>
          </EducationDescription>
        </Education>
      </Main>
    </Container>
  );
};

export default App;
