import React from "react";
import { useAppContext } from "App";
import Person from "components/Person";

export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Workshop">
      <section className="highlight">
        {constants.Meta.EVENT_NAME} features two incredible workshops preceding
        the conference. Come sharpen your skills with expert instruction from
        some of the most knowledgable people in the React community. Whether you
        are a newcomer to React wanting to get your feet wet, or have been using
        React for years our workshops have something to offer you!
      </section>

      <div className="Workshop__Sessions">
        <section className="Workshop__Sessions__Item">
          <Person
            name="Cory House"
            avatar="assets/img/speakers/housecor.jpg"
            twitter="housecor"
            github="coryhouse"
          />

          <h2>Advanced React: Lessons from 10 Years</h2>

          <p>
            A <strong>one day</strong> workshop held{" "}
            <strong>August 14, 2024</strong> being taught by{" "}
            <strong>Cory House</strong>.
          </p>

          <p>
            Are you comfortable with the React basics, and want to step up your
            game? In this session, we’ll explore dozens of insights and hard
            lessons learned over the last 10 years.
          </p>

          <p>
            In this workshop, we’ll explore:
            <ul>
              <li>
                State management best-practices including eight ways to handle
                state and how to choose between them
              </li>
              <li>Key third-party libraries</li>
              <li>Reusable component best-practices</li>
              <li>Creating custom devtools</li>
              <li>Related browser extensions</li>
              <li>TypeScript tips and best-practices</li>
              <li>Performance optimizations</li>
              <li>
                Automated testing tools, patterns, mocking approaches, and
                related accessibility fundamentals
              </li>
              <li>Folder and file structure patterns</li>
              <li>Novel React development workflows</li>
              <li>
                Approaches for auditing your React codebase to establish
                opportunities for improvement
              </li>
              <li>Common mistakes and anti-patterns and how to avoid them</li>
              <li>New React features (as time allows)</li>
            </ul>
          </p>
          <p>
            This isn’t merely a lecture. Bring your laptop, because we'll
            implement these ideas together. This workshop encapsulates
            hard-learned lessons from working in React at dozens of companies
            for a full decade.
          </p>
          <p>
            After this session, you’ll walk away with a long list of actionable
            tools, patterns, and practices for improving your team’s React apps.
          </p>
        </section>

        <section className="Workshop__Sessions__Item">
          <Person
            name="Kent C. Dodds"
            avatar="assets/img/speakers/kentcdodds.jpg"
            twitter="kentcdodds"
            github="kentcdodds"
          />

          <h2>React Server Components and Actions</h2>

          <p>
            A <strong>one day</strong> workshop held{" "}
            <strong>August 14, 2024</strong> being taught by{" "}
            <strong>Kent C. Dodds</strong>.
          </p>

          <p>
            You’re interested in how far React can take the component model.
            Everyone is. While React has not yet officially released server
            components and actions as features in a stable version of React, you
            want to understand how these features work because you’d like to use
            them within one of the frameworks built on top of React which has
            support for them.
          </p>

          <p>
            In this workshop we won’t be using any frameworks. In fact you might
            say we’ll be building our own framework. It’s important for you to
            understand at least one or two layers below where you typically
            operate to be able to use your abstractions effectively. So we’ll be
            working with the raw/unreleased/experimental/futuristic APIs for
            React Server Components and React Server Actions.
          </p>

          <p>
            Once you finish this workshop, you’ll finally have the proper mental
            model for what server components and actions will do for you as an
            every day React app developer. Whatever kind of React app you’re
            building (and whatever architecture you have), you’ll find ways to
            apply these future features to your application eventually and after
            this workshop you’ll be eager to do so for the DX and UX
            improvements they provide.
          </p>

          <p>
            In this workshop we’ll cover:
            <ul>
              <li>
                The relationship between client and server components and their
                respective module graphs
              </li>
              <li>Streaming serialized React elements</li>
              <li>Submitting forms to server actions</li>
              <li>Managing pending state for server actions</li>
              <li>Providing great loading UX with optimistic UI</li>{" "}
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};
