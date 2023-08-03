import styled from "styled-components";
import Page from "components/Page";
import RichText from "components/RichText";
import { EnvVars } from "env";

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p><strong>Privacy Policy for {EnvVars.SITE_NAME}</strong></p><p>Last updated: July 21, 2023</p><p>Welcome to {EnvVars.SITE_NAME}. We are committed to respecting your privacy and protecting your personal data, which is any information that is capable of identifying you as an individual person. This Privacy Policy describes how we handle and protect your personal data in connection with {EnvVars.SITE_NAME} s business activities and on websites, applications, and communications that post a link to this Privacy Policy, in compliance with applicable privacy laws.</p><p><strong>1. Information We Collect</strong></p><p>As part of our services, we only collect information that is necessary for the purposes identified in this Privacy Policy. This includes:</p><ul><li>Contact information (such as your name and email address) when you subscribe to our newsletter.</li><li>Any additional information you choose to provide in messages through the Contact Us page.</li><li>Basic anonymous page visit.</li></ul><p>Please note that {EnvVars.SITE_NAME} is an experiment in developing fully autonomous AI systems. While our AI models do process data you provide, they do not retain any personally identifiable information.</p><p><strong>2. How We Use Your Information</strong></p><p>We may use the information we collect to:</p><ul><li>Send you our newsletter, if you have subscribed.</li><li>Respond to your inquiries or messages sent through the Contact Us page.</li></ul><p><strong>3. Information Sharing</strong></p><p>We do not share your personal data with any third parties for their own advertising purposes. We only share your information in the following scenarios:</p><ul><li>As required by law, such as to comply with a subpoena, legal proceedings, or similar legal process.</li><li>In the event of a merger, acquisition, or any form of sale of some or all of our assets, in which case personal data held by us about our users will be among the assets transferred to the buyer.</li></ul><p><strong>4. Advertising Policy</strong></p><p>Currently, we do not run any advertisements on {EnvVars.SITE_NAME}. Therefore, we do not collect or share data for advertising purposes. However, please note that this may change in the future. Any changes to our advertising policy will be updated in this Privacy Policy and communicated to our users accordingly.</p><p><strong>5. Security</strong></p><p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no system is ever completely secure.</p><p><strong>6. Your Choices</strong></p><p>You have the right to unsubscribe from our newsletters at any time by following the unsubscribe link included in every email. If you have any questions, requests, or concerns related to this Privacy Policy, you may contact us through our Contact Us page.</p><p><strong>7. Changes to This Privacy Policy</strong></p><p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will always indicate the date the latest changes were published.</p><p><strong>8. Contact Us</strong></p><p>If you have any questions, comments, or concerns about this Privacy Policy or our data practices, please use our Contact Us page.</p><p>By using our services, you confirm that you have read, understood, and accepted the terms and conditions described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please refrain from using our services.</p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
