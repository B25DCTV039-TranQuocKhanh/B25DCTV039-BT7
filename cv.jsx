import React from 'react';
import './CV.css';

const Header = ({ name, subtitle }) => {
  return (
    <header className="cv-header">
      <h1>{name}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};

const Section = ({ title, children }) => {
  return (
    <section className="cv-section">
      <h3 className="section-title">{title}</h3>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

const ListItem = ({ name, description }) => {
  return (
    <li className="list-item">
      <strong>{name}</strong>: {description}
    </li>
  );
};

const CV = () => {
  const skillsData = [
    { name: 'Ngôn ngữ lập trình', description: 'Python, ReactJS, JavaScript' },
    { name: 'E-commerce & Marketing', description: 'Quản lý gian hàng TikTok Shop, Tối ưu GMV Max, Affiliate Marketing' },
    { name: 'Ngoại ngữ', description: 'Tiếng Anh' }
  ];

  const projectsData = [
    { name: 'Nghiên cứu AIoT', description: 'Dự án môn học thực hành tại Học viện Công nghệ Bưu chính Viễn thông.' },
    { name: 'Python Master', description: 'Dự án thực hành thuật toán và giải đề luyện tập trên nền tảng 28Tech.' },
  ];

  return (
    <div className="cv-container">
      <Header 
        name="Trần Quốc Khánh" 
        subtitle="Sinh viên Ngành Artificial Intelligence of Things (AIoT)" 
      />

      <Section title="Kỹ năng nổi bật">
        <ul>
          {skillsData.map((skill, index) => (
            <ListItem 
              key={index} 
              name={skill.name} 
              description={skill.description} 
            />
          ))}
        </ul>
      </Section>

      <Section title="Dự án & Kinh nghiệm">
        <ul>
          {projectsData.map((project, index) => (
            <ListItem 
              key={index} 
              name={project.name} 
              description={project.description} 
            />
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default CV;