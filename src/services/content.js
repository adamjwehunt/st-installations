export default {
  info: {
    email: "josh@strongtowerinstallations.com",
    phone: "(480) 358-5354",
    tt: {
      link: "https://www.thumbtack.com/-Gilbert-AZ/service/2365712",
      alt: "Our Thumbtack.com Page",
    },
    fb: {
      link: "https://www.facebook.com/strongtowerinstallations/",
      alt: "Our Facebook.com Page",
    },
  },
  page: {
    home: {
      hero: {
        header: {
          partOne: "Welcome to",
          partTwo: "StrongTower Installations",
        },
      },
      services: {
        headerText: "OUR SERVICES",
        summary:
          "Whether you are renting, buying or building a home in Arizona, we can help! From troubleshooting and salvaging old systems to bringing a new dream to reality, our crew specializes in solving the puzzle in the most respectful and cost-efficient way. We do what’s right for each customer, every time.",
      },
      social: {
        headerText: "FACEBOOK FEED",
      },
    },
    services: {
      banner: {
        id: "services-img",
        text: "WE LOVE WHAT WE DO",
        image: {
          src: require("../assets/banners/main_services.jpg"),
          alt: "",
        },
      },
      servicesList: [
        {
          id: "SecuritySystems",
          name: "Security Systems",
          summary:
            "Home security should be a high priority for any home owner whether you are married, a single parent, or simply need to add an appropriate alarm system for your family’s elders.",
          text: "Whether it be for your home, business, rental, or personal relative, we can customize the best form of security to get you the peace of mind you are looking for.  We install reliable, user-friendly equipment and are well versed in both wired and wireless systems. Over 10 years and counting, we have installed numerous systems and guarantee our work with 24/7 technical support; Your security is our top priority.",
          image: {
            src: require("../assets/stocks/security_monitoring_app.jpg"),
            alt: "Security Monitoring App",
          },
          faIcon: "fa-shield",
        },
        {
          id: "CamerasAndSurveillance",
          name: "Cameras & Surveillance",
          summary:
            "The increase in crime rates makes it necessary that each one of us take precautions of our own to keep our home and families safe. The easy and affordable access to technology has brought cameras and surveillance systems within reach for everyone.",
          text: "Innovation in the security camera industry has put a high quality picture in an affordable reach to everyone.  From a single camera to watch over your front porch to full perimeter and interior coverage, we will find the perfect balance for your home or business.",
          image: {
            src: require("../assets/stocks/cameras_sensors.jpg"),
            alt: "Cameras and Sensors",
          },
          faIcon: "fa-video-camera",
        },
        {
          id: "MediaRoomsAndSurroundSoundSystems",
          name: "Media Rooms & Sound Systems",
          summary:
            "There are many variables that can make or break or theater or media room. We can design rooms based on acoustics, aesthetics, and audio video needs. We work with architects and interior designers to make sure that every detail is perfect.",
          text: "This has become our most favorite work!  Using top notch equipment at a surprisingly affordable price, we love the “Wow!” our customers say after hearing their new system for the first time.  We install Surround Sound, multi-zone systems that not only consolidate all your devices, they also easily stream music from your phone or tablet.",
          image: {
            src: require("../assets/stocks/hometheater_2.jpg"),
            alt: "Home Theatre",
          },
          faIcon: "fa-music",
        },
        {
          id: "TvInstallation",
          name: "TV Installation",
          summary:
            "We do it all: Wall-mount flat panel televisions, install speakers and wiring, install rack systems, install security cameras, conceal wiring inside the walls, set-up and calibrate televisions and sound systems, programming on custom remote controls, and much more…",
          text: "We do it all: Wall-mount flat panel televisions, install soundbars, conceal wires inside the wall, set up and calibrate televisions with sound systems and even program universal remotes.  No need to worry, we take extra precautions when working with or around your prized television.",
          image: {
            src: require("../assets/stocks/tvmount_install.jpg"),
            alt: "TV Mount Install",
          },
          faIcon: "fa-television",
        },
        {
          id: "WifiSolutions",
          name: "Wifi Solutions",
          summary:
            "Relying on a single router is like asking a loud speaker in your living room to provide great sound throughout your home. It’s simple physics: WiFi waves don’t go through walls well and have an even harder time climbing stairs. Ever tried to stream a show from your bedroom when your router’s in the office downstairs? It’s a buffering nightmare.",
          text: "We are in a time where there’s nothing worse than trying to watch your favorite show or movie only to interrupted by it “buffering” every few minutes.  We are well aware of the headaches that troublesome wifi can cause and because of this, we have made it a priority to use the newest and most reliable products available.  Whether it is relocating the router by running hard lines to a more centralized location or installing a mesh network, we will find the solution that the cable guys aren’t willing to do.",
          image: {
            src: require("../assets/stocks/home_automation_app_1.jpg"),
            alt: "Home Wifi System",
          },
          faIcon: "fa-wifi",
        },
        {
          id: "HomeAutomation",
          name: "Home Automation",
          summary:
            "The term home automation means exactly that—automating the home and related household activities. This term encompasses a whole range of products and services ranging from the automation of lights in your home to the installation of a state-of-the art security system.",
          text: "The term home automation means exactly that—automating the home and related household activities. This term encompasses a whole range of products and services, such as, the automation of lights, thermostats and video streaming doorbells.",
          image: {
            src: require("../assets/stocks/home_automation_app_2.jpg"),
            alt: "Home Automation app",
          },
          faIcon: "fa-magic",
        },
      ],
    },
    about: {
      banner: {
        id: "about-img",
        text: "WE ARE STRONG TOWER",
        image: {
          src: require("../assets/stocks/security_monitoring_pc.jpg"),
          alt: "",
        },
      },
      mission: {
        header: "OUR MISSION",
        quote: "Technology is our passion, customization is our specialty.",
        summary: {
          partOne:
            "Hello, we are Strong Tower Installations. We are a group of highly talented individuals specialized in creating innovative home theatre and security solutions. Our mission is to stay true to the nature of quality sound and security as an evidence-driven methodology to create user-centered products while taking advantage of our technical capabilities.",
          partTwo:
            "We’re locally owned & operated out of Gilbert, Arizona. When you call us, you’ll get a live person. Not able to call? No worries, we’ve got 24/7 live SMS (text) support too.",
        },
      },
      team: {
        header: "OUR TEAM",
        image: {
          src: require("../assets/strongtower_aboutus.jpg"),
          alt: "Three handsome gentlemen",
        },
      },
    },
    faqs: {
      banner: {
        id: "faqs-img",
        text: "COMMONLY ASKED QUESTIONS",
        image: {
          src: require("../assets/stocks/home_automation.jpg"),
          alt: "",
        },
      },
      header: "FAQS",
      qsAndAs: [
        {
          id: 1,
          q: "What is your typical process for working with a new customer?",
          a: "We take the time to listen to what they need and want, striving to make good and honest suggestions .We then move forward with a fair and honest quote.",
        },
        {
          id: 2,
          q: "What education and/or training do you have that relates to your work?",
          a: "I have 10 years experience in this field and I am learning new things everyday that I am using on the jobsite. I go to all the training that distributors have so that I can be up to date on what is happening in the industry.",
        },
        {
          id: 3,
          q: "How did you get started doing this type of work?",
          a: "I was looking for a Job and started as a sales rep for a Security company. In a short period of time I moved from sales rep to tech and then to Operations Manager. I love installing, problem solving, and making customers happy!",
        },
        {
          id: 4,
          q: "What types of customers have you worked with?",
          a: "All types, we have done work for homeowners, small business, and large business.",
        },
        {
          id: 5,
          q: "What advice would you give a customer looking to hire a provider in your area of work?",
          a: "Look for someone that cares about what you want and is willing to come up with good solutions to accomplish what you are after.",
        },
        {
          id: 6,
          q: "What questions should customers think through before talking to professionals about their project?",
          a: "Who is responsible for providing parts and supplies, what else should I look at accomplishing since I already have committed to hiring a professional. What do I want to accomplish, and what is the end goal.",
        },
      ],
    },
    testimonials: {
      banner: {
        id: "testimonials-img",
        text: "WHAT PEOPLE ARE SAYING",
        image: {
          src: require("../assets/stocks/home_automation_lady.jpg"),
          alt: "",
        },
      },
      ratings: {
        header: "RATINGS",
        thumbtack: {
          image: {
            src: require("../assets/social/thumbtack_ratings.png"),
            alt: "Thumbtack Ratings",
          },
          logo: {
            src: require("../assets/social/thumbtack_logo.png"),
          },
        },
        facebook: {
          image: {
            src: require("../assets/social/facebook_ratings.png"),
            alt: "Facebook Ratings",
          },
          logo: {
            src: require("../assets/social/facebook_logo.png"),
          },
        },
      },
      reviews: {
        header: "REVIEWS",
        fb: {
          logo: require("../assets/social/facebook_logo_small.png"),
          reviewList: [
            {
              id: 1,
              name: "Tara Davis",
              rating: 5,
              text: "Excellent customer service. Installs quality products and is available to help with questions. Highly recommended!",
              date: "Feb 10, 2018",
            },
            {
              id: 2,
              name: "Kathy Lynch",
              rating: 5,
              text: "Went above and beyond when installing a surround sound system and continuesto be on call when we need help with our security system. Professional, kind, and cleaned up every inch of dust from their work. I think my house was cleaner when they finished :) Highly recommend!",
              date: "June 28, 2017",
            },
            {
              id: 3,
              name: "Michael Lynch",
              rating: 5,
              text: "Very professional company. Very thorough in the product review and most importantly...the after install consult, which showed us how to use the system and trouble shooting if we run into any issues. They went above and beyond and I highly recommend Strong Tower to anyone looking to add surround sound and/or security camera's in their home.",
              date: "June 30, 2017",
            },
            {
              id: 4,
              name: "Brandon Ray",
              rating: 5,
              text: "We have used Strong Tower Security for 3 different jobs now and I can't say enough about the team and the work they do. Very professional, easy to work with, fair pricing, and quality work, nothing more I could have asked for. Thank you Jesse and team!",
              date: "March 22, 2017",
            },
            {
              id: 5,
              name: "Sujean Wilson",
              rating: 5,
              text: "Awesome Company to work with. Will be using them again in the near future to install a camera on my front door once my security screen is installed. Thank you Jesse.",
              date: "April 19, 2016",
            },
            {
              id: 6,
              name: "Ryan Schultze",
              rating: 5,
              text: "Jesse is a true professional. I would highly recommend his team for any project.",
              date: "April 29, 2017",
            },
          ],
        },
        tt: {
          logo: require("../assets/social/thumbtack_logo_small.png"),
          reviewList: [
            {
              id: 1,
              name: "James G.",
              rating: 5,
              text: "Jessie is hands down the only person I would use for needs/upgrades in the future. I did a major remodel on home in November 2016 with Starpower (hi-fi) retailer located in North Scottsdale. Have had nothing but problems ever since. After too many follow up appointments & spending a small fortune I cut them off & got Jessie out to clean up their mess. Not only did he guide me on how to fix everything but was quick to come up with ways to improve system without replacing things that didn’t need to be replaced. If you don’t consider him for your upcoming project you have already made a mistake.",
              date: "Jul 1, 2018",
            },
            {
              id: 2,
              name: "Paulette W.",
              rating: 5,
              text: "Jesse is terrific. He knew we were on a budget because of wedding and he made sure surround sound system was completed on time. They cleaned up all debri and stuck around to demonstrate operations of our system eventhough my fiance was late getting home. I will hire them again for our upgrades. A true professional.",
              date: "Nov 22, 2017",
            },
            {
              id: 3,
              name: "Jonathan S.",
              rating: 5,
              text: "Professionalism and excellence are two words that come to mind with my experience. My entire experience was great. I told them what I wanted and they made it happen. My expectations were high but they were met and exceeded. My cameras are hard wired yet appear wireless because of how well they were installed. If I expand the number of cameras I have installed, I will without question be using Strong Tower Security. I highly recommend them.",
              date: "Dec 18, 2016",
            },
            {
              id: 4,
              name: "Jacqueline P.",
              rating: 5,
              text: 'Highly recommended! We had multiple technicians from other companies attempt to troubleshoot an intermittent issue with our home A/V system making a squealing noise, with no resolution. Jesse was quickly responsive to initial questions, scheduled promptly to come over to evaluate options, proposed equipment replacement at a modest cost & completely fixed the audio as well as offered an easy "smart" remote to simplify component switching. Everything\'s working great, thank you! :)',
              date: "May 27, 2018",
            },
            {
              id: 5,
              name: "Vince D.",
              rating: 5,
              text: "I looked at several replies to my job request, looked at all of their reviews. Had estimates done by 2, and went with Jesse and Strong Tower. Jesse and his crew were punctual, professional, and personable. They did excellent work and did so quickly and efficiently. He made sure I was well versed on how to use the system and their commitment to customer service. Even days after the install he is communicating with me to make sure the system is running as expected, to my standards, and his satisfaction with the equipment. I have already recommended Jesse to family and friends. Great job!",
              date: "May 19, 2018",
            },
            {
              id: 6,
              name: "Karen N.",
              rating: 5,
              text: "The team were very professional and helpful and recommended very high quality products. Every room looks and sounds amazing and when I had questions after the fact Jesse was very helpful. Great company and reassuring to know the service doesn’t stop when the job is complete",
              date: "May 16, 2018",
            },
          ],
        },
      },
    },
    contact: {
      banner: {
        text: "LET'S GET IN TOUCH",
        id: "contact-img",
        image: {
          src: require("../assets/stocks/hometheatre_1.jpg"),
          alt: "",
        },
      },
      header: "YOUR MESSAGE",
    },
  },
  component: {
    header: {
      callText: "Call or text",
      logo: {
        main: {
          src: require("../assets/logo.png"),
        },
        small: {
          src: require("../assets/logo_small.png"),
        },
        alt: "Strong Tower Installations",
      },
    },
    footer: {
      contact: {
        headerText: "CONTACT",
        googleMapLink:
          "https://www.google.com/maps/place/Gilbert,+AZ+85295/@33.3007877,-111.7538555,14z/data=!3m1!4b1!4m5!3m4!1s0x872bac6615ba7ac3:0x6c67e61e58ed8985!8m2!3d33.3073768!4d-111.7435799",
        locationText: "Gilbert, Arizona 85295",
        email: {
          subject: "Hello Strong Tower Installations",
          intro: "Hello Strong Tower Installations,",
          body: "Please contact me. I’m interested in learning more.",
          outro: "Thank you,",
        },
      },
      about: {
        headerText: "ABOUT US",
        summary:
          "We are insightful creators and builders who offer innovative solutions in alarms, cameras, home automation, and surround sound. Our mission is to install the latest and greatest technologies to deliver extraordinary value and security for you and your family.",
      },
    },
    partners: {
      headerText: "OUR PARTNERS",
      logos: [
        {
          id: 1,
          src: require("../assets/partners/2gig_logo.jpg"),
          link: "",
          alt: "2gig",
        },
        {
          id: 2,
          src: require("../assets/partners/alarmdotcom_logo.jpg"),
          link: "",
          alt: "Alarmdotcom",
        },
        {
          id: 3,
          src: require("../assets/partners/cctvcore_logo.jpg"),
          link: "",
          alt: "Cctvcore",
        },
        {
          id: 4,
          src: require("../assets/partners/denom_logo.jpg"),
          link: "",
          alt: "Denom",
        },
        {
          id: 5,
          src: require("../assets/partners/elura_logo.jpg"),
          link: "",
          alt: "Elura",
        },
        {
          id: 6,
          src: require("../assets/partners/honeywell_logo.jpg"),
          link: "",
          alt: "Honeywell",
        },
        {
          id: 7,
          src: require("../assets/partners/jamo_logo.jpg"),
          link: "",
          alt: "Jamo",
        },
        {
          id: 8,
          src: require("../assets/partners/mountainwest_logo.jpg"),
          link: "",
          alt: "Mainwest",
        },
        {
          id: 9,
          src: require("../assets/partners/onkyo_logo.jpg"),
          link: "",
          alt: "Onkyo",
        },
        {
          id: 10,
          src: require("../assets/partners/ring_logo.jpg"),
          link: "",
          alt: "Ring",
        },
        {
          id: 11,
          src: require("../assets/partners/samsung_logo.jpg"),
          link: "",
          alt: "Samsung",
        },
        {
          id: 12,
          src: require("../assets/partners/wave_logo.jpg"),
          link: "",
          alt: "Wave",
        },
        {
          id: 13,
          src: require("../assets/partners/yamaha_logo.jpg"),
          link: "",
          alt: "Yamaha",
        },
      ],
    },
  },
};
