import { Avatar } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";

const HomeContainer = styled.div`
  font-family: "Poppins", sans-serif;

  p {
    font-weight: 400;
    color: #2d3748;
    font-size: 1.125rem;
  }

  li {
    color: #2d3748;
    margin: 4px 0px;
    font-size: 1.125rem;
  }

  a {
    border-bottom: 1px solid #2296f3;
  }
`;

const TopStrip = styled.div`
  background: linear-gradient(
    270deg,
    #2296f3 25.28%,
    #99cef7 59.7%,
    #0e00ee 97.75%
  );
  width: 100%;
  height: 15px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: #fbfbfb;
`;

const NavbarDiv = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  padding: 1rem;
  background-color: #fbfbfb;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
  padding: 0px 32px;
  padding-bottom: 6rem;
`;
const Header = styled.div`
  max-width: 600px;
  flex: 1;
`;

const Title = styled.h1`
  line-height: 60px;
  color: #1a202c;
  font-weight: 700;
  @media screen and (min-width: 48em) {
    font-size: 3rem;
  }
`;

const TitleMark = styled.mark`
  background-color: #99cef75e;
  padding: 3px 6px;
`;

const Desc = styled.p`
  font-size: 1.125rem;
  line-height: 27px;
  color: #2d3748;
  margin-bottom: 36px;
`;

const Button = styled.a`
  background-color: #2296f3;
  border: none;
  padding: 12px 16px;
  min-width: 2.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const AboutCourseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  padding: 4px 32px;
`;
const AboutCourse = styled.div`
  max-width: 600px;
`;

const AboutCourseTitle = styled.h3`
  font-size: 1.65rem;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Sanskar Tiwari Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='shortcut icon'
          href='https://user-images.githubusercontent.com/55942632/114259224-0cbc5c00-99ea-11eb-83cc-4b98d4752c68.png'
        />
      </Head>
      <TopStrip></TopStrip>
      <NavbarContainer>
        <NavbarDiv></NavbarDiv>
      </NavbarContainer>
      <HeaderContainer>
        <Header>
          <Avatar
            alt='blurweb.app'
            src='https://user-images.githubusercontent.com/55942632/112448635-9e846200-8d78-11eb-8d3c-a7e6a68d8e57.jpeg'
            style={{ height: "120px", width: "120px" }}
          />
          <Title>I'm Sanskar Tiwari</Title>
          <Desc>
            I am Developer, Writer and Creator with Love for Great UI and apps
            that makes impact in people life. I teach on{" "}
            <a href='https://www.youtube.com/SanskarTiwari' target='_blank'>
              Youtube
            </a>
            , write blog at <a href='http://flutternerd.com'>flutternerd.com</a>
            .
          </Desc>

          {/* <Button href='#courseOverview'>Watch Now →</Button> */}
        </Header>
      </HeaderContainer>
      {/* About Course */}
      <AboutCourseContainer>
        <AboutCourse>
          <AboutCourseTitle>
            Apps I Build & And am Proud Off Most
          </AboutCourseTitle>

          {/*  */}

          <div style={{ display: "flex" }}>
            <Avatar
              alt='blurweb.app'
              src='https://blurweb.app/assets/logo.svg'
              style={{ height: "70px", width: "70px" }}
            />

            <div style={{ marginLeft: "16px" }}>
              <p style={{ fontWeight: "600" }}>
                blurweb.app <span>(chrome extension)</span>
              </p>
              <p>
                Helps to Hide sensitive information on web, helped me learn dev
                skills plus soft skills of interacting with customers
                understanding their needs and then fulfilling them being a paid
                product also learned a lot about how to sell (1000+ paid
                customers).
              </p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <Avatar
              alt='FlutterDevConnect'
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "#2296f3",
              }}
            >
              F
            </Avatar>
            <div style={{ marginLeft: "16px" }}>
              <p style={{ fontWeight: "600" }}>
                flutterdevconnect.web.app <span>(Web | Android | IOS)</span>
              </p>
              <p>
                Fully Functioning chat app got greate response on{" "}
                <a
                  href='https://www.linkedin.com/feed/update/urn:li:activity:6661982998658977793/'
                  target='_blank'
                >
                  linkedin
                </a>{" "}
                and i later taught to build{" "}
                <a
                  href='https://www.youtube.com/watch?v=FTju8w4zEno&list=PLBxWkM8PLHcr2vkdY2n9rIcxjZ9Th3Us7&index=1&t=0s'
                  target='_blank'
                >
                  on youtube
                </a>
                . Impacted more than 100K people
              </p>
            </div>
          </div>

          <AboutCourseTitle>Live Workshops</AboutCourseTitle>

          <div style={{ display: "flex" }}>
            <Avatar
              alt='FlutterDevConnect'
              src='https://dscwow.tech/favicon.png'
              style={{
                height: "70px",
                width: "70px",
              }}
            >
              F
            </Avatar>
            <div style={{ marginLeft: "16px" }}>
              <p style={{ fontWeight: "600" }}>dscwow.tech</p>
              <p>
                DSC Week Of Wonders, aka DSC WOW. A weeklong event consisting of
                a 4 days of workshops/sessions and a 48 hours hackathon named
                CodeOffDuty. I took a{" "}
                <a
                  href='https://www.youtube.com/watch?v=M5eFIlXT8Rc&t=6218s'
                  target='_blank'
                >
                  workshop on Day3
                </a>{" "}
                to help student learn building apps for hackathon
              </p>
            </div>
          </div>

          <AboutCourseTitle>Blogs</AboutCourseTitle>

          <div style={{ display: "flex" }}>
            <Avatar
              alt='FlutterDevConnect'
              src='https://user-images.githubusercontent.com/55942632/114259258-35dcec80-99ea-11eb-8ac2-60250790ee5f.png'
              style={{
                height: "70px",
                width: "70px",
              }}
            >
              F
            </Avatar>
            <div style={{ marginLeft: "16px" }}>
              <p style={{ fontWeight: "600" }}>flutternerd.com</p>
              <p>Flutter blog to Learn and master flutter app development</p>
            </div>
          </div>
        </AboutCourse>
      </AboutCourseContainer>
    </HomeContainer>
  );
}
