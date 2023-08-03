import styled from "styled-components";
import Page from "components/Page";
import RichText from "components/RichText";
import { EnvVars } from "env";

export default function ContactPage() {
    return (
        <Page title="About">
            <PrivacyPolicyContainer>
                <RichText>

                    <p><strong>About {EnvVars.SITE_NAME}</strong></p>
                    <p>Welcome to {EnvVars.SITE_NAME}, an ambitious project born out of a desire to harness the exponential growth and capabilities of artificial intelligence.</p>
                    <p>{EnvVars.SITE_NAME} is an offshoot of a larger mission aimed at creating an AI-driven platform capable of building an entire website, from front to back, in less than two minutes. Leveraging advancements in AI and Prompt Engineering, our platform can construct a Next.js website, generate SEO-optimized blog posts, and even take care of domain configuration and deployment tasks. We are proud to declare that we have made website creation an automated process.</p>
                    <p>The primary assumption guiding our endeavors is the transformative power of generative AI. As this technology evolves, it is rendering traditional software development obsolete, especially when it comes to the creation of simple web applications. We are confident that with each passing year, AI will become even more competent at generating code and, eventually, create entire complex systems autonomously.</p>
                    <p>Part of our strategy is to capitalize on the SEO opportunities available within futuristic AI industries. We have invested in around 200 domain names across various emerging technology sectors like deepfake technology, autonomous systems, AI companions, and AI agents. Our plan is to use our AI tool to populate these domains with quality, SEO-optimized content, and build a monopoly on the SEO keywords relevant to these industries.</p>
                    <p>This puts us in a unique position to provide valuable web properties. As these industries mature, the value of these domains will increase. We will then have the option to sell these websites based on their premium domain names, SEO value, and traffic generated, providing a promising return on our investments.</p>
                    <p>However, we are not solely profit-focused. At {EnvVars.SITE_NAME}, we believe in the power of open source and collaboration. Our plan is not only to sell but also to continue developing these websites and technologies, with the hope that they will contribute to the advancement of AI and technology as a whole. We aspire to foster a community where developers can collaborate, contribute, and build upon our work to further improve these AI tools.</p>
                    <p>We are excited to be on this journey and look forward to the many opportunities it will bring. We invite you to join us as we explore the future of AI and web development. For more information you can reach out to me via <a href="
">Linkedin</a></p>
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
