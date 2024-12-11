import React, { useContext, useState } from 'react';
import MyContext from './Context-Api/MyContext';

export const ProjectAdditionSection = ({ ProfileVsProjectAdditionSection, setProfileVsProjectAdditionSection }) => {
  const { totalProject, setTotalProject } = useContext(MyContext); // Access the context with setTotalProject function

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
    gitHubLink: "",
    liveLink: "",
    img: null,  // Assuming you want to handle file upload
  });

  const handleChange = (event) => {
    const value = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedSkills(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      img: URL.createObjectURL(e.target.files[0]),  // Store the file object
    });

    console.log(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a new project object
    const newProject = {
      id: `project${totalProject.totalCountOfProject + 1}`, // Generate unique id based on total count
      number: String(totalProject.totalCountOfProject + 1).padStart(2, '0'),
      skills: selectedSkills,
      heading: formData.title,
      subHeading: formData.caption,
      gitHubLink: formData.gitHubLink,
      liveLink: formData.liveLink,
      backgroundImage: formData.img, // Handle image file or URL here
    };
    console.log(newProject);

    // Update the total count and projects array
    setTotalProject({
      totalCountOfProject: totalProject.totalCountOfProject + 1,
      projects: [...totalProject.projects, newProject], // Add new project to the array
    });

    console.log(totalProject);

    // Reset form after submission
    setFormData({
      title: "",
      caption: "",
      gitHubLink: "",
      liveLink: "",
      img: null,
    });

    setSelectedSkills([]);  // Clear selected skills
  };

  const handleClick = () => {
    setProfileVsProjectAdditionSection(false);  // Set to false when toggle is clicked
  };

  return (
    <div className='ProjectAdditionSection'>
      <label className="switch">
        <input
          type="checkbox"
          checked={ProfileVsProjectAdditionSection}  // Bind checkbox to the state
          onChange={handleClick}  // Toggle the state when clicked
        />
        <span className="slider"></span>
      </label>

      <h1>Add New Project</h1>
        <div>
          <label htmlFor="title">Heading : </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="caption">SubHeading : </label>
          <input
            type="text"
            name="caption"
            id="caption"
            value={formData.caption}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="gitHubLink">GitHubLink : </label>
          <input
            type="text"
            name="gitHubLink"
            id="gitHubLink"
            value={formData.gitHubLink}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="liveLink">LiveLink : </label>
          <input
            type="text"
            name="liveLink"
            id="liveLink"
            value={formData.liveLink}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="img">Img : </label>
          <input
            type="file"
            name="img"
            id="img"
            onChange={handleFileChange}
            required
          />
        </div>

        <label htmlFor="skills">Choose Skills:</label>
        <select
          name="skills"
          id="skills"
          multiple
          value={selectedSkills}
          onChange={handleChange}
          required
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">Javascript</option>
          <option value="Reacts">React</option>
          <option value="NodeJs">NodeJs</option>
          <option value="Next">Next</option>
          <option value="Redux">Redux</option>
          <option value="Tailwind">Tailwind</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="MaterialUI">MaterialUI</option>
          <option value="Express">Express</option>
          <option value="Git">Git</option>
          <option value="Github">Github</option>
          <option value="Graphql">Graphql</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Vercel">Vercel</option>
          <option value="ChartJs">ChartJs</option>
          <option value="Bash">Bash</option>
          <option value="Docker">Docker</option>
          <option value="K8s">K8s</option>
        </select>

        <button type="submit" className="submitBtn" role="button" onClick={handleSubmit}>Submit</button>
      
    </div>
  );
};
