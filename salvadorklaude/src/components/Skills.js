import cssLogo from '../assets/images/css_logo-removebg-preview.png';
import jsLogo from '../assets/images/JS-removebg-preview.png'; // 
import cloudLogo from '../assets/images/Cloud.png'; // 
import bootstrapLogo from '../assets/images/bootstrap-removebg-preview.png'; // 
import oracleLogo from '../assets/images/OracleSQL-removebg-preview.png'; // 
import htmlLogo from '../assets/images/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail-removebg-preview.png'; // 
import phpLogo from '../assets/images/php_-removebg-preview.png'; // 
import reactLogo from '../assets/images/React-removebg-preview.png'; //
import tailwindLogo from '../assets/images/tailwindcss-removebg-preview.png'
export default function Skills() {
  return (
    <section id="skills" className="text-center py-8">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <img src={cssLogo} alt="CSS" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={jsLogo} alt="JavaScript" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={cloudLogo} alt="Cloud" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={bootstrapLogo} alt="Bootstrap" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={oracleLogo} alt="OracleSQL" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={htmlLogo} alt="HTML" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={phpLogo} alt="PHP" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={reactLogo} alt="React" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
        <img src={tailwindLogo} alt="TailwindCSS" className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition" />
      </div>
    </section>
  );
}
