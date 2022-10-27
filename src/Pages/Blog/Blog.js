import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <div className="container w-75 mt-5">
      <h1 className="text-center text-primary">some interview questions</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled
            access to resources located outside of a given domain. It extends and adds flexibility
            to the same-origin policy (SOP). However, it also provides potential for cross-domain
            attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a
            protection against cross-origin attacks such as cors site request forgery.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase UI can be easily customized to fit with the rest of our app's UI. It is
            open-source, so It is not constrained in modifying the user experience to meet our app's
            needs.FirebaseUI provides a drop-in auth solution that handles the UI flows for signing
            in users with all supported flows like email addresses and passwords, phone numbers, and
            with popular federated identity providers, including Google Sign-In and Facebook Login
            without any single line of code.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The private route component is similar to the public route, the only change is that
            redirect URL and authenticate condition. If the user is not authenticated he will be
            redirected to the login page and the user can only access the authenticated routes If he
            is authenticated (Logged in).
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node. js is a JavaScript runtime environment that achieves low latency and high
            throughput by taking a “non-blocking” approach to serving requests. In other words,
            Node. js wastes no time or resources on waiting for I/O requests to return.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
  
};

export default Blog;
