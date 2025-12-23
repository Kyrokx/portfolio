import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Portfolio() {
  // MODIFIEZ VOS INFORMATIONS ICI
  const info = {
    nom: "K. Ruben",
    role: "Étudiant en Informatique IT1",
    bio: "Python • Mobile apps • Developer",
    
    competences: [
      { nom: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { nom: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { nom: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { nom: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { nom: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { nom: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { nom: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { nom: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { nom: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" }
    ],
    
    email: "kyrokxdev@gmail.com",
    github: "https://github.com/kyrokx",
    linkedin: "https://linkedin.com/",
    discord: "kyrokx",
    twitter: "https://x.com/kyrokxx",
    githubUsername: "kyrokx" // Juste votre nom d'utilisateur GitHub
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg text-green-400">{info.nom}</span>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="text-gray-300 hover:text-green-400 transition">Accueil</a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition">À propos</a>
            <a href="#skills" className="text-gray-300 hover:text-green-400 transition">Compétences</a>
            <a href="#projects" className="text-gray-300 hover:text-green-400 transition">Projets</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">{info.nom}</h1>
        <p className="text-xl text-gray-400 mb-8">{info.role}</p>
        <div className="flex gap-4">
          <a href={info.github} target="_blank" rel="noopener noreferrer" 
             className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:border-green-500 transition">
            <Github size={20} className="text-green-400" />
          </a>
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer"
             className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:border-green-500 transition">
            <Linkedin size={20} className="text-green-400" />
          </a>
          <a href={`mailto:${info.email}`}
             className="p-2 border border-gray-700 rounded hover:bg-gray-800 hover:border-green-500 transition">
            <Mail size={20} className="text-green-400" />
          </a>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-green-400">À propos</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {info.bio}
          </p>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {info.competences.map((skill, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 hover:bg-gray-750 transition flex flex-col items-center gap-3">
                <img src={skill.logo} alt={skill.nom} className="w-12 h-12" />
                <span className="text-gray-200 font-medium">{skill.nom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets GitHub */}
      <section id="projects" className="bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Projets</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 text-center hover:border-green-500 transition">
            <Github size={48} className="text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Découvrez mes projets sur GitHub</h3>
            <p className="text-gray-400 mb-6">Retrouvez tous mes projets, contributions et repositories open source</p>
            <a 
              href={info.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-gray-900 font-medium rounded-lg hover:bg-green-400 transition"
            >
              <Github size={20} />
              Voir mon GitHub
            </a>
          </div>
          
          {/* Widget GitHub Stats (optionnel) */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${info.githubUsername}&theme=shadow_blue&hide_border=false&include_all_commits=true&count_private=false`}
              alt=" "
              className="rounded-lg border border-gray-700"
            />
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center">
            <img 
              src={`https://nirzak-streak-stats.vercel.app/?user=${info.githubUsername}&theme=shadow_blue&hide_border=false`}
              alt=" "
              className="rounded-lg border border-gray-700"
            />
          </div> 
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${info.githubUsername}&theme=shadow_blue&hide_border=false&include_all_commits=true&count_private=false&layout=compact`}
              alt=" "
              className="rounded-lg border border-gray-700"
            />
          </div>    
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Contact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href={`mailto:${info.email}`} 
               className="flex items-center gap-3 text-lg text-gray-300 hover:text-green-400 bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition">
              <Mail size={22} />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-400">{info.email}</div>
              </div>
            </a>
            
            <a href={info.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 text-lg text-gray-300 hover:text-green-400 bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition">
              <Github size={22} />
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm text-gray-400">@{info.githubUsername}</div>
              </div>
            </a>
            
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 text-lg text-gray-300 hover:text-green-400 bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition">
              <Linkedin size={22} />
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-gray-400">Profil professionnel</div>
              </div>
            </a>
            
            <div className="flex items-center gap-3 text-lg text-gray-300 bg-gray-800 border border-gray-700 rounded-lg p-4">
              <MessageCircle size={22} className="text-green-400" />
              <div>
                <div className="font-medium">Discord</div>
                <div className="text-sm text-gray-400">{info.discord}</div>
              </div>
            </div>
            
            <a href={info.twitter} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 text-lg text-gray-300 hover:text-green-400 bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <div>
                <div className="font-medium">X (Twitter)</div>
                <div className="text-sm text-gray-400">Suivez-moi</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2026 {info.nom}
      </footer>
    </div>
  );
}