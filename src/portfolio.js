/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Rushirajsinh Parmar",
  logo_name: "RushirajsinhParmar",
  nickname: "Rushi",
  subTitle:
    "A passionate individual who always thrives to work on Machine Learning, Deep Learning & Computer Vision to solve real world problems using AI",
  resumeLink:
    "https://drive.google.com/file/d/13c8ov4-rT12bwUerB0uYb7HkY6cS_gBm/view?usp=sharing",
  portfolio_repository: "https://github.com/rushirajsherlocked",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/rushirajsherlocked",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rushirajsinh-parmar-aa8463152-rushiraj/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:rushirajparmar23000@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Rushirajparmar3",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  //{
  //name: "Facebook",
  //link: "https://www.facebook.com/laymanbrother.19/",
  //fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //backgroundColor: '#1877F2' // Reference https://simpleicons.org/?q=facebook
  //},
  {
    name: "Instagram",
    link: "https://instagram.com/rushiraj.ai",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning, Deep Learning, Computer Vision",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly robust, scalable and ready to deploy machine learning and deep learning models",
        "⚡ Experience of working with Computer Vision",
        "⚡ Experienced working in deploying Computer Vision softwares in Real-Time scenario for surveillance using CCTV cameras",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "I participate in various ML/AI Hackathons !",
      fileName: "hackathon.cms.gif",
      skills: [
        "⚡ I love to participate in hackathons! The thrill of building something new and the sheer pressure to work under extreme conditions delight me!😄",
        "⚡ Building an end to end deliverable solution with my team has always been the goal!",
        "⚡ Take a look at my acheivements section for all the records I hope you will like them😉",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "But above everything else, I love to do RESEARCH!",
      fileName: "Research",
      skills: [
        "⚡ I love to read about new advancements in the field of Deep learning and I try to code it on my own!",
        "⚡ Later on this habit molded me to come up with my own research ideas and start implementing them!",
        "⚡ And now after 2 years of experience, I have made substantial improvements in terms of accuracy and robustness of the model for many research topics like Person Re-Identification, Gait Analysis etc and currently in the process of writing a research paper on the basis of findings",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building resposive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //         {
    //           skillName: "CSS3",
    //           fontAwesomeClassname: "fa-css3",
    //           style: {
    //             color: "#1572B6",
    //           },
    //         },
    //         {
    //           skillName: "Sass",
    //           fontAwesomeClassname: "simple-icons:sass",
    //           style: {
    //             color: "#CC6699",
    //           },
    //         },
    //         {
    //           skillName: "JavaScript",
    //           fontAwesomeClassname: "simple-icons:javascript",
    //           style: {
    //             backgroundColor: "#000000",
    //             color: "#F7DF1E",
    //           },
    //         },
    //         {
    //           skillName: "ReactJS",
    //           fontAwesomeClassname: "simple-icons:react",
    //           style: {
    //             color: "#61DAFB",
    //           },
    //         },
    //         {
    //           skillName: "NodeJS",
    //           fontAwesomeClassname: "simple-icons:node-dot-js",
    //           style: {
    //             color: "#339933",
    //           },
    //         },
    //         {
    //           skillName: "NPM",
    //           fontAwesomeClassname: "simple-icons:npm",
    //           style: {
    //             color: "#CB3837",
    //           },
    //         },
    //         {
    //           skillName: "Yarn",
    //           fontAwesomeClassname: "simple-icons:yarn",
    //           style: {
    //             color: "#2C8EBB",
    //           },
    //         },
    //         {
    //           skillName: "Gatsby",
    //           fontAwesomeClassname: "simple-icons:gatsby",
    //           style: {
    //             color: "#663399",
    //           },
    //         },
    //         {
    //           skillName: "Flutter",
    //           fontAwesomeClassname: "simple-icons:flutter",
    //           style: {
    //             color: "#02569B",
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       title: "Cloud Infra-Architecture",
    //       fileName: "CloudInfraImg",
    //       skills: [
    //         "⚡ Experience working on multiple cloud platforms",
    //         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //         "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //       ],
    //       softwareSkills: [
    //         {
    //           skillName: "GCP",
    //           fontAwesomeClassname: "simple-icons:googlecloud",
    //           style: {
    //             color: "#4285F4",
    //           },
    //         },
    //         {
    //           skillName: "AWS",
    //           fontAwesomeClassname: "simple-icons:amazonaws",
    //           style: {
    //             color: "#FF9900",
    //           },
    //         },
    //         {
    //           skillName: "Azure",
    //           fontAwesomeClassname: "simple-icons:microsoftazure",
    //           style: {
    //             color: "#0089D6",
    //           },
    //         },
    //         {
    //           skillName: "Firebase",
    //           fontAwesomeClassname: "simple-icons:firebase",
    //           style: {
    //             color: "#FFCA28",
    //           },
    //         },
    //         {
    //           skillName: "PostgreSQL",
    //           fontAwesomeClassname: "simple-icons:postgresql",
    //           style: {
    //             color: "#336791",
    //           },
    //         },
    //         {
    //           skillName: "MongoDB",
    //           fontAwesomeClassname: "simple-icons:mongodb",
    //           style: {
    //             color: "#47A248",
    //           },
    //         },
    //         {
    //           skillName: "Docker",
    //           fontAwesomeClassname: "simple-icons:docker",
    //           style: {
    //             color: "#1488C6",
    //           },
    //         },
    //         {
    //           skillName: "Kubernetes",
    //           fontAwesomeClassname: "simple-icons:kubernetes",
    //           style: {
    //             color: "#326CE5",
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       title: "UI/UX Design",
    //       fileName: "DesignImg",
    //       skills: [
    //         "⚡ Designing highly attractive user interface for mobile and web applications",
    //         "⚡ Customizing logo designs and building logos from scratch",
    //         "⚡ Creating the flow of application functionalities to optimize user experience",
    //       ],
    //       softwareSkills: [
    //         {
    //           skillName: "Adobe XD",
    //           fontAwesomeClassname: "simple-icons:adobexd",
    //           style: {
    //             color: "#FF2BC2",
    //           },
    //         },
    //         {
    //           skillName: "Figma",
    //           fontAwesomeClassname: "simple-icons:figma",
    //           style: {
    //             color: "#F24E1E",
    //           },
    //         },
    //         {
    //           skillName: "Adobe Illustrator",
    //           fontAwesomeClassname: "simple-icons:adobeillustrator",
    //           style: {
    //             color: "#FF7C00",
    //           },
    //         },
    //         {
    //           skillName: "Inkscape",
    //           fontAwesomeClassname: "simple-icons:inkscape",
    //           style: {
    //             color: "#000000",
    //           },
    //         },
    //       ],
    //     },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Smart India Hackathon(SIH) 2020 - National Winner",
      subtitle: "secured 1st rank nationally and a cash prize of 1,00,000 INR ",
      logo_path: "SIH.png",
      alt_name: "Team MAVERICK",
      //duration: "2016 - Present",
      descriptions: [
        "⚡ Our team 'MAVERICK' won the National Finals of SIH on Aug 3,2020",
        "⚡ We built a Deep Learning - Computer Vision enabled Surveillance software for the Police Dept, Govt. of Madhya Pradesh",
        "⚡ The built system will be further integrated and used for surveillance purposes under the National Police Mission 'Crime Free Bharat' intitiative. You can view the initial 15 min of our last round solution presentation video link mentioned below",
      ],
      website_link: "https://youtu.be/A9P5WZyP4qM?t=1993",
    },

    {
      title:
        "Awarded research grant of 3,50,000 INR for my research work on Identification using Gait Energy Image",
      //subtitle: "secured 1st rank nationally and a cash prize of 1,00,000 INR ",
      logo_path: "Gait.png",
      alt_name: "Team MAVERICK",
      //duration: "2016 - Present",
      descriptions: [],
      //website_link: "https://youtu.be/A9P5WZyP4qM?t=1993",
    },

    {
      title: "State Rank: 2nd, Thomson Reuters, HackArena - AI Hackathon",
      subtitle: "Won a cash prize of 30,000 INR. ",
      logo_path: "TR.jpg",
      alt_name: "Team MAVERICK",
      //duration: "2016 - Present",
      descriptions: [],
      //website_link: "https://youtu.be/A9P5WZyP4qM?t=1993",
    },

    {
      title: "2nd Rank in IEEE 'Ingenious Machine Learning Hackathon 2019' ",
      subtitle:
        "Inter-college competition at School of Engineering and Applied Science, Ahmedabad University, March 2019 ",
      logo_path: "AU.png",
      alt_name: "Team MAVERICK",
      //duration: "2016 - Present",
      descriptions: [],
      //website_link: "https://youtu.be/A9P5WZyP4qM?t=1993",
    },

    {
      title: "TCS HumaAIn competition National Finalist",
      //subtitle: "Won a cash prize of 30,000 INR. ",
      logo_path: "TCS.png",
      alt_name: "Team MAVERICK",
      //duration: "2016 - Present",
      descriptions: [],
      website_link:
        "https://github.com/rushirajsherlocked/TCS-HumAIn---Taxonomy-Classification",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with various research organisations in the field of Machine Learning, Deep Learning & Computer Vision and currently in the process of writing research papers based on conclusive work done. I have built computer vision softwares like 'APISE' & 'TriNetra' which have been merged and currently in use in the Indian Army and Madhya Pradesh Govt. Police Department respectively",
  header_image_path: "experience.svg",
  sections: [
    //{
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title:
            "Research Intern (Satellite Image Processing & Machine Learning)",
          company: "Small Satellite Research Laboratory (SSRL) - UGA ",
          company_url: "http://www.smallsat.uga.edu",
          logo_path: "SSRL.png",
          duration:
            "Internship delayed temporarily due to COVID (Expected continual: Nov 2020)",
          location: "Georgia, United States of America",
          description:
            "Project funded by NASA: To apply various Machine Learning, Deep Learning & Computer Vision algorithms on Satellite Images for better understanding and further analytics",
          color: "#0071C5",
        },
        {
          title: "AI Research & Development Intern",
          company:
            "Centre of Excellence - Artificial Intelligence, Indian Army",
          //company_url: "https://www.delhivery.com/",
          logo_path: "IndianArmy.png",
          duration: "Nov 2019 - Feb 2020",
          location: "Mhow, Madhya Pradesh",
          description:
            "Research intern under Lt. Col Anant Bhatt. Worked on Developing APISE software ( AI-Powered Intelligent Surveillance Engine). This system combines the working of Object Detection and Facial Recognition methods. Worked on Enhancing Facial Recognition software for long-distance and using Image Super-Resolution concepts for better results. Custom Object Detection and Object Tracking to detect and track Terrorists, ANEs, Civilian, Arms and A vehicles. Alarm trigger system for suspect spotting",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Research Intern",
          company:
            "Bhaskaracharya Institute for Space Applications and Geo-Informatics (BISAG)",
          // company_url:
          //   "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "BISAG.jpg",
          duration: "May 2019 - June 2019",
          location: "Gandhinagar, Gujarat",
          description:
            "The aim was to develop a system to identify a person-of-interest based on a specific set of soft biometric attributes from a surveillance video. The tasks assigned included; creation of private dataset at BISAG premises, foreground-background estimation with deep learning and computer vision techniques, gait analysis, feature extraction, dimensionality reduction and training a machine learning model. The research was carried out in two phases; in the first phase analyze and device algorithm for person identification on CASIA Gait Dataset. Later, tested on a private gait dataset to ensure the results from the first phase are consistent and accurate.(In the process of writing a research paper in a renowned journal to publish the findings)",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "IEEE Student Branch",
          company: "IEEE",
          company_url: "https://edu.ieee.org/in-depstar/",
          logo_path: "IEEE.png",
          duration: "Jan 2020 - Ongoing",
          location: "CHARUSAT, Anand",
          description:
            "Core Committee member, Program Committee • Conducted various workshops, Hackathons & webinars in the field of Machine Learning and Deep Learning",
          color: "#4285F4",
        },
        {
          title: "Campus Ambassador",
          company: "HackerEarth",
          company_url: "https://www.hackerearth.com",
          logo_path: "HackerEarth.png",
          duration: "Jan 2019 - Jan 2020",
          //location: "Hyderabad, Telangana",
          description:
            "As a campus ambassador, my role was to conduct coding competitions, webinars and monthly talks on HackerEarth platform",
          color: "#D83B01",
        },
        {
          title: "Campus Ambassador ",
          company: "GeeksforGeeks",
          company_url: "https://www.geeksforgeeks.org",
          logo_path: "geeksforgeeks.png",
          duration: "Jan 2018 - Dec 2018",
          //location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to conduct various hackathons, coding competitions and writing technical blogs on GeelsforGeeks platform",
          color: "#000000",
        },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects utilize recent State-of-the-art advancements in Deep Learning and sometimes even beating the results of the current SOTA 😉. My best experience is to build two fully functional and at present deployed Computer Vision softwares 'APISE' and 'TriNetra'",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "1.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with building softwares which leverage ML, AI, CV technologies",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Memnagar, Ahmedabad, Gujarat - 380052",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HbpmSYs8HVEarAxC7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7016434428",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
