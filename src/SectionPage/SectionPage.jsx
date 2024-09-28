const sections = ['HTML', 'CSS', 'JavaScript', 'React'];
const SectionPage = () => {
  return (
    <div>
      <div className="section-container">
        {sections.map(section => (
          <div
            key={section}
            className="section-item"
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default SectionPage;
