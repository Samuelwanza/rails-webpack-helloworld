<!-- TABLE OF CONTENTS -->

## 📗 Table of Contents

- [📖 Rails-React-with-Webpack ](#-fullstack---rails-with-react-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖  Rails with React <a name="about-project"></a>

**Fullstack - Rails with React and webpack** is a fullstack app that have 5 greetings displaying on a the index page

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
    <li><a href="https://reactjs.org/">React</a></li>
</details>
<details>
  <summary>Server</summary>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Rails</a></li>
</details>
<details>
  <summary>Database</summary>
    <li><a href="https://www.postgresql.org/">Postgres</a></li>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Built using Ruby on Rails with React**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```
    ruby >= 3.2.0
    rails >= 7.0
    postgres >= 15.3
    node
```

### Setup

Clone this repository to your desired folder:

```bash
  git clone https://github.com/samuelwanza/rails-webpack-helloworld.git
```

You need to setup database for these project

```
  development = your_dataabase_dev
  test        = your_datasebase_test
  production  = your_datasebase_prod
```

or you can use your own database and change the ```config/database.yml```

```yml
  default: &default
    adapter: postgresql
    encoding: unicode
    pool: 5
    username: [your_username]
    password: [your_password]
    host: localhost

  development:
    <<: *default
    database: [your_database_for_development]

  test:
    <<: *default
    database: [your_database_for_test]

  production:
    <<: *default
    database: [your_database_for_production]
```

### Install

Install this project with:

```bash
  cd hello-rails-react
  bundle install
  npm install
```

it will install the required gemfile for running the project

### Usage

to use this project:

```bash
   npm run build
   bin/rails server
```

it will run the the server on ```localhost:3000```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="author"></a>
👤 **Cephas Tokoli**
- GitHub: [@samuel wanza](https://github.com/samuelwanza)
- Twitter: [@Samuel wanza](https://twitter.com/samuelmunguti9)
- LinkedIn: [Samuel wanza](https://www.linkedin.com/in/samuel-munguti)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **add more features**
- **implement styling**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ctokoli/hello-rails-react.git/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project you can share this project to your friend

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank microverse for this project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.