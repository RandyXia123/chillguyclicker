"use client";
import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white/10 rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-[#d19a53] mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated on Jan 1 2018</p>

        {/* Introduction */}
        <div className="text-gray-500 mb-8 leading-relaxed">
          <p>
            Chill Guy Clicker.us is committed to protecting the privacy of all visitors who use our site 
            and applications, including older users above the age of 13 ("General Users") and younger 
            users under the age of 13 ("Children Users"), together the "Users".
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-black/50 p-6 rounded-lg mb-8">
          <h2 className="text-[#d19a53] text-xl font-semibold mb-4">Contents</h2>
          <nav className="space-y-2">
            {[
              { id: 'general', title: '1. General Information' },
              { id: 'collection', title: '2. Data Collection and its Purposes' },
              { id: 'retention', title: '3. Data Retention' },
              { id: 'third-party', title: '4. Third Party Games' },
              { id: 'cookies', title: '5. Cookies' },
              { id: 'links', title: '6. Links to Third Party Websites' },
              { id: 'sharing', title: '7. Sharing Information' },
              { id: 'transfers', title: '8. International Data Transfers' },
              { id: 'children', title: '9. Children Users' },
              { id: 'lawful', title: '10. Lawful Bases for Processing Personal Data' },
              { id: 'rights', title: '11. Individual Rights' }
            ].map(section => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className="block w-full text-left px-4 py-2 rounded hover:bg-black/20 text-gray-200 hover:text-[#d19a53] transition-colors"
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          <Section
            id="general"
            title="1. General Information"
            isActive={activeSection === 'general'}
            onToggle={() => toggleSection('general')}
          >
            <p className="text-gray-500">
            All features on the Chill Guy Clicker.us Site are available without the need for registration by Users. No personal data (such as email addresses and phone numbers) are requested from users. Chill Guy Clicker.us may collect certain electronic data (such as the User's IP address, cookies or device ID).When a User clicks to leave the Chill Guy Clicker.us Kids Site, Chill Guy Clicker.us may try to inform the User that they are leaving the Chill Guy Clicker.us Kids Site and that this Privacy Policy will no longer apply. When a User provides personal data on any third party website or application, the processing of such personal data will be governed by any privacy statement applicable to that site/application. In any event, Chill Guy Clicker.us shall not act as the Data Controller or the Processor of such personal data.
            </p>
          </Section>

          {/* Data Collection and its Purposes */}
          <Section
            id="collection"
            title="2. Data Collection and its Purposes"
            isActive={activeSection === 'collection'}
            onToggle={() => toggleSection('collection')}
          >
            <p className="text-gray-500">
            Data collection and its purposes Our servers automatically recognize visitors' domain names and IP addresses (the number assigned to computers on the Internet). The Chill Guy Clicker.us Site may gather anonymous "traffic data" that does not personally identify you, but that data may be helpful for marketing purposes or for improving the services we offer.When your computer or mobile device contacts our web servers (for example, when you visit the Chill Guy Clicker.us Site), our web servers automatically collect usage information. Such usage information includes information about how our visitors use and navigate the Chill Guy Clicker.us Site. It can include the number and frequency of visitors to each web page and the length of their stays, browser type, and referrer data that identifies the web page visited prior and subsequent to visiting our Site.Traffic information may also be shared with business partners and advertisers on an aggregate and anonymous basis. More information about sharing information will follow in part 7.In addition, Advertisers on the Chill Guy Clicker.us General Site might receive information gathered by cookies for targeted advertising purposes. Further information regarding the use of cookies can be found below.
            </p>
          </Section>

          {/* Data Retention */}
          <Section
            id="retention"
            title="3. Data Retention"
            isActive={activeSection === 'retention'}
            onToggle={() => toggleSection('retention')}
          >
            <p className="text-gray-500">
            Chill Guy Clicker.us may retain users’ data for the following purposes:To develop new features and improve the Chill Guy Clicker.us Site;To support subsequent customer service inquiries;To improve the safety and security of the Chill Guy Clicker.us Site; or Comply with our legal obligations.We will retain your information for as long as is reasonably necessary in relation to the purposes for which this data was collected.
            </p>
          </Section>

          {/* Third Party Games */}
          <Section
            id="third-party"
            title="4. Third Party Games"
            isActive={activeSection === 'third-party'}
            onToggle={() => toggleSection('third-party')}
          >
            <p className="text-gray-500"  >
            This Privacy Policy does not apply to the processing of personal data by data controllers other than Chill Guy Clicker.us , such as providers of third party games available on the Chill Guy Clicker.us Site. The relevant provider of such a third party game is responsible for ensuring that any processing of personal data by them in the context of a game complies with applicable data protection laws.Generally, Chill Guy Clicker.us does not permit third party content providers to collect personal data about Users. However, if any personal data will be collected by a third party content provider, Chill Guy Clicker.us will contractually require that the processing of personal data by them in the context of a game complies with applicable data protection laws.
            </p>
          </Section>

          {/* Cookies */}
          <Section
            id="cookies"
            title="5. Cookies"
            isActive={activeSection === 'cookies'}
            onToggle={() => toggleSection('cookies')}
          >
            <p className="text-gray-500">
           Like many websites and applications, this Chill Guy Clicker.us Site makes use of “cookies" which are saved on the user’s computer. In addition, third party networks serving advertisements on the Chill Guy Clicker.us Site (the “Advertisers") might use cookies. Cookies are a way of remembering who you are. A cookie is a small text file that is stored on your computer’s hard drive or stored temporarily in your computer’s memory. There are two kinds of cookies: those that are “session" oriented and those that are “persistent". Session cookies delete from your computer when you close your browser. Persistent cookies retain information for later use tomorrow, next week, next month, or whenever they are set to expire.Chill Guy Clicker.us and its Advertisers may use cookies, or similar technologies to enhance and personalize your experience on the Chill Guy Clicker.us General Site, including the following:to operate and improve offerings on the Chill Guy Clicker.us Site;to help authenticate you when you are on the Chill Guy Clicker.us Site;to remember your preferences;to present and help measure and research the effectiveness of Chill Guy Clicker.us ’s offerings;to customize the content provided to you through the Chill Guy Clicker.us Site; and,to show targeted ads.For information on how cookies are used on the Chill Guy Clicker.us Kids Site, please see the below Children Users section.Users can refuse the saving of cookies or delete them by adjusting the browser settings on his or her computer. To learn more on how to adjust the settings of your internet browser, we recommend the user visit the website of the browser’s vendor.The user can also decide to remove installed cookies. Users can do so in the following manners:Internet ExplorerDelete existing Tracking Technologies through the “Internet Options" sub-option of the “Tools" menu option of your browser or otherwise as directed by your browser’s support feature. Disable future Tracking Technologies by using the same browser controls. Additional information on disabling most Tracking Technologies may be available through your browser’s support feature. (See the “help" section of your browser for more information.)Google ChromeDelete existing Tracking Technologies through the “Clear Browsing Data…" sub-option of the “Tools" menu option of your browser or otherwise as directed by your browser’s support feature. Disable future Tracking Technologies by using the same browser controls. Additional information on disabling most Tracking Technologies may be available through your browser’s support feature. (See the “help" section of your browser for more information.)Mozilla FirefoxDelete existing Tracking Technologies through the “Clear Recent History…" sub-option of the “History" menu option of your browser or otherwise as directed by your browser’s support feature. Disable future Tracking Technologies by using the same browser controls. Additional information on disabling most Tracking Technologies may be available through your browser’s support feature. (See the “help" section of your browser for more information.)You may be able to have the device you use to access the Chill Guy Clicker.us Site warn you each time a cookie or most other Tracking Technologies is being set (other than Flash cookies), or you can choose to turn off such warnings. This is done through your browser on the device you use to access the Website. Additional information on warnings and removal of warnings may be available through your browser’s support feature.Please note that deleting, rejecting, disabling or turning off Tracking Technologies through the above options will not remove Flash cookies. For more information about Flash cookies and how to remove them from your computer, please visit Adobe’s website.Please be aware that certain areas and features of the Chill Guy Clicker.us Site can only be accessed in conjunction with Tracking Technologies, and that disabling Tracking Technologies might prevent you from accessing such content.If you have any questions concerning cookies, please contact us at randy.as.a.freelancer com.
            </p>
          </Section>

          {/* Links to Third Party Websites */}
          <Section
            id="links"
            title="6. Links to Third Party Websites"
            isActive={activeSection === 'links'}
            onToggle={() => toggleSection('links')}
          >
            <p className="text-gray-500">
            The Chill Guy Clicker.us General Site knowingly links out to the following third party websites. The names of these third party websites link to their privacy policy.YouTube Facebook Instagram Whatsapp Twitter Kik Some of the third party games published on the Chill Guy Clicker.us.
            </p>
          </Section>

          {/* Sharing Information */}
          <Section
            id="sharing"
            title="7. Sharing Information"
            isActive={activeSection === 'sharing'}
            onToggle={() => toggleSection('sharing')}   
          >
            <p className="text-gray-500">
            Chill Guy Clicker.us may share your persistent identifiers with third parties such as business partners under the following circumstances:Security: We may release information about our Users, including IP address, when legally required to do so, at the request of governmental authorities conducting an investigation or to verify or enforce compliance with the policies governing the Chill Guy Clicker.us Site and applicable laws. We may also disclose such user information whenever we believe disclosure is necessary to protect the rights, property or safety of Chill Guy Clicker.us , or any of our respective business partners, customers or others.Aggregate Information: We may disclose non-identifying, aggregated user statistics to third parties for a variety of purposes, including describing our services to prospective partners and other third parties. Examples of such non-personal information include the number of users who visited this Chill Guy Clicker.us Site during a specific time period or played a specific game on this Website.Advertising: We may share technical information such as IP address or device ID with our advertising partners. For advertising on the Chill Guy Clicker.us General Site, this information may be used to serve behaviorally targeted ads or profiling. For advertising on the Chill Guy Clicker.us Kids Site, this information will only be shared for the purposes of serving contextual advertising and capping the frequency of ads.
            </p>
          </Section>

          {/* International Data Transfers */}
          <Section
            id="transfers"
            title="8. International Data Transfers"
            isActive={activeSection === 'transfers'}
            onToggle={() => toggleSection('transfers')} 
          >
            <p className="text-gray-500">
            Chill Guy Clicker.us may work with third parties that are based outside of the European Economic Area (EEA), and may transfer data about you to the countries in which these parties reside. Whenever we share personal data originating in the EU with an entity outside of the EEA, we will do so on the basis of the EU standard contractual clauses, with your consent, or because such transfer is necessary performance of a contract.If you have any questions about our policy regarding international data transfers, please contact us.
            </p>
          </Section>

          {/* Children Users */}
          <Section
            id="children"
            title="9. Children Users"
            isActive={activeSection === 'children'}
            onToggle={() => toggleSection('children')}
          >
            <p  className="text-gray-500">
           We recognize the importance of safeguarding the privacy of children and encourage parents to check and monitor their children’s use of online activities regularly. This is why we create an age-gate in certain games on the Chill Guy Clicker.us General Site: in order to comply with the legislation, you could be presented to an age screen when starting the game. When presented with this age screen, it is important that you state the correct age. Based on your age information and your device settings, Chill Guy Clicker.us does not process personal data of children under the minimum age limit (Children Users) that is prescribed by the legislation in the individual jurisdictions for behavioral advertisement.The Children Users’ experience of games with an age-gate on the Chill Guy Clicker.us General Site supports and complies with the Children’s Online Privacy Protection Act (“COPPA"). The Children Users’ experience of games with an age-gate on the Chill Guy Clicker.us will not request any personal information from Children Users. There is no registration required for any advertising shown on the Chill Guy Clicker.us, or in the the Children Users’ experience of games with an age-gate on the Chill Guy Clicker.us General Site, is age-appropriate. The Chill Guy Clicker.us Kids Site and the Children Users’ experience of games with an age-gate on the Chill Guy Clicker.us General Site will not show behaviorally targeted ads or allow third parties to track the activity of Children Users for that purpose.The Chill Guy Clicker.us Kids Site and the the Children Users’ experience of games with an age-gate on the Chill Guy Clicker.us General Site may collect and use IP addresses and other persistent identifiers, including cookies, from Children Users, but only for purposes of supporting our internal operations, such as to help us: Identify whether you are a child or adult for data protection purposes to determine the legal requirements for our processing of your dataMaintain or analyze the functioning of the Chill Guy Clicker.us Kids SitePerform network communications Authenticate users of, or personalize the content on, the Chill Guy Clicker.us Kids SiteServe contextual advertising on the Chill Guy Clicker.us Kids Site and cap the frequency of advertisingWe have separated our platform into a few sections. Chill Guy Clicker.us Kids was created for our youngest audience and is fully COPPA compliant. If you are a Child User, you should only use the Chill Guy Clicker.us with the permission of a parent or legal guardian. On Chill Guy Clicker.us, you’ll find games that are intended at users that are over 13. Chill Guy Clicker.us is not targeted towards children under the age of 13 and it will not knowingly collect personal information from children under 13.To learn more about COPPA, please reference this simple one-page informational guide from the kidSAFE Seal Program: https://www.kidsafeseal.com/knowaboutcoppa.html.
            </p>
          </Section>

          {/* Lawful Bases for Processing Personal Data */}
          <Section
            id="lawful"
            title="10. Lawful Bases for Processing Personal Data"
            isActive={activeSection === 'lawful'}
            onToggle={() => toggleSection('lawful')}
          >
            <p className="text-gray-500">
            If you are an individual in the European Union (EU), we collect and process data about you only where we have legal bases for doing so under applicable EU laws. This means we collect and process your data only when:It is necessary for a legitimate interest (which is not overridden by your individual privacy interests), such as preventing fraud, improving the Service, and increasing the security of the Service and network infrastructure;You have consented to this collection and processing for a specific purpose; It is necessary to fulfil our contractual obligations; or It is necessary to comply with a legal obligation. Where we rely on our legitimate interests to process your personal data, you have the right to object. More information on exercising this right can be found in section 11 addressing Individual Rights. Some examples of our legitimate interests and the data being processed include: Network and information security (IP address, user/device ID) Customer Support and fraud prevention (email address) Improving our products and services (activity logs) Where we rely on your consent to process your personal data, you have the right to withdraw or decline consent at any time. If you wish to withdraw your consent, please contact us using the information in section 12 regarding the Contacts for Individual Rights Requests. If you have any questions about or need further information concerning the legal basis on which we collect and use your personal data, please contact us.
            </p>
          </Section>

          {/* Individual Rights */}
          <Section
            id="rights"
            title="11. Individual Rights"
            isActive={activeSection === 'rights'}
            onToggle={() => toggleSection('rights')}
          >
            <p className="text-gray-500">
           Chill Guy Clicker.us makes certain choices available to you when it comes to your personal data. Please review the below information outlining your choices and how to exercise them. We will respond to all requests within a reasonable timeframe. If our full response will ever take more than a month due to complexity or scope, we will notify you of this and keep you updated. We may request more information to confirm your identity before acting on any request.Delete your data: You also hold the right to have your personal data deleted. This is sometimes known as the ‘right to be forgotten’. To request that we delete all personal data about you, please submit a request using the contact information at the end of this section.After you delete your personal data from our services, we may not immediately delete residual copies from our active servers and may not immediately remove data from our backup systems for archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so. We may also decline to honor this request in certain specific situations, such as if the data is necessary to comply with a legal obligation or to exercise/defend a legal claim.Restrict Processing: You have the right to restrict how we process your personal data in certain circumstances. This is an alternative to requesting the deletion of your data. Rather than requesting we delete all of your personal data, you may request that we limit our uses of your personal data to specific purposes. You may wish to request we restrict our processing if you contest the accuracy of your personal data and we are working to verify this information, or if you want us to retain your personal data in connection to a legal claim but cease processing it.Data Portability: You have the right to obtain copies of your information in a structured, commonly used format that you can move your data between our service and the services of others. We may request more information to confirm your identity before providing any personal data.Right to Object: You have the right to object to the processing of your personal data for direct marketing purposes or when our processing of your data is based on legitimate interests. You may request that we stop processing your personal data for direct marketing purposes. This is an absolute right and we cannot refuse this request. Beyond direct marketing, if you wish to exercise this right, you must give specific reasons why you object to our processing of your data, based on your particular situation. Even after receiving such a request, we may continue processing if it is necessary for the exercise/defense of a legal claim or if we can demonstrate a compelling legitimate ground for the processing.If any request made under this section is clearly unfounded or excessive, we may reject the request or require a reasonable fee to honor the request. If we decide to reject your request, we will inform you of the reasons for not taking action and provide information on other possible remedies. If we decide that a reasonable fee is necessary, we will promptly inform you and will comply with the request upon receipt of this fee.
            </p>
          </Section>        

        {/* Contact Information */}
        <div className="mt-12 p-6 bg-black/50 rounded-lg">
          <p className="text-gray-200">
            If you have any questions concerning this Privacy Policy, please contact us at{' '}
            <a href="mailto:randy.as.a.freelancer@gmail.com" className="text-[#d19a53] hover:underline">
              randy.as.a.freelancer@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
      <div className="mt-8 text-center">
        <a href="/" className="text-[#d19a53] hover:underline">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}

// Section Component
interface SectionProps {
  id: string;
  title: string;
  isActive: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function Section({ id, title, isActive, onToggle, children }: SectionProps) {
  return (
    <div className="border-b border-gray-700 last:border-0 pb-6">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center py-4"
      >
        <h2 className="text-xl font-semibold text-[#d19a53]">{title}</h2>
        <span className="text-gray-400">
          {isActive ? '−' : '+'}
        </span>
      </button>
      {isActive && (
        <div className="mt-4 text-gray-200 leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  );
} 