<!-- Improved compatibility of back to top link: See: https://github.com/notabota/traffix_web/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->

<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <!-- <a href="https://github.com/notabota/traffix_web">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Traffix Web Client</h3>

<p align="center">
    A web server that associated with the <strong> Traffix </strong> traffic management, allow user to observe and interact with the city transit network
    <!-- <br />
    <a href="https://github.com/notabota/traffix_web"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="https://github.com/notabota/traffix_web">View Demo</a>
    ·
    <a href="https://github.com/notabota/traffix_web/issues">Report Bug</a>
    ·
    <a href="https://github.com/notabota/traffix_web/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This website is a part of the **Traffix - Traffic Management System**. It provide the client the ability to monitor the
congestion activities on the local map, watch real-time object detection camera, get updated notifications about events
such as traffic jam or accident, and even have a statical page to visualize information about the city transit network.

Main functionality:

* Traffic network map, with detail information about traffic congestion activities.
* Real-time camera view, include object detection.
* Notifications and report
* Visualized information pages with graph and chart

<!-- Use the `BLANK_README.md` to get started. -->

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

### Built With

#### Frontend

* [![MUI Joy][MUI]][MUI Joy-url]

* [![React][React.js]][React-url]

#### Backend. tools and framework

* [![Firebase]][Firebase-url]

* [![Vite]][Vite-url]

* [Leaflet][Leaflet-url]

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps. Note that you have to have a running **Traffix**
system running on your local for the application to work.

### Prerequisites

First step is to install required dependencies

```sh
npm install npm@latest -g
```

You also need to have a active Firebase account, because in this project, I use Firestore as a database management
solution. After getting your authentication key, change the ```firebaseConfig``` varibles in your ```src/main.tsx```
file
to your json path.

```js
import firebaseKey from "../FIREBASE.json"

const firebaseConfig = firebaseKey;
```

### Installation

No installation is needed after completed prerequisites, all you need to do is run this command in the root directory:

```sh
npm run start
```

See ```package.json``` for more options of how you could build or preview this application.

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

<!-- USAGE EXAMPLES -->

## Usage

#### Homepage

![](images/homepage.png)

#### Map

![](images/map.png)

#### Notifications

![](images/notifications.png)

#### Reports

![](images/reports.png)

#### Statistics

![](images/statistics.png)

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

<!-- ROADMAP -->

## Roadmap

- [X]  Layout design
- [X]  Integrate with the database
- [X]  Real-time notification
- [ ]  City street network knowledge base
- [ ]  Create a tag system
- [ ]  Add useful visual components to map
- [ ]  Multi-language support

See the [open issues](https://github.com/notabota/traffix_web/issues) for a full list of proposed features (and known
issues).

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also
simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

[//]: # (<!-- LICENSE -->)

[//]: # (## License)

[//]: # ()
[//]: # (<p style="text-align: right;"><a href="#readme-top">back to top</a></p>)

[//]: # ()
[//]: # (<!-- CONTACT -->)

## Contact

Nguyễn Nguyên Vũ

* Gmail - nnv2205owo@gmail.com
* [Facebook](https://www.facebook.com/nnv2205owo/) - facebook.com/nnv2205owo
* [LinkedIn](https://www.linkedin.com/in/nnv2205owo/) - linkedin.com/in/nnv2205owo
* [Upwork](https://www.upwork.com/freelancers/~012078434f80806fe1) - upwork.com/freelancers/~012078434f80806fe1

Project Link: [https://github.com/notabota/traffix_web](https://github.com/notabota/traffix_web)

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

[//]: # (<!-- ACKNOWLEDGMENTS -->)

[//]: # (## Acknowledgments)

[//]: # ()
[//]: # (Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites)

[//]: # (to kick things off!)

[//]: # ()
[//]: # (* [Choose an Open Source License]&#40;https://choosealicense.com&#41;)

[//]: # (* [GitHub Emoji Cheat Sheet]&#40;https://www.webpagefx.com/tools/emoji-cheat-sheet&#41;)

[//]: # (* [Malven's Flexbox Cheatsheet]&#40;https://flexbox.malven.co/&#41;)

[//]: # (* [Malven's Grid Cheatsheet]&#40;https://grid.malven.co/&#41;)

[//]: # (* [Img Shields]&#40;https://shields.io&#41;)

[//]: # (* [GitHub Pages]&#40;https://pages.github.com&#41;)

[//]: # (* [Font Awesome]&#40;https://fontawesome.com&#41;)

[//]: # (* [React Icons]&#40;https://react-icons.github.io/react-icons/search&#41;)

<p style="text-align: right;"><a href="#readme-top">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white

[MUI Joy-url]: https://mui.com/joy-ui/getting-started/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[React-url]: https://reactjs.org/

[Firebase]: https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase

[Firebase-url]: https://firebase.google.com/

[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white

[Vite-url]: https://vitejs.dev/

[Leaflet-url]: https://leafletjs.com/

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge

[contributors-url]: https://github.com/notabota/traffix_web/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge

[forks-url]: https://github.com/notabota/traffix_web/network/members

[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge

[stars-url]: https://github.com/notabota/traffix_web/stargazers

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge

[issues-url]: https://github.com/notabota/traffix_web/issues

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge

[license-url]: https://github.com/notabota/traffix_web/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/othneildrew