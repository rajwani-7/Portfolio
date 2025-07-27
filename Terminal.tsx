'use client'

import { useState, useEffect, useRef } from 'react'

interface TerminalLine {
  type: 'command' | 'output' | 'error'
  content: string
  timestamp?: string
}

const commands = {
  help: `Available commands:
  help        - Show this help message
  about       - Learn about me
  projects    - View my projects
  skills      - See my technical skills
  experience  - Check my work experience
  education   - View my educational background
  contact     - Get my contact information
  certifications - See my certifications
  leadership  - View leadership experience
  resume      - Download my resume
  clear       - Clear the terminal
  sudo        - Try it and see...`,

  about: `Hi! I'm a passionate Software Engineer & AI Enthusiast.

I specialize in full-stack development, machine learning, and creating
innovative solutions that bridge the gap between complex technology
and user-friendly experiences.

When I'm not coding, you'll find me exploring the latest in AI research,
contributing to open-source projects, or mentoring aspiring developers.

Fun fact: This entire portfolio is built with React, Next.js, and 
a lot of terminal love! 💚`,

  projects: `🚀 Featured Projects:

1. Terminal Portfolio Website
   Tech: Next.js, React, TypeScript, Tailwind CSS
   Link: github.com/harshrajwani/terminal-portfolio
   
2. E-commerce Platform
   Tech: Next.js, PostgreSQL, Stripe, Tailwind
   Link: github.com/harshrajwani/ecommerce-platform
   
3. Data Visualization Dashboard
   Tech: D3.js, Python, Flask, MongoDB
   Link: github.com/harshrajwani/data-dashboard
   
4. Mobile Fitness Tracker
   Tech: React Native, Firebase, Redux
   Link: github.com/harshrajwani/fitness-tracker`,

  skills: `💻 Technical Skills:

Frontend:
  • React.js, Next.js, Vue.js
  • TypeScript, JavaScript (ES6+)
  • HTML5, Tailwind CSS

Backend:
  • Node.js
  • Python

Database:
  • mysql, oracel, MongoDB

DevOps & Tools:
  • AWS,Azure,vscode,android studio
  • Git, GitHub Actions
  • Linux

excel,powerBi,tableau`,

  experience: `💼 Work Experience:

Senior Software Engineer | TechCorp Inc.
📅 Jan 2022 - Present
• Led development of microservices architecture serving 1M+ users
• Mentored junior developers and conducted code reviews
• Implemented CI/CD pipelines reducing deployment time by 60%

Full Stack Developer | StartupXYZ
📅 Jun 2020 - Dec 2021
• Built scalable web applications using React and Node.js
• Collaborated with cross-functional teams in agile environment
• Optimized database queries improving performance by 40%

Junior Developer | WebSolutions Ltd.
📅 Aug 2019 - May 2020
• Developed responsive web interfaces using modern frameworks
• Participated in daily standups and sprint planning
• Fixed bugs and implemented new features based on user feedback`,

  education: `🎓 Education:

MASTER OF COMPUTER APPLICATION
🏫 sigma university | 2024-2026
• Specialization: DATA SCIENCE
•  SEM 1 :SGPA: 8.65
•  SEM 2 :SGPA: 9.5

Bachelor of Computer Application 
🏫 Kskvku University | 2021-2024
• Harsh Jagdish Rajwani
• CGPA: 7.27 
• Grade:A
`,

  contact: `📧 Get In Touch:

Email: rajwaniharsh48@gmail.com
GitHub: github.com/harshrajwani
LinkedIn: linkedin.com/in/harsh-rajwani
Mobile Number: 7435866670

📍 Location: Mumbai, India (Open to remote work)

Feel free to reach out for collaboration opportunities,
technical discussions, or just to say hello! 👋`,

  certifications: `🏆 Certifications:

• AWS Certified Solutions Architect (2021)
  Link: credly.com/badges/your-aws-cert
  
• Google Cloud Professional Developer (2022)
  Link: cloud.google.com/certification
  
• MongoDB Certified Developer (2021)
  Link: university.mongodb.com/certification
  
• Certified Kubernetes Administrator (2023)
  Link: cncf.io/certification/cka
  
• Meta React Developer Certificate (2020)
  Link: coursera.org/professional-certificates/meta-react-developer`,

  leadership: `👥 Leadership Experience:

Tech Lead | Open Source Project "DevTools Pro"
📅 2021 - Present
• Leading a team of 12 contributors across 6 countries
• Coordinating feature development and release cycles
• Project has 2.5k+ GitHub stars and 500+ forks

Mentor | CodePath Technical Interview Prep
📅 2020 - Present  
• Mentoring 50+ students in technical interview preparation
• Conducting mock interviews and providing feedback
• 85% of mentees received job offers at top tech companies

Organizer | Local JavaScript Meetup
📅 2019 - Present
• Organizing monthly meetups with 200+ attendees
• Coordinating speakers and technical presentations
• Building local developer community`,

  sudo: `[sudo] password for user: 
Permission denied. 
Nice try! 😄 You're not getting root access that easily.
This is a portfolio, not a real terminal! 🔒`,

  resume: `📄 Downloading resume...

██████████████████████████ 100%

Resume downloaded successfully! 
(In a real implementation, this would trigger a PDF download)

File: resume_yourname_2024.pdf
Size: 245 KB
Location: ~/Downloads/

Thank you for your interest! 📋✨`
}

