export default function TermsOfUsePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white/10 rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-[#d19a53] mb-8">
          General Terms Of Use For Chill Guy Clicker Content
        </h1>

        <div className="space-y-6 text-gray-200">
          {/* Agreement Section */}
          <div className="leading-relaxed">
            <p>
              By accessing or using the site, you agree to be bound by this agreement and the terms of our{' '}
              <a href="/privacy-policy" className="text-[#d19a53] hover:underline">
                privacy policy
              </a>{' '}
              which are incorporated by this reference. This agreement shall remain in full force and effect 
              while you use any of the Chill Guy Clicker family of sites.
            </p>
          </div>

          {/* Disclaimer Section */}
          <div className="leading-relaxed">
            <p>
              Chill Guy Clicker LLC makes no promises that our visitors' grades will improve by the use 
              of any of our family of sites. Chill Guy Clicker LLC does not guarantee the accuracy of 
              any information included in any of our family of sites, nor do we guarantee the accuracy 
              of the information included in any of the sites we link to.
            </p>
          </div>

          {/* Information Usage Section */}
          <div className="leading-relaxed">
            <p>
              The information included in our family of sites is meant to supplement standard academic 
              courses and classroom instruction. We are not responsible for any of the content included 
              in any of our licensed content that is authored by people not employed by Chill Guy 
              Clicker LLC, such as our games at Chill Guy Clicker. Chill Guy Clicker is not responsible 
              for any ads that may appear on our sites via error or malware viruses.
            </p>
          </div>

          {/* Copyright Section */}
          <div className="leading-relaxed bg-black/30 p-6 rounded-lg mt-8">
            <p>
              All materials on this site, as well as the organization and layout of the site, (except 
              for our licensed content such as the games at chillguyclicker.io) are owned and 
              copyrighted by chillguyclicker.io LLC and may be accessed or printed for your personal 
              non-commercial use only. Without the prior written permission of chillguyclicker.io LLC, 
              you may not copy, modify, distribute or transfer any material on this site, in whole or 
              in part.
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