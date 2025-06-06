import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  pythonIcon,
  reactIcon,
  yoloIcon,
  mysqlIcon,
  opencvIcon,
  androidIcon,
  cameraIcon,
  annotationIcon,
} from "../assets";

export const navigation = [
  {
    id: "home",
    title: "Home",
    url: "#home",
  },
  {
    id: "objectives",
    title: "Objectives",
    url: "#objectives",
  },
  {
    id: "methodology",
    title: "Methodology",
    url: "#methodology",
  },
  {
    id: "results",
    title: "Results",
    url: "#results",
  },

  {
    id: "our-app",
    title: "Our App",
    url: "#our-app",
  },
  {
    id: "thanks",
    title: "Thanks",
    url: "#thanks",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Dr. Chamara Liyanage  ",
    text: "Main Supervisor — Guides the overall direction of the project and ensures academic standards and innovation goals are met.",
    date: "Supervisor",
    status: "Lecturer",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Wanninayaka W.M.U.R.M",
    text: "Team Member — Focuses on the Model Development and integration of vision based models for real time performance.",
    date: "Developer",
    status: "ICT/20/953",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Shankaran G.",
    text: "Team Member — Handles dataset preparation, annotation, and CVAT-based labeling for lane detection and vehicle safety.",
    date: "Data Annotator",
    status: "ICT/20/937",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: " Senanayaka L.S.M.N.D ",
    text: "Team Member — Specializes in backend services, including cloud integration, REST APIs, and microservice deployment.",
    date: "App Developer",
    status: "ICT/20/931",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Our methodology combines data driven model training, real-time computer vision, and mobile integration to build a unified AI-based vehicle safety system.";

export const collabContent = [
  {
    id: "0",
    title: "Dataset Creation",
    text: "Collected and preprocessed real-world driving footage for training the model, focusing on lane and obstacle scenarios.",
  },
  {
    id: "1",
    title: "Model Training",
    text: "Trained a custom YOLO-based segmentation model for lane detection and obstacle recognition using labeled datasets.",
  },
  {
    id: "2",
    title: "App Development",
    text: "Developed a mobile application to display AI-generated insights in real-time using vision-based outputs.",
  },
  {
    id: "3",
    title: "Final Output",
    text: "Integrated the AI model with the mobile interface to demonstrate a unified and deployable vehicle safety system.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Python",
    icon: pythonIcon,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "YOLOv8",
    icon: yoloIcon,
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "React Native",
    icon: reactIcon,
    width: 34,
    height: 34,
  },

  {
    id: "3",
    title: "OpenCV",
    icon: opencvIcon,
    width: 34,
    height: 34,
  },
  {
    id: "4",
    title: "MySQL",
    icon: mysqlIcon,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Android",
    icon: androidIcon,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "cameraIcon",
    icon: cameraIcon,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "annotationIcon",
    icon: annotationIcon,
    width: 34,
    height: 34,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom YOLO Segmentation Model for Lane Detection",
    text: "Implementing a specialized YOLO-based segmentation model to accurately detect and track lanes in various driving environments.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improved Obstacle Detection",
    text: "Enhancing real-time obstacle detection using AI techniques to identify pedestrians, vehicles, and unexpected objects on the road.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Unified System for Vehicle Safety",
    text: "Integrating multiple vision and AI modules into a cohesive system for comprehensive vehicle safety and assistance.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Vision-Based Output via Mobile App",
    text: "Delivering real-time camera and AI processed outputs through a mobile interface for driver awareness and feedback.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
