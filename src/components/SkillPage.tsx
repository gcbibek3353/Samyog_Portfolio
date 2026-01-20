'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const SkillCard = ({ icon, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current; // Store the ref's current value
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );
  
    if (currentCard) {
      observer.observe(currentCard);
    }
  
    // Cleanup the observer using the stored reference
    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);
  

  return (
    <div 
      ref={cardRef}
      className={`
        bg-[#1a1f2e] p-6 rounded-lg transition-all duration-700 
        hover:transform hover:scale-105 hover:shadow-lg 
        flex flex-col items-center gap-4 cursor-pointer
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'}
      `}
      // style={{
      //   transitionDelay: `${Math.random() * 300}ms` // Random stagger effect
      // }}
    >
      <Image 
        src={icon} 
        alt={`${title} logo`} 
        width={40} 
        height={40} 
        className={`
          transition-all duration-700
          ${isVisible ? 'scale-100 rotate-0' : 'scale-50 -rotate-12'}
        `}
      />
      <h3 className="text-white text-lg font-medium tracking-wide uppercase">
        {title}
      </h3>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { title: "HTML", icon: '/assets/logos/html.svg' },
    { title: "CSS", icon: '/assets/logos/css.svg' },
    { title: "Go", icon: '/assets/logos/go.svg' },
    { title: "Java", icon: '/assets/logos/java.png' },
    { title: "MYSQL", icon: '/assets/logos/mysql.svg' },
    { title: "MongoDB", icon: '/assets/logos/mongodb.png' },
    { title: "Git", icon: '/assets/logos/git.png' },
    { title: "Github", icon: '/assets/logos/github.svg' },
    { title: "Bash", icon: '/assets/logos/terminal.svg' },
    { title: "Python", icon: '/assets/logos/python.svg' },
    { title: "Docker", icon: '/assets/logos/docker.svg' },
    { title: "Postman", icon: '/assets/logos/postman.svg' },
    { title: "Ansible", icon: '/assets/logos/ansible.png' },
    { title: "Jenkins", icon: '/assets/logos/jenkins.svg' },
    { title: "Terraform", icon: '/assets/logos/terraform.jpg' },
    { title: "Kubernetes", icon: '/assets/logos/kubernetes.png' },
    { title: "Nginx", icon: '/assets/logos/nginx.png' },
    { title: "AWS", icon: '/assets/logos/aws.png' },
    { title: "Prometheus", icon: '/assets/logos/prometheus.png' },
    { title: "Grafana", icon: '/assets/logos/grafana.jpeg' },
    { title: "Gitlab", icon: '/assets/logos/gitlab.png' },
    { title: "Jira", icon: '/assets/logos/jira.png' },
  ];

  return (
    <section className="py-20 px-4 bg-black relative z-10 opacity-80" id='skills'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;