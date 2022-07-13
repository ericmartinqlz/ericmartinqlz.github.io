import cjimg01 from '../../assets/images/certificates/MFEWDE.jpg';
import cwimg01 from '../../assets/images/certificates/MFEWDE.webp';
import cjimg02 from '../../assets/images/certificates/MPWA.jpg';
import cwimg02 from '../../assets/images/certificates/MPWA.webp';
import cjimg03 from '../../assets/images/certificates/BFFEWD.jpg';
import cwimg03 from '../../assets/images/certificates/BFFEWD.webp';
import cjimg04 from '../../assets/images/certificates/BDPW.jpg';
import cwimg04 from '../../assets/images/certificates/BDPW.webp';
import cjimg05 from '../../assets/images/certificates/BDGMG.jpg';
import cwimg05 from '../../assets/images/certificates/BDGMG.webp';
import cgdjimg01 from '../../assets/images/certificates/GD-IDA2021.jpg';
import cgdwimg01 from '../../assets/images/certificates/GD-IDA2021.webp';
import cojimg01 from '../../assets/images/certificates/BDVD.jpg';
import cowimg01 from '../../assets/images/certificates/BDVD.webp';

import pjimg01 from '../../assets/images/projects/MauMakan.jpg';
import pwimg01 from '../../assets/images/projects/MauMakan.webp';
import pjimg02 from '../../assets/images/projects/BeBOLA.jpg';
import pwimg02 from '../../assets/images/projects/BeBOLA.webp';
import pjimg03 from '../../assets/images/projects/MovInfo.jpg';
import pwimg03 from '../../assets/images/projects/MovInfo.webp';
import pjimg04 from '../../assets/images/projects/EricMartinQLZ.jpg';
import pwimg04 from '../../assets/images/projects/EricMartinQLZ.webp';

import simg1 from '../../assets/images/skills/photoshop.jpg';
import simg2 from '../../assets/images/skills/illustrator.jpg';

