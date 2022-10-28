import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="container w-75 mt-5">
      <h1 className="text-center text-success mb-4">Frequently Asked Questions</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Who is this course for?</Accordion.Header>
          <Accordion.Body>
            Who wants to become a web developer. For those who want to learn web development from
            scratch and then get a job in a software company as a web developer. For those who don't
            know much about programming or web development. Even those who have studied CSE for four
            years and have not learned much about how to do it, they can learn complete web
            development from this course and apply for jobs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What prior experience do we need before starting this course?
          </Accordion.Header>
          <Accordion.Body>
            Since we are teaching from scratch. So you don't need to know anything beforehand. But
            if you have time, you can do these three things. 1. You need to keep some brain space to
            get the things in your head after watching the video. 2. Just joining the course will
            not make you an auto web developer. Must have a hard-working, stick-to-it mentality. 3.
            If you get stuck somewhere, you have to have the mentality of asking for help and the
            will to stick around.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>What is included in the course?</Accordion.Header>
          <Accordion.Body>
            You can understand that by looking at the course curriculum. But in short, this course
            has everything you need to become a serious web developer these days. In short, from
            HTML, CSS to bootstrap, JavaScript, Git, ES6, REST API, server, JSON are there. At the
            same time, there is a system for making complete websites with React, the framework that
            currently has the most jobs. In addition, there are many other things including node,
            database (mongodb), debug, problem solving, interview questions. And in the whole course
            you will be shown 11 websites. 11 more websites will be your homework. In order to
            complete this whole thing, there is no way without becoming a top-notch junior web
            developer.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How to get a job after completing the course??</Accordion.Header>
          <Accordion.Body>
            Notice one thing. But we do not guarantee the job. We say if you finish the main course
            well on time you will go to SCIC. Job, interview related special training will be given.
            Work hard there and our four job placement team members will forward your CV/resume to
            various companies. Whether that company calls you for an interview or not is their
            decision. It is also their decision whether to give you a job or not if you are called
            for an interview. From our side, we are committing to this much -- we will help you if
            you stick with it. I will guide. I will forward your CV to our connections.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Did everyone get a job from your course?</Accordion.Header>
          <Accordion.Body>
            no 100% not everyone gets job. But those who finish the main course. And SCIC finishes
            well and gets 70% of them jobs or interns. Some of the rest may be early in university
            or school and not looking for jobs or internships. But those who cannot finish the
            course on time. We have support for them too and some of them sometimes get jobs or
            interns.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            What should I do if I get stuck somewhere while following the course?
          </Accordion.Header>
          <Accordion.Body>
            We have created a secret Facebook group for the course. Where I will be, we will have 14
            professional web developers, we have a few other team members to guide and support you
            in other tasks. Our target is to answer all your questions within 24 hours. Most of the
            times instant reply is given. All replies will be received within 6-8 hours on average.
            Moreover, if you can't solve the problem inside the code by writing (except Friday),
            there will be a few parallel meet sessions at three times every day. Where you can solve
            your problem by screen sharing. If you don't understand something well, it will be
            explained. What else does it take?
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Is there anything about freelancing or WordPress in this course?
          </Accordion.Header>
          <Accordion.Body>
            There is nothing directly related to WordPress or freelancing in this course. Because,
            the purpose of this course is for those who want to become what is meant by web
            developer in software companies. Besides, if you want to customize WordPress at an
            advanced level, you need to know HTML, CSS, bootstrap, JavaScript, even React. All of
            them can be learned from this course. However, freelancing or WordPress are not
            highlighted in this course.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );

};

export default Faq;
