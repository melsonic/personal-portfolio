export type InterestsDataType = {
  name: string;
  title: string;
  description: string;
  mastery: number;
};

export const interests: Array<InterestsDataType> = [
  {
    name: "Web Development",
    title: "Full Stack Developer using JS & Golang",
    description: "I have build various full-stack applications throughout these years. I am proficient in React and hence use NextJS primarily for front-end Development along with tailwindcss/ Material UI etc. For the back-end I can also develop RESTful API using both nodeJS and golang. And for Databases, I have primarily worked with MongoDB, MySQL etc. Along with these tools I often use other tools also for some specific use cases.",
    mastery: 80
  },
  {
    name: "Cloud Native",
    title: "Microservices, Container Deployment, CI/CD",
    description : "I am familiar with microservices architecture for better scalability and overall software development life cycle. I am familiar with containers and tools like Docker and Kubernetes for container orchestration. I primarily use Github actions for CI/CD pipeline. I have also experience in working with meshery service mesh.",
    mastery: 50
  },
  {
    name: "Machine Learning",
    title: "Supervised Learning",
    description : "Basically I am beginner to this field of study. I have worked with machine learning models under Supervised Learning. I have working experience with various Regression Models and Neural Network etc. I am still in the learning process but I am loving the it so far.",
    mastery: 30
  }
];