const data = {
  "biodata" : {
    "firstName" : "Eric",
    "lastName" : "Martin",
    "nickName" : "Eric",
    "birthDate" : "2001-10-12",
    "birthPlace" : "Jakarta",
    "email" : "ermapes2@gmail.com",
    "education" : "Universitas Sumatera Utara, Computer Science Undergraduate",
    "address" : "Jl. Pelita VI no 55, Medan Perjuangan, Indonesia",
    "goals" : [
      "Front-End Web Dev", 
      "Game Dev", 
      "Virtual Reality Dev"
    ],
    "hobbies" : [
      "Coding", 
      "Swimming", 
      "Gaming", 
      "Idoling"
    ],
    "favIdol" : "Takeuchi Miyu",
  },

  "certificates": {
    "frontend": [
      {
        "title" : "Menjadi Front-End Web Developer Expert",
        "from" : "Dicoding Indonesia",
        "url" : "https://www.dicoding.com/certificates/6RPN8D36RZ2M",
        "imgJPG" : cjimg01,
        "imgWEBP" : cwimg01
      },
      {
        "title" : "Membangun Progressive Web Apps",
        "from" : "Dicoding Indonesia",
        "url" : "https://www.dicoding.com/certificates/JMZVMGE2JZN9",
        "imgJPG" : cjimg02,
        "imgWEBP" : cwimg02
      },
      {
        "title" : "Belajar Fundamental Front-End Web Development",
        "from" : "Dicoding Indonesia",
        "url" : "https://www.dicoding.com/certificates/Y6RPNMJV5Z2M",
        "imgJPG" : cjimg03,
        "imgWEBP" : cwimg03
      },
      {
        "title" : "Belajar Dasar Pemrograman Web",
        "from" : "Dicoding Indonesia",
        "url" : "https://www.dicoding.com/certificates/981P29JV8XOY",
        "imgJPG" : cjimg04,
        "imgWEBP" : cwimg04
      },
      {
        "title" : "Belajar Dasar Git dengan GitHub",
        "from" : "Dicoding Indonesia",
        "url" : "https://www.dicoding.com/certificates/RVZK1R27QPD5",
        "imgJPG" : cjimg05,
        "imgWEBP" : cwimg05
      }
    ],
    "game": [
      {
        "title" : "Game Dev - Participant with The Best Project",
        "from" : "IT Dev Academy - Fasilkom TI USU",
        "url" : "https://www.linkedin.com/posts/ericmartinqlz_game-development-it-developer-academy-2021-activity-6905790049091244032-VYXg/",
        "imgJPG" : cgdjimg01,
        "imgWEBP" : cgdwimg01
      }
    ],
    "other": [
      {
        "title" : "Belajar Dasar Visualisasi Data",
        "from" : "Dicoding Indonesia",
        "url" : "https://www.dicoding.com/certificates/0LZ01RK83P65",
        "imgJPG" : cojimg01,
        "imgWEBP" : cowimg01
      }
    ]
  },

  "projects" : [
    {
      "title" : "MauMakan - Web Restaurant",
      "urlView" : "https://maumakan-81a40.web.app/",
      "urlSource" : "https://github.com/ericmartinqlz/mauMakan/",
      "imgJPG" : pjimg01,
      "imgWEBP" : pwimg01,
    },
    {
      "title" : "BeBOLA - Web Sepak Bola",
      "urlView" : "https://bebola-fa1f3.web.app/",
      "urlSource" : "https://github.com/ericmartinqlz/bebola/",
      "imgJPG" : pjimg02,
      "imgWEBP" : pwimg02,
    },
    {
      "title" : "MovInfo - Web Film & TV",
      "urlView" : "https://ericmartinqlz.github.io/mov-info/",
      "urlSource" : "https://github.com/ericmartinqlz/mov-info/",
      "imgJPG" : pjimg03,
      "imgWEBP" : pwimg03,
    },
    {
      "title" : "EricMartinQLZ - Web Personal",
      "urlView" : "https://ericmartinqlz.github.io/",
      "urlSource" : "https://github.com/ericmartinqlz/ericmartinqlz.github.io/",
      "imgJPG" : pjimg04,
      "imgWEBP" : pwimg04,
    }
  ],

  "skills" : {
    "technology" : [
      {
        "name" : "HTML5",
        "icon" : <i class="fab fa-html5"></i>,
        "color" : "#E54C21"
      },
      {
        "name" : "CSS3",
        "icon" : <i class="fab fa-css3-alt"></i>,
        "color" : "#007DC6"
      },
      {
        "name" : "Javascript",
        "icon" : <i class="fab fa-js-square"></i>,
        "color" : "#F0DB4E"
      },
      {
        "name" : "React",
        "icon" : <i class="fab fa-react"></i>,
        "color" : "#1F2229"
      },
      {
        "name" : "Vue",
        "icon" : <i class="fab fa-vuejs"></i>,
        "color" : "#40B883"
      },
      {
        "name" : "PHP",
        "icon" : <i class="fab fa-php"></i>,
        "color" : "#4D588E"
      },
      {
        "name" : "Github",
        "icon" : <i class="fab fa-github"></i>,
        "color" : "#1D1D1D"
      }
    ],
    "design" : [
      {
        "name" : "Adobe Photoshop",
        "image" : simg1,
      },
      {
        "name" : "Adobe Illustrator",
        "image" : simg2,
      }
    ]
  },

  "sns" : [
    {
      "name" : "Github",
      "url" :"https://github.com/ericmartinqlz",
      "icon" : <i class="fab fa-github"></i>
    },
    {
      "name" : "LinkedIn",
      "url" :"https://www.linkedin.com/in/ericmartinqlz/",
      "icon" : <i class="fab fa-linkedin-in"></i>
    },
    {
      "name" : "Twitter",
      "url" :"https://twitter.com/EricMartinQLZ",
      "icon" : <i class="fab fa-twitter"></i>
    },
    {
      "name" : "Instagram",
      "url" :"https://www.instagram.com/ericmartinqlz/",
      "icon" : <i class="fab fa-instagram"></i>
    },
    {
      "name" : "Facebook",
      "url" :"https://web.facebook.com/ericmartinqlz/",
      "icon" : <i class="fab fa-facebook-f"></i>
    },
    {
      "name" : "Youtube",
      "url" :"https://www.youtube.com/channel/UCLtQctgcyRl_AWwr15uyZCw",
      "icon" : <i class="fab fa-youtube"></i>
    },
  ]
}

export default data;