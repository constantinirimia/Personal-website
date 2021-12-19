const skills = [
  {
    title: "Javascript",
    category: ["Web Development", "Languages", "Frontend"],
  },
  {
    title: "Node.JS",

    category: ["Web Development", "Frameworks", "Backend"],
  },
  {
    title: "React",

    category: ["Web Development", "Frameworks", "Frontend"],
  },
  {
    title: "Java",

    category: ["Languages", "Backend"],
  },
  {
    title: "Splunk",

    category: ["Tools"],
  },
  {
    title: "Python",

    category: ["Languages", "Backend"],
  },
  {
    title: "AWS",

    category: ["Cloud Computing"],
  },
  {
    title: "GCP",

    category: ["Cloud Computing"],
  },
  {
    title: "Mockito",

    category: ["Testing"],
  },
  {
    title: "jUnit",

    category: ["Testing"],
  },
  {
    title: "Karate",

    category: ["Testing"],
  },
  {
    title: "Selenium",

    category: ["Testing"],
  },
  {
    title: "Cucumber",

    category: ["Testing"],
  },

  {
    title: "MongoDB",

    category: ["Web Development", "Databases"],
  },
  {
    title: "ElasticSearch",

    category: ["Web Development", "Databases"],
  },
  {
    title: "Redis",

    category: ["Web Development", "Databases"],
  },
  {
    title: "PostgreSQL",

    category: ["Web Development", "Databases"],
  },
  {
    title: "SQL",

    category: ["Databases", "Languages"],
  },
  {
    title: "MySql",

    category: ["Databases"],
  },

  {
    title: "Git/GitHub",

    category: ["Tools"],
  },
  {
    title: "BitBucket",

    category: ["Tools"],
  },
  {
    title: "JIRA",

    category: ["Tools"],
  },
  {
    title: "Tomcat",

    category: ["Tools"],
  },
  {
    title: "Maven",

    category: ["Tools"],
  },
  {
    title: "Gradle",

    category: ["Tools"],
  },
  {
    title: "SonarQube",

    category: ["Tools"],
  },
  {
    title: "PowerShell",

    category: ["Tools"],
  },
  {
    title: "Postman",

    category: ["Tools"],
  },
  {
    title: "Jenkins",

    category: ["Tools"],
  },

  {
    title: "Kubernetes",

    category: ["Tools"],
  },
  {
    title: "Docker",

    category: ["Tools"],
  },

  {
    title: "Tensorflow",

    category: ["Data Science", "Frameworks"],
  },
  {
    title: "Keras",

    category: ["Data Science", "Frameworks"],
  },

  {
    title: "Typescript",

    category: ["Web Development", "Languages"],
  },
  {
    title: "HTML + CSS",

    category: ["Web Development", "Languages"],
  },

  {
    title: "Pandas",

    category: ["Data Science", "Frameworks"],
  },
  {
    title: "Matplotlib",

    category: ["Data Science"],
  },
  {
    title: "Scikit-Learn",

    category: ["Data Science"],
  },
  {
    title: "Angular",

    category: ["Web Development", "Frameworks", "Frontend"],
  },
  {
    title: "Spring Boot",
    category: ["Web Development", "Frameworks", "Backend"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
