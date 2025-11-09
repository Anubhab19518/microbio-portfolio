import { Linkedin, Mail, ExternalLink, Download, Microscope, Phone, MapPin, Award, BookOpen, Globe } from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";

export default function App() {
  const projects = [
    {
      title: "Environmental Microbiology & Ecotoxicology Research",
      description: "Research paper published in ICEES 2024 Journal on environmental microbiology and ecotoxicology in undergraduate studies. Won 1st Prize for Oral Presentation.",
      image: "https://images.unsplash.com/photo-1596051827487-7b3d6f6df842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRyaSUyMGRpc2glMjBiYWN0ZXJpYXxlbnwxfHx8fDE3NjI2OTA5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Ecotoxicology", "Environmental Science", "Research Paper"],
      color: "bg-yellow-300"
    },
    {
      title: "Clinical Microbiology - NRS Medical College",
      description: "Hands-on experience in diagnostic testing including HBV, HAV, HEV, and HCV using serum samples. Worked in Bacteriology, Media, Serology, Mycology, and ICTC labs.",
      image: "https://images.unsplash.com/photo-1614308457932-e16d85c5d053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Njb3BlJTIwbGFib3JhdG9yeSUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyNjkwODk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Clinical Diagnosis", "Serology", "Bacteriology"],
      color: "bg-cyan-300"
    },
    {
      title: "Sample Collection & Laboratory Analysis",
      description: "Collected blood, urine, and swab samples from patients. Conducted comprehensive tests and analysis under supervision during internship.",
      image: "https://images.unsplash.com/photo-1614934273538-70f8ffc2e76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9sb2d5JTIwcmVzZWFyY2glMjBsYWJ8ZW58MXx8fHwxNzYyNjkwOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Sample Collection", "Laboratory Testing", "Clinical Skills"],
      color: "bg-pink-300"
    }
  ];

  const skills = [
    { skill: "Aseptic handling & microbiological techniques", color: "bg-yellow-300" },
    { skill: "Media preparation & microbial culture identification", color: "bg-cyan-300" },
    { skill: "Diagnostic testing (HBV, HAV, HEV, HCV)", color: "bg-pink-300" },
    { skill: "Microscopy & staining methods", color: "bg-lime-300" },
    { skill: "Research analysis & laboratory documentation", color: "bg-yellow-300" },
  ];

  const languages = [
    { lang: "English", level: "Fluent", color: "bg-yellow-300" },
    { lang: "Bengali", level: "Fluent", color: "bg-cyan-300" },
    { lang: "Hindi", level: "Fluent", color: "bg-pink-300" },
    { lang: "Korean", level: "Intermediate", color: "bg-lime-300" },
  ];

  const hobbies = ["Sketching and painting", "Listening to music", "Volunteering and community work"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2>BD</h2>
          <div className="flex gap-4">
            <a 
              href="#about"
              className="px-4 py-2 hover:bg-yellow-300 border-2 border-transparent hover:border-black transition-all"
            >
              About
            </a>
            <a 
              href="#experience"
              className="px-4 py-2 hover:bg-cyan-300 border-2 border-transparent hover:border-black transition-all"
            >
              Experience
            </a>
            <a 
              href="#research"
              className="px-4 py-2 hover:bg-pink-300 border-2 border-transparent hover:border-black transition-all"
            >
              Research
            </a>
            <a 
              href="#achievements"
              className="px-4 py-2 hover:bg-lime-300 border-2 border-transparent hover:border-black transition-all"
            >
              Achievements
            </a>
            <a 
              href="#contact"
              className="px-4 py-2 hover:bg-yellow-300 border-2 border-transparent hover:border-black transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-lime-300 border-4 border-black px-4 py-2 rotate-[-2deg] mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p>Hello, I'm</p>
            </div>
            <h1 className="mb-4">Bidusha Dey</h1>
            <div className="bg-yellow-300 border-4 border-black p-4 mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2>Microbiology Student</h2>
            </div>
            <p className="mb-4">
              A dedicated, hard-working individual with a passion for Biology. Curious and detail-oriented. 
              Interested in the microscopic world and like processes. Seeking opportunities to apply skills, 
              bringing enthusiasm and focus to every task.
            </p>
            <p className="mb-6">
              Driven by a love for research and inquiry, aiming to contribute meaningfully to biological sciences.
            </p>
            <div className="bg-white border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="flex items-center gap-2">
                <Microscope size={20} />
                <span>MSc Microbiology • Pondicherry University</span>
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-300 border-4 border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="#research"
                className="bg-cyan-300 border-4 border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Research
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-cyan-300 border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-[2deg]">
              <div className="aspect-square bg-white border-4 border-black flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/profile.jpg"
                    alt="Bidusha Dey"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-black"
                  />
                  <p>Bidusha Dey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-pink-300 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-6">Education</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="mb-2">Pondicherry University</h3>
                  <p className="mb-2">Master of Science in Microbiology</p>
                  <p>2025 - 2027</p>
                </div>
                <div className="bg-lime-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="mb-2">St. Xavier's University (Autonomous), Kolkata</h3>
                  <p className="mb-2">Bachelor of Science in Microbiology</p>
                  <p>2022 - 2025</p>
                </div>
                <div className="bg-cyan-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="mb-2">St. Stephen's School, Dum Dum</h3>
                  <p className="mb-2">Council of Indian School Certificate (ISC)</p>
                  <p>2021 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8">
          <div className="inline-block bg-lime-300 border-4 border-black px-6 py-2 rotate-[-1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2>Work Experience</h2>
          </div>
        </div>
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="mb-2">Intern</h3>
              <p>NRS Medical College, Kolkata</p>
            </div>
            <div className="bg-yellow-300 border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p>05/2024 - 08/2024</p>
            </div>
          </div>
          <ul className="space-y-2 ml-6">
            <li className="list-disc">Collected blood, urine, and swab samples from patients.</li>
            <li className="list-disc">Conducted tests for HBV, HAV, HEV, and HCV using serum samples under supervision.</li>
            <li className="list-disc">Acquired hands-on experience in Bacteriology, Media, Serology, Mycology, and ICTC labs for one month in June 2024.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-yellow-300 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-block bg-white border-4 border-black px-6 py-2 rotate-[1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2>Laboratory Skills</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((item, index) => (
              <SkillBadge key={index} skill={item.skill} color={item.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Hobbies Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="inline-block bg-cyan-300 border-4 border-black px-6 py-2 rotate-[-1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2>Languages</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((item, index) => (
                <div key={index} className={`${item.color} border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <h3 className="mb-1">{item.lang}</h3>
                  <p>{item.level}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-8">
              <div className="inline-block bg-pink-300 border-4 border-black px-6 py-2 rotate-[1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2>Hobbies & Interests</h2>
              </div>
            </div>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p>{hobby}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications Section */}
      <section id="research" className="bg-lime-300 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-block bg-white border-4 border-black px-6 py-2 rotate-[-1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2>Research & Publications</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={24} />
                <h3>Conference Presentation</h3>
              </div>
              <h3 className="mb-2">International Conference on Ecotoxicology and Environmental Sciences (ICEES 2024)</h3>
              <p className="mb-2">Ranchi</p>
              <p>Presented original Research work</p>
            </div>
            
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={24} />
                <h3>Publication</h3>
              </div>
              <p className="mb-2">Research paper in ICEES 2024 Journal on environmental microbiology and ecotoxicology in undergraduate studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Volunteering Section */}
      <section id="achievements" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="inline-block bg-yellow-300 border-4 border-black px-6 py-2 rotate-[-1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2>Achievements</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-pink-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={24} />
                  <h3>1st Prize</h3>
                </div>
                <p>Won 1st Prize for Oral Presentation at ICEES 2024.</p>
              </div>
              <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={24} />
                  <h3>Research Recognition</h3>
                </div>
                <p>Acknowledged for outstanding undergraduate research presentation.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <div className="inline-block bg-cyan-300 border-4 border-black px-6 py-2 rotate-[1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2>Volunteering</h2>
              </div>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="mb-4">National Service Scheme (NSS)</h3>
              <p>St. Xavier's College (Autonomous), Kolkata</p>
              <p className="mt-4">Actively participated in community service activities and social welfare programs through the National Service Scheme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-pink-300 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="mb-6 text-center">Get In Touch</h2>
              <p className="text-center mb-8">
                Interested in collaboration or have questions about my research? Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:bidushadey@gmail.com"
                  className="flex items-center gap-4 bg-yellow-300 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
                >
                  <Mail className="flex-shrink-0" />
                  <span>bidushadey@gmail.com</span>
                </a>
                <a 
                  href="tel:+916289334351"
                  className="flex items-center gap-4 bg-cyan-300 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
                >
                  <Phone className="flex-shrink-0" />
                  <span>6289334351</span>
                </a>
                <div className="flex items-start gap-4 bg-lime-300 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="flex-shrink-0 mt-1" />
                  <div>
                    <p>13 Sree Durga pally, P.N. Banerjee road,</p>
                    <p>P.O. Nimta, Kolkata - 700049</p>
                  </div>
                </div>
                <a 
                  href="https://linkedin.com/in/bidushadey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
                >
                  <Linkedin className="flex-shrink-0" />
                  <span>linkedin.com/in/bidushadey</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© 2024 Bidusha Dey. All rights reserved.</p>
          <p>Made with ❤️ by Anubhab</p>
          <p className="mt-2">Microbiology Student • Researcher • Science Enthusiast</p>
        </div>
      </footer>
    </div>
  );
}