export default function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: `rajwani@portfolio:~$ welcome

Hi, I'm Harsh Rajwani, a Software Engineer & AI Enthusiast.

Welcome to my interactive 'AI powered' portfolio terminal! haha!
Type 'help' to see available commands.`
    }
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const navigationLinks = [
    'help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership'
  ]

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when new content is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const timestamp = new Date().toLocaleTimeString()

    // Add command to history
    setHistory(prev => [...prev, {
      type: 'command',
      content: `rajwani@portfolio:~$ ${cmd}`,
      timestamp
    }])

    // Process command
    if (command === 'clear') {
      setHistory([])
      return
    }

    if (commands[command as keyof typeof commands]) {
      setIsTyping(true)
      // Simulate typing delay
      setTimeout(() => {
        setHistory(prev => [...prev, {
          type: 'output',
          content: commands[command as keyof typeof commands],
          timestamp
        }])
        setIsTyping(false)
      }, 500)
    } else if (command === '') {
      // Empty command, just show new prompt
      return
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${command}. Type 'help' for available commands.`,
        timestamp
      }])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim()) {
      handleCommand(currentInput)
      setCurrentInput('')
    }
  }

  const handleNavClick = (command: string) => {
    setCurrentInput(command)
    handleCommand(command)
    setCurrentInput('')
  }

  // Function to render text with clickable links
  const renderWithLinks = (text: string) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+|github\.com\/[^\s]+|linkedin\.com\/[^\s]+|credly\.com\/[^\s]+|cloud\.google\.com\/[^\s]+|university\.mongodb\.com\/[^\s]+|cncf\.io\/[^\s]+|coursera\.org\/[^\s]+)/g
    
    const parts = text.split(urlRegex)
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        const url = part.startsWith('http') ? part : `https://${part}`
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-cyan hover:text-yellow-400 underline cursor-pointer transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              window.open(url, '_blank')
            }}
          >
            {part}
          </a>
        )
      }
      return part
    })
  }

  return (
    <div className="h-full flex flex-col bg-terminal-bg">
      {/* Header Navigation */}
      <div className="border-b border-terminal-green p-2 md:p-4">
        <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base">
          {navigationLinks.map((link, index) => (
            <span key={link}>
              <button
                onClick={() => handleNavClick(link)}
                className="text-gray-300 hover:text-white hover:underline transition-colors cursor-pointer px-1 font-medium"
              >
                {link}
              </button>
              {index < navigationLinks.length - 1 && (
                <span className="text-gray-500 mx-1">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-2 md:p-4 overflow-y-auto terminal-scroll"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-3">
            <pre className={`whitespace-pre-wrap font-mono text-base md:text-lg leading-relaxed ${
              line.type === 'command' ? 'text-terminal-cyan' :
              line.type === 'error' ? 'text-red-400' : 'text-terminal-green'
            }`}>
              {line.type === 'command' || line.type === 'error' ? 
                line.content : 
                renderWithLinks(line.content)
              }
            </pre>
          </div>
        ))}
        
        {isTyping && (
          <div className="text-terminal-green">
            <span className="animate-pulse">Typing...</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-terminal-green p-3 md:p-4">
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-yellow-400 mr-2 md:mr-3 text-sm md:text-base font-medium hidden sm:inline">rajwani@portfolio:~$</span>
          <span className="text-yellow-400 mr-2 text-sm sm:hidden">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent text-terminal-green outline-none font-mono text-sm md:text-base"
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
          />
          <span className="text-terminal-green animate-blink ml-1 text-base">_</span>
        </form>
      </div>
    </div>
  )
}
