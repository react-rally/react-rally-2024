import React from "react";
import { useAppContext } from "App";

export default () => {
  const { constants } = useAppContext();

  return (
    <div className="Privacy">
      <section>
        <h2>Privacy Policy</h2>

        <p>
          Your privacy is critically important to us. At{" "}
          {constants.Meta.CONFERENCE_NAME}, we have a few fundamental
          principles:
        </p>

        <ul>
          <li>
            We are thoughtful about the personal information we ask you to
            provide and the personal information that we collect about you
            through the operation of our Events.
          </li>
          <li>
            We don’t share your personal information with anyone except to
            comply with the law, develop our Events, or protect our rights.
          </li>
          <li>
            We store personal information for only as long as we have a reason
            to keep it.
          </li>
          <li>
            We aim to make it as simple as possible for you to control what
            information is shared publicly (or kept private), indexed by search
            engines, and permanently deleted.
          </li>
          <li>
            We aim for full transparency on how we gather, use, and share your
            personal information.
          </li>
        </ul>

        <p>
          Below is our Privacy Policy, which incorporates and clarifies these
          principles.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>

        <p>
          We only collect information about you if we have a reason to do so–for
          example, to organize our Events, to communicate with you, or to make
          our Events better.
        </p>
        <p>
          We collect information in three ways: if and when you provide
          information to us, automatically through operating our Events, and
          from outside sources. Let’s go over the information that we collect.
        </p>

        <h4>Information You Provide to Us</h4>

        <p>
          It’s probably no surprise that we collect information that you provide
          to us. The amount and type of information depends on the context and
          how we use the information. Here are some examples:
        </p>

        <ul>
          <li>
            <strong>Basic Registration Information:</strong> We ask for basic
            information from you in order to set up your registration. For
            example, we require individuals who register for a{" "}
            {constants.Meta.CONFERENCE_NAME} ticket to provide a name and email
            address. You may provide us with more information – like your
            company name, and social media handles.
          </li>
          <li>
            <strong>Content Information:</strong> Depending on the Services you
            use, you may also provide us with information about you in draft and
            published content. For example, if you write a session description
            that includes biographic information about you, we will have that
            information, and so will anyone with access to the Internet if you
            choose to publish it to an event. This might be obvious to you...
            but it’s not to everyone!
          </li>
          <li>
            <strong>Communications With Us (Hi There!):</strong> You may also
            provide us information when you respond to surveys, communicate with
            our Support, or post a question about{" "}
            {constants.Meta.CONFERENCE_NAME} or events in public forums.
          </li>
        </ul>

        <h4>Information We Collect Automatically</h4>

        <p>We also collect some information automatically:</p>

        <ul>
          <li>
            <strong>Log Information:</strong> Like most online service
            providers, we collect information that web browsers, mobile devices,
            and servers typically make available, such as the browser type, IP
            address, unique device identifiers, language preference, referring
            site, the date and time of access, operating system, and mobile
            network information. We collect log information when you use our
            Services – for example, when you create or make changes to your
            profile on {constants.Meta.CONFERENCE_NAME}.
          </li>
          <li>
            <strong>Location Information:</strong> We may determine the
            approximate location of your device from your IP address. We collect
            and use this information to, for example, calculate how many people
            visit our Services from certain geographic regions.
          </li>
          <li>
            <strong>Information from Cookies & Other Technologies:</strong> A
            cookie is a string of information that a website stores on a
            visitor’s computer, and that the visitor’s browser provides to the
            website each time the visitor returns. Pixel tags (also called web
            beacons) are small blocks of code placed on websites and emails.
            {constants.Meta.CONFERENCE_NAME} uses cookies and other technologies
            like pixel tags to help us identify and track visitors, usage, and
            access preferences for our Events, as well as track and understand
            email deliverability.
          </li>
        </ul>
      </section>

      <section>
        <h2>How And Why We Use Information</h2>

        <h4>Purposes for Using Information</h4>

        <p>
          We use information about you as mentioned above and for the purposes
          listed below:
        </p>

        <ul>
          <li>
            To organize our Events – for example, to create name badges, or
            provide meals based on dietary restrictions at our Events;
          </li>
          <li>
            To monitor and analyze trends and better understand how community
            interest in our Events , which helps us improve our Events; and
          </li>
          <li>
            To communicate with you, for example through an email, about CFP and
            ticket sales for {constants.Meta.CONFERENCE_NAME}, solicit your
            feedback, or keep you up to date on
            {constants.Meta.CONFERENCE_NAME};
          </li>
        </ul>

        <h4>Legal Bases for Collecting and Using Information</h4>

        <p>
          A note here for those in the European Union about our legal grounds
          for processing information about you under EU data protection laws,
          which is that our use of your information is based on the grounds
          that:
        </p>

        <ol>
          <li>
            The use is necessary in order to fulfill our commitments to you
            under our Terms of Service or other agreements with you or is
            necessary to administer your account – for example, in order to
            enable access to our website on your device or charge you for a paid
            plan; or
          </li>
          <li>
            The use is necessary for compliance with a legal obligation; or
          </li>
          <li>
            The use is necessary in order to protect your vital interests or
            those of another person; or
          </li>
          <li>
            We have a legitimate interest in using your information–for example,
            to provide and update our Events, to improve our Events so that we
            can offer you an even better experience, to communicate with you, to
            measure, gauge, and improve the effectiveness of our advertising,
            and better understand user retention and attrition, and to
            personalize your experience; or
          </li>
          <li>You have given us your consent.</li>
        </ol>
      </section>

      <section>
        <h2>Sharing Information</h2>

        <h4>How We Share Information</h4>

        <p>We do not sell our users’ private personal information. Never.</p>

        <p>
          We share information about you in the limited circumstances spelled
          out below and with appropriate safeguards on your privacy:
        </p>

        <ul>
          <li>
            <strong>
              Subsidiaries, Employees, and Independent Contractors:
            </strong>{" "}
            We may disclose information about you to our subsidiaries, our
            employees, and individuals who are our independent contractors that
            need to know the information in order to help us provide our
            Services or to process the information on our behalf. We require our
            subsidiaries, employees, and independent contractors to follow this
            Privacy Policy for personal information that we share with them.
          </li>
          <li>
            <strong>Third Party Vendors:</strong> We may share information about
            you with third party vendors who need to know information about you
            in order to provide their services to us. This group includes
            vendors that help us provide our Services to you (like payment
            providers that process your credit and debit card information, fraud
            prevention services that allow us to analyze fraudulent payment
            transactions, postal and email delivery services that help us stay
            in touch with you, customer chat and email support services that
            help us communicate with you, those that help us understand and
            enhance our Services (like analytics providers). We require vendors
            to agree to privacy commitments in order to share information with
            them.
          </li>
          <li>
            <strong>Legal Requests:</strong> We may disclose information about
            you in response to a subpoena, court order, or other governmental
            request.
          </li>
          <li>
            <strong>To Protect Rights, Property, and Others:</strong> We may
            disclose information about you when we believe in good faith that
            disclosure is reasonably necessary to protect the property or rights
            of {constants.Meta.CONFERENCE_NAME}, third parties, or the public at
            large.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with any merger,
            sale of company assets, or acquisition of all or a portion of our
            business by another company, or in the unlikely event that React
            Rally goes out of business or enters bankruptcy, user information
            would likely be one of the assets that is transferred or acquired by
            a third party. If any of these events were to happen, this Privacy
            Policy would continue to apply to your information and the party
            receiving your information may continue to use your information, but
            only consistent with this Privacy Policy.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share and disclose
            information with your consent or at your direction. For example, we
            may share your information with third parties with which you
            authorize us to do so, such as the events you submit your sessions
            to.
          </li>
          <li>
            <strong>Aggregated or De-Identified Information:</strong> We may
            share information that has been aggregated or reasonably
            de-identified, so that the information could not reasonably be used
            to identify you. For instance, we may publish aggregate statistics
            about the use of our Services.
          </li>
          <li>
            <strong>Published Support Requests:</strong> And if you send us a
            request (for example, via a support email or one of our feedback
            mechanisms), we reserve the right to publish that request in order
            to help us clarify or respond to your request or to help us support
            other users.
          </li>
        </ul>

        <h4>Information Shared Publicly</h4>

        <p>
          Information that you choose to make public is – you guessed it –
          disclosed publicly.
        </p>

        <p>
          That means, of course, that information like your public profile,
          sessions, other content that you make public on our website, and your
          session submissions and comments to events, are all available to
          others.
        </p>

        <p>
          Public information may also be indexed by search engines or used by
          third parties.
        </p>

        <p>
          Please keep all of this in mind when deciding what you would like to
          share.
        </p>
      </section>

      <section>
        <h2>How Long We Keep Information</h2>

        <p>
          We generally discard information about you when we no longer need the
          information for the purposes for which we collect and use it – which
          are described in the section above on How and Why We Use Information –
          and we are not legally required to continue to keep it.
        </p>

        <p>
          For example, we keep the web server logs that record information about
          a visitor to our websites, such as the visitor’s IP address, browser
          type, and operating system, for approximately 30 days. We retain the
          logs for this period of time in order to, among other things, analyze
          traffic to {constants.Meta.CONFERENCE_NAME}’s websites and investigate
          issues if something goes wrong on one of our websites.
        </p>
      </section>

      <section>
        <h2>Choices</h2>

        <p>
          You have several choices available when it comes to information about
          you:
        </p>

        <ul>
          <li>
            <strong>Opt-Out of Electronic Communications:</strong> You may opt
            out of receiving promotional messages from us. Just follow the
            instructions in those messages. If you opt out of promotional
            messages, we may still send you other messages, like those about
            your account and legal notices.
          </li>
          <li>
            <strong>Set Your Browser to Reject Cookies:</strong> At this time,
            {constants.Meta.CONFERENCE_NAME} does not respond to “do not track”
            signals across all of our Services. However, you can usually choose
            to set your browser to remove or reject browser cookies before using{" "}
            {constants.Meta.CONFERENCE_NAME} website, with the drawback that
            certain features may not function properly without the aid of
            cookies.
          </li>
        </ul>
      </section>

      <section>
        <h2>Your Rights</h2>

        <p>
          If you are located in certain countries, including those that fall
          under the scope of the European General Data Protection Regulation
          (AKA the “GDPR”), data protection laws give you rights with respect to
          your personal data, subject to any exemptions provided by the law,
          including the rights to:
        </p>

        <ul>
          <li>Request access to your personal data;</li>
          <li>Request correction or deletion of your personal data;</li>
          <li>Object to our use and processing of your personal data;</li>
          <li>
            Request that we limit our use and processing of your personal data;
            and
          </li>
          <li>Request portability of your personal data.</li>
        </ul>

        <p>
          If you would like to contact us about your rights, please contact our{" "}
          <a href="mailto:privacy@reactrally.com">support team</a>.
        </p>

        <p>
          EU individuals also have the right to make a complaint to a government
          supervisory authority. However, we encourage you to contact us first,
          and we will do our very best to resolve your concern.
        </p>
      </section>

      <section>
        <h2>Controllers and Responsible Companies</h2>

        <p>
          {constants.Meta.COMPANY_NAME} is the "data controller" of personal
          data collected on {constants.Meta.CONFERENCE_NAME}, and{" "}
          {constants.Meta.COMPANY_NAME} is responsible for deciding how personal
          data is collected, used, and disclosed.
        </p>
      </section>

      <section>
        <h2>How to Reach Us</h2>

        <p>
          If you have a question about this Privacy Policy, or you would like to
          contact us about any of the rights mentioned in the Your Rights
          section above, please{" "}
          <a href="mailto:privacy@reactrally.com">contact us</a>.
        </p>
      </section>

      <section>
        <h2>Other Things You Should Know</h2>

        <h4>Transferring Information</h4>

        <p>
          Because {constants.Meta.CONFERENCE_NAME}’s Events are offered
          worldwide, the information about you that we process when you use the
          Services in the EU may be used, stored, and/or accessed by individuals
          operating outside the European Economic Area (EEA) who work for us,
          other members of our group of companies, or third party data
          processors. This is required for the purposes listed in the How and
          Why We Use Information section above. When providing information about
          you to entities outside the EEA, we will take appropriate measures to
          ensure that the recipient protects your personal information
          adequately in accordance with this Privacy Policy as required by
          applicable law.
        </p>

        <h4>Analytics Services Provided by Others</h4>

        <p>
          Other parties may provide analytics services via our Services and
          Events. These analytics providers may set tracking technologies (like
          cookies) to collect information about your use of our Services and
          across other websites and online services. These technologies allow
          these third parties to recognize your device to compile information
          about you or others who use your device. This information allows us
          and other companies to, among other things, analyze and track usage,
          determine the popularity of certain content. Please note this Privacy
          Policy only covers the collection of information by{" "}
          {constants.Meta.CONFERENCE_NAME} and does not cover the collection of
          information by any third party advertisers or analytics providers.
        </p>
      </section>

      <section>
        <h2>Privacy Policy Changes</h2>

        <p>
          Although most changes are likely to be minor, React Utah may change
          its Privacy Policy from time to time. We will not reduce your rights
          under this Privacy Policy without your explicit consent. We will post
          any Privacy Policy changes on this page and, if the changes are
          significant, we will provide a more prominent notice (such as adding a
          statement to our homepage or sending you a notification through email
          or your dashboard). We will also keep prior versions of this Privacy
          Policy in an archive for your review.
        </p>

        <p>That’s it! Thanks for reading.</p>
      </section>

      <hr />

      <section>
        <small style={{ fontStyle: "italic" }}>
          Note: This Privacy Policy document is available under a Creative
          Commons Sharealike license. This document is derived from the original
          work by{" "}
          <a href="http://automattic.com" target="_blank">
            Automattic Inc.
          </a>
          .
        </small>
      </section>
    </div>
  );
};
