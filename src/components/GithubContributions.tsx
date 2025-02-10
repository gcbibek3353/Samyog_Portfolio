import React, { useRef, useState, useEffect } from 'react';

// Skill card component with animation
const SkillCard = ({ skill, level, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current; // Store the ref in a variable
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
  
    if (currentCard) {
      observer.observe(currentCard);
    }
  
    // Cleanup the observer using the stored ref
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
        transform transition-all duration-700 ease-out
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'}
        bg-white shadow-md rounded-lg p-4 m-2
      `}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="flex items-center">
        {icon && <span className="mr-3 text-2xl">{icon}</span>}
        <div>
          <h3 className="font-semibold">{skill}</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ 
                width: `${level}%`,
                transition: 'width 0.7s ease-out',
                transitionDelay: `${delay}ms`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SkillPage component with animated skill cards
const SkillPage = () => {
  // Sample skills data - replace with your actual skills
  const skills = [
    { skill: 'React', level: 90, icon: '⚛️' },
    { skill: 'Next.js', level: 85, icon: '🌐' },
    { skill: 'TypeScript', level: 80, icon: '📘' },
    { skill: 'Tailwind CSS', level: 75, icon: '🎨' },
    { skill: 'Node.js', level: 70, icon: '🟢' }
  ];

  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.skill}
            {...skill}
            delay={index * 200} // Staggered animation delay
          />
        ))}
      </div>
    </div>
  );
};

export default SkillPage;