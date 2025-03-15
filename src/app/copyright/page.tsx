export default function CopyrightPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-white/10 rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-[#d19a53] mb-8">Copyright Infringement Notice Procedure</h1>
        
        <div className="space-y-6 text-gray-200">
          <p className="leading-relaxed">
            If you believe that any copyright infringement exists on the Site, please use the following process to notify us. 
            We will act expeditiously to remove infringing material once informed. All claims of copyright infringement should be 
            in writing and should be directed to our Designated Agent below:
          </p>

          <div className="bg-black/30 p-6 rounded-lg my-8">
            <p className="font-semibold mb-2">Copyright Manager</p>
            <address className="not-italic">
              chillguyclicker.io LLC<br />
              122 East 42nd Street<br />
              Suite 1611<br />
              New York, NY 10168<br />
              E-mail: <a href="mailto:support@chillguyclicker.io" className="text-[#d19a53] hover:underline">support@chillguyclicker.io</a>
            </address>
          </div>

          <div>
            <p className="mb-4">Your notice must contain the following information:</p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Your physical or electronic signature (as either the owner of an exclusive right that is allegedly infringed or as a person 
                authorized to act on behalf of such owner).
              </li>
              <li>
                Identification of the copyrighted work claimed to have been infringed or, if multiple copyrighted works at a single online 
                site are covered by a single claim, a representative list of such works at that online site.
              </li>
              <li>
                Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to 
                be removed or access to which is to be disabled and information reasonably sufficient to permit us to locate the material.
              </li>
              <li>
                Information reasonably sufficient to permit us to contact you, such as an address, telephone number and, if available, an 
                electronic mail address.
              </li>
              <li>
                A statement that you believe in good faith that use of the material in the manner complained of is not authorized by the 
                copyright owner, its agent or the law.
              </li>
              <li>
                A statement that the information in the notice is accurate and that, under penalty of perjury, you are the owner of an 
                exclusive right that is allegedly infringed or are authorized to act on behalf of such owner.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a 
          href="/" 
          className="text-[#d19a53] hover:underline"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
} 