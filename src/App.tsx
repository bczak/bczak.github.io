import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { TimePicker } from "./components/TimePicker";

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

import {
  CalendarIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const Experience = tw.section`mt-12`;
const Job = tw.h2`text-4xl font-bold`;
const Company = tw.h3`text-3xl font-medium`;
const JobDescription = tw.p`text-lg`;

const TimePickerSection = tw.section`mt-12`;
const TimePickerTitle = tw.h2`text-4xl font-bold border-b-4 border-black pb-2 uppercase`;
const OpenButton = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 20px;
  border: none;
  background: #65558f;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #7c6ca6;
  }
`;
const SelectedTime = tw.p`text-lg mt-2`;

const App: React.FC = () => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [picker24Open, setPicker24Open] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTime24, setSelectedTime24] = useState<string | null>(null);

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

      <TimePickerSection>
        <TimePickerTitle>Time Picker Demo</TimePickerTitle>
        <OpenButton onClick={() => setPickerOpen(true)}>
          Open 12h Time Picker
        </OpenButton>
        {selectedTime && <SelectedTime>Selected: {selectedTime}</SelectedTime>}
        <TimePicker
          open={pickerOpen}
          onClose={() => setPickerOpen(false)}
          onConfirm={(h, m) => {
            const period = h >= 12 ? "PM" : "AM";
            const display = h === 0 ? 12 : h > 12 ? h - 12 : h;
            setSelectedTime(
              `${display}:${m.toString().padStart(2, "0")} ${period}`
            );
          }}
          initialHours={10}
          initialMinutes={30}
          format="12h"
        />

        <br />
        <OpenButton onClick={() => setPicker24Open(true)}>
          Open 24h Time Picker
        </OpenButton>
        {selectedTime24 && (
          <SelectedTime>Selected: {selectedTime24}</SelectedTime>
        )}
        <TimePicker
          open={picker24Open}
          onClose={() => setPicker24Open(false)}
          onConfirm={(h, m) => {
            setSelectedTime24(
              `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
            );
          }}
          initialHours={14}
          initialMinutes={45}
          format="24h"
        />
      </TimePickerSection>
    </Container>
  );
};

export default App;
