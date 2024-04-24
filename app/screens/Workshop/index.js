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
          <h2>Advanced React: Lessons from 10 Years</h2>

          <p>
            A <strong>one day</strong> workshop held{" "}
            <strong>August 14, 2024</strong> being taught by{" "}
            <strong>Cory House</strong>.
          </p>

          <p>
            In this session we'll explore 8 ways to handle state in React apps,
            common state management mistakes, performance optimizations,
            useEffect alternatives, key third-party libraries, TypeScript tips,
            reusable component design patterns, devtools and extensions, file
            structures, and novel React workflows. Bring your laptop, because
            we'll implement many ideas together. This workshop encapsulates
            hard-learned lessons from specializing in React for a full decade.
          </p>

          <Person
            name="Cory House"
            avatar="assets/dist/img/speakers/housecor.jpg"
            twitter="housecor"
            github="coryhouse"
          />
        </section>

        <section className="Workshop__Sessions__Item">
          <h2>Full Stack Foundations</h2>

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

          <Person
            name="Kent C. Dodds"
            avatar="assets/dist/img/speakers/kentcdodds.jpg"
            twitter="kentcdodds"
            github="kentcdodds"
          />
        </section>
      </div>
    </div>
  );
};
